#  -*- coding: UTF-8 -*-

# MindPlus
# Python
from SerialCommunication import *
import struct
import time


# creat a list
def creatList(num1, num2):
    newList = []
    newList.append(num1)
    newList.append(num2)
    return newList


# combine the list
def combineList(list1, list2):
    cList = list1
    cList.extend(list2)
    return cList


# encode the character to bytes
def encode(in_str, encoding='utf-8'):
    if isinstance(in_str, bytes):
        return in_str
    else:
        return in_str.encode(encoding)

com = None
# open the serial port 
def openPort(port):
    global com
    com = Communication(port,115200,timeout=0.002)
    t = 3
    print('Time delay after open port: ', str(t))
    time.sleep(t)
def printH(h,s):
    print(h,end=" ")
    print(s)
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
        printH('a',response)
        response=response.decode('ISO-8859-1')
        printH('b',response)
        if response != '':
            printH('c',response)
            response = response[:-2]   # delete '\r\n'
            if response.lower() == token.lower():
                return [response, allPrints]
            else:
                print(response, flush=True)
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


# send a short skill string
def sendSkillStr(skillStr, delayTime):
    in_str = skillStr + '\n'
    # com.write(bytes(skillStr, 'utf-8'))
    com.Send_data(encode(in_str))
    checkResponse('k')
    # time.sleep(delayTime+1)


# if token == 'c' or token == 'm' or token == 'i' or token == 'b' or token == 'u' or token == 't'
# if the length of list var is > 22, send 22 elements each time, untill all the elements are sent over
def sendLongCmd(token, var, delayTime):
    message = token
    count = 0
    var = list(map(int, var))
            
    in_str = token.encode() + struct.pack('b' * len(var), *var) + '~'.encode()
    com.Send_data(encode(in_str))
    # for element in var:
    #     message += str(element) + " "
    #     count +=1
    #     if count == 22 or count == len(var):
    #         com.Send_data(encode(message))
    #         message = ""
    #         count = 0
    checkResponse(token)
    time.sleep(delayTime)


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
        global com
        com.Close_Engine()  # close serial port


    