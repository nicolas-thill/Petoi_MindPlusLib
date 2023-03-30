#  -*- coding: UTF-8 -*-

# MindPlus
# Python
from ardSerial import *
from SerialCommunication import *
import struct
import time
import re


# use to print debug information
def printH(head, value):
    print(head, end=' ')
    print(value)

'''
def getPortList():
    if isinstance(goodPorts, dict):
        p = list(goodPorts.keys())
    elif isinstance(goodPorts, list):
        p = goodPorts
    return p
'''

def deacGyro():
    res = send(goodPorts, ['G', 0])
    # printH("gyro status:",res )
    logger.debug(f'gyro status:{res}')
    if res != -1 and res[0] == 'G':
        res = send(goodPorts, ['G', 0])
        # printH("gyro status:",res )
        logger.debug(f'gyro status:{res}')


def getAngleList():
    # global currentAng
    token = 'j'
    task = [token, 0]
    # in_str = token + '\n'
    # com.Send_data(encode(in_str))
    # rawData = checkResponse(token)
    # p = getPortList()
    # rawData = sendTask(goodPorts, p[0], task)
    rawData = send(goodPorts, task)

    logger.debug(f'rawData={rawData}')
    p = re.compile(r'^(.*),',re.MULTILINE)
    for one in p.findall(rawData[1]):
        angle = re.sub('\t','',one)
    strAngleList = angle.split(',')
    logger.debug(f'strAngleList={strAngleList}')
    angleList = list(map(lambda x:int(x),strAngleList)) #angle value have to be integer
    logger.debug(f'angleList={angleList}')
    return angleList

def getCurAng(index):
    currentList = getAngleList()
    return currentList[index]


# creat an absolut value list
def absValList(num1, num2):
    return [num1, num2]


# rotate angle from relative value to absolute value
# creat a offset value list
def relativeValList(index, symbol, angle):
    newList = []
    relative = int(symbol) * angle
    if int(symbol) == 1:
        relative = '+' + str(angle)
    else:
        relative = '-' + str(angle)
    logger.debug(f'relative={relative}')
    newList.append(index)
    newList.append(relative)
    # curAngle = getCurAng(index)
    # absAngle = curAngle + int(symbol) * angle
    # absAngle = min(125,max(-125,absAngle))
    # logger.debug(f'absAngle={absAngle}')
    # newList.append(index)
    # newList.append(absAngle)
    return newList

def rotateJoints(token, var, delayTime):
    currentAngleList = getAngleList()
    newList = []

    step = 2
    indexAngle = [var[i:i+step] for i in range(0, len(var), step)]
    for iA in indexAngle:
        if isinstance(iA[1], int):
            currentAngleList[iA[0]] = iA[1]
        elif isinstance(iA[1], str):
            if iA[1][0] == '+':
                currentAngleList[iA[0]] += int(iA[1][1:])
            elif iA[1][0] == '-':
                currentAngleList[iA[0]] -= int(iA[1][1:])
            currentAngleList[iA[0]] = min(125,max(-125,currentAngleList[iA[0]]))
        newList += [iA[0], currentAngleList[iA[0]]]
    sendLongCmd(token, newList, delayTime)

            
'''
# combine the list
def combineList(list1, list2):
    cList = list1
    cList.extend(list2)
    return cList
'''

# encode the character to bytes
def encode(in_str, encoding='utf-8'):
    if isinstance(in_str, bytes):
        return in_str
    else:
        return in_str.encode(encoding)

# com = None
# open the serial port 
def openPort(port):
    # global com
    # com = Communication(port,115200,timeout=0.002)
    allPorts = Communication.Print_Used_Com()
    showSerialPorts(allPorts)
    if platform.system() != "Windows" and '/dev' not in port:
        port = '/dev/' + port
    serialObject = Communication(port, 115200, 1)
    testPort(goodPorts, serialObject, port.split('/')[-1])
    t = 3
    print('Time delay after open port: ', str(t))
    time.sleep(t)


# auto connect serial ports
def autoConnect():
    connectPort(goodPorts)
    logger.debug(f'goodPorts: {goodPorts}')

'''
# check if there is a response
def checkResponse(tk, timeout=0):
    token = tk
    if token == 'k' or token == 'K':
        threshold = 4
    else:
        threshold = 1
    startTime = time.time()
    allPrints = ''
    while True:
        response = com.Read_Line()
        # printH('a',response)
        response=response.decode('ISO-8859-1')
        # printH('b',response)
        if response != '':
            # printH('c',response)
            response = response[:-2]   # delete '\r\n'
            if response.lower() == token.lower():
                # printH('response: ', response)
                # printH('allPrints: ', allPrints)
                return [response, allPrints]
            else:
                # print(response, flush=True)
                allPrints += response + '\n'
        now = time.time()
        if (now - startTime) > threshold:
            print('Elapsed time: ', end='')
            print(threshold, end=' seconds\n', flush=True)
            threshold += 2
            if threshold > 10:
                return -1
        if 0 < timeout < now - startTime:
            return -1
        time.sleep(0.001)
'''

# send a short skill string
def sendSkillStr(skillStr, delayTime):
    # in_str = skillStr + '\n'
    # com.write(bytes(skillStr, 'utf-8'))
    # com.Send_data(encode(in_str))
    # checkResponse('k')
    # time.sleep(delayTime)
    logger.debug(f'skillStr={skillStr}')
    send(goodPorts, [skillStr,delayTime])
    

# send a command string
def sendCmdStr(cmdStr, delayTime):
    logger.debug(f'serialCmd={cmdStr}')
    if cmdStr != '':
        token = cmdStr[0]
        logger.debug(f'cmdList={token}')
        cmdList = cmdStr[1:].replace(',',' ').split()
        logger.debug(f'cmdList={cmdList}')

        if len(cmdList) <= 1:
            send(goodPorts, [cmdStr, delayTime])
        else:
            cmdList = list(map(lambda x:int(x),cmdList))
            send(goodPorts, [token, cmdList, delayTime])


# if token == 'c' or token == 'm' or token == 'i' or token == 'b' or token == 'u' or token == 't'
# if the length of list var is > 22, send 22 elements each time, untill all the elements are sent over
def sendLongCmd(token, var, delayTime):
    # message = token
    # count = 0
    var = list(map(int, var))
            
    # in_str = token.encode() + struct.pack('b' * len(var), *var) + '~'.encode()
    # com.Send_data(encode(in_str))
    # for element in var:
    #     message += str(element) + " "
    #     count +=1
    #     if count == 22 or count == len(var):
    #         com.Send_data(encode(message))
    #         message = ""
    #         count = 0
    # checkResponse(token)
    # time.sleep(delayTime)
    send(goodPorts,[token, var, delayTime])


# get analog value of a pin
def readAnalogValue(pin):
    token = 'R'
    task = [token, [97, pin], 0]

    # p = getPortList()
    # rawData = sendTask(goodPorts, p[0], task)
    rawData = send(goodPorts, task)
    if rawData!=-1:
        logger.debug(f'rawData={rawData}')
        # result = rawData[1][:-2]
        result = rawData[1].replace('\r','').replace('\n','')    # delete '\r\n'
        if  "Got " in result:  
            # printH('###',result.split())
            # printH("result is: ",result.split()[1])
            return int(result.split()[1])
    else:
        return -1


# get digital value of a pin
def readDigitalValue(pin):
    token = 'R'
    task = [token, [100, pin], 0]

    # p = getPortList()
    # rawData = sendTask(goodPorts, p[0], task)
    rawData = send(goodPorts, task)
    if rawData!=-1:
        logger.debug(f'rawData={rawData}')
        # result = rawData[1][:-2]
        result = rawData[1].replace('\r','').replace('\n','')    # delete '\r\n'
        if  "Got " in result:  
            # printH('###',result.split())
            # print("result is ")
            # print(result.split()[1])
            return int(result.split()[1])
    else:
        return -1


# set analog value of a pin
def writeAnalogValue(pin, val):
    token = 'W'
    task = [token, [97, pin, val], 0]

    rawData = send(goodPorts, task)


# set digital value of a pin
def writeDigitalValue(pin, val):
    token = 'W'
    task = [token, [100, pin, val], 0]

    rawData = send(goodPorts, task)



# # initialize a list
# def initList(var):
#     angList = var.split(",")
#     str_to_int = list(map(int, angList))
#     return str_to_int

# close the serial port
def closePort():
        """
        close serial port
        """
        # global com
        # com.Close_Engine()  # close serial port
        closeAllSerial(goodPorts)

