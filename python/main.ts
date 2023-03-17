enum DIRECTION {
    //% block="+"
    "1",
    //% block="-"
    "-1",
}

enum NOTE {
    //% block="C1"
    10,
    //% block="D1"
    12,
    //% block="E1"
    14,
    //% block="F1"
    15,
    //% block="G1"
    17,
    //% block="A1"
    19,
    //% block="B1"
    21,
    //% block="C2"
    22,
    //% block="D2"
    24,
    //% block="E2"
    26,
    //% block="F2"
    27,
    //% block="G2"
    29,
    //% block="A2"
    31,
    //% block="B2"
    33
}

//% color="#1e90ff" iconWidth=50 iconHeight=40
namespace petoi_robot{
/*    
    //% block="import libraries" blockType="command"
    export function importLibraries(parameter: any, block: any) {
        Generator.addImport(`import binascii`);
        Generator.addImport(`import serial`);
		Generator.addImport(`import time`);
        Generator.addImport(`from PetoiRobot import *`);
    }
*/


    //% block="auto connect serial ports" blockType="command"
    export function autoConnect(parameter: any, block: any) {
/*        
        let port=parameter.PORT.code;

        Generator.addImport(`import binascii`);
        Generator.addImport(`import serial`);

		Generator.addImport(`import time`);
        Generator.addImport(`from SerialCommunication import *`);
*/
        Generator.addImport(`from PetoiRobot import *`);

		Generator.addCode(`autoConnect()`);
    }


    //% block="open serial port [PORT]" blockType="command"
    //% PORT.shadow="string" PORT.defl="COM3"
    export function openSerialPort(parameter: any, block: any) {
        let port=parameter.PORT.code;
/*
        Generator.addImport(`import binascii`);
        Generator.addImport(`import serial`);

		Generator.addImport(`import time`);
        Generator.addImport(`from SerialCommunication import *`);
*/
        Generator.addImport(`from PetoiRobot import *`);

		Generator.addCode(`openPort(${port})`);
    }


    //% block="Deactivate Gyro" blockType="command"
    export function deacGyro(parameter: any, block: any) {
    
        Generator.addCode(`deacGyro()`);
        
    }
	
	
	//% block="Execute the skill [SKILL] and delay [TIME] seconds" blockType="command"
    //% SKILL.shadow="dropdown"  SKILL.options="SKILL"
    //% TIME.shadow="number" TIME.defl=0.2
    export function executeSkill(parameter: any, block: any) {
        var skill=parameter.SKILL.code;
        var t=parameter.TIME.code;

        Generator.addCode(`sendSkillStr('${skill}', ${t})`); 
    }  
	

    //% block="Get [INDEX] angle" blockType="reporter"
	//% INDEX.shadow="dropdown"  INDEX.options="INDEX"
	export function getJointAngle(parameter: any, block: any) {
        var index=parameter.INDEX.code;

		Generator.addCode(`getCurAng(${index})`);
	}
	
	//% block="[INDEX] to [ANGLE] degree" blockType="reporter"
	//% INDEX.shadow="dropdown"  INDEX.options="INDEX"
	//% ANGLE.shadow="range"  ANGLE.params.min=-125  ANGLE.params.max=125  ANGLE.defl=30
	export function jointAngle(parameter: any, block: any) {
        var index=parameter.INDEX.code;
        var angle=parameter.ANGLE.code;

		Generator.addCode(`creatList(${index}, ${angle})`);
	}


    //% block="[INDEX] [DIRECTION] [ANGLE] degree" blockType="reporter"
	//% INDEX.shadow="dropdown"  INDEX.options="INDEX"
    //% DIRECTION.shadow="dropdown"  DIRECTION.options="DIRECTION"  DIRECTION.defl="DIRECTION.+"
	//% ANGLE.shadow="range"  ANGLE.params.min=-125  ANGLE.params.max=125  ANGLE.defl=30
	export function jointRelativeAngle(parameter: any, block: any) {
        var index=parameter.INDEX.code;
        var symbol=parameter.DIRECTION.code;
        var angle=parameter.ANGLE.code;

		Generator.addCode(`relative2abs(${index}, ${symbol}, ${angle})`);
	}
	

    //% block="Joint index and angle list [LIST]" blockType="reporter"
	//% LIST.shadow="list"  LIST.defl='8, 30, 9, 30, 10, 30, 11, 30'
	export function jointAngleList(parameter: any, block: any) {
        var listJointAngle=parameter.LIST.code;

		Generator.addCode(`${listJointAngle}`);
	}
	
	
	//% block="Turn sequentially [LIST] and delay [TIME] seconds" blockType="command"
    //% LIST.shadow="normal"
    //% TIME.shadow="number" TIME.defl=0.2
	export function executeSeq(parameter: any, block: any) {
        var iaList=parameter.LIST.code;
        var t=parameter.TIME.code;

        Generator.addCode(`# The list format is [joint index, angle, joint index, angle...]`)
        Generator.addCode(`sendLongCmd('M', ${iaList}, ${t})`);
	}
	
	//% block="Turn simultaneously [LIST] and delay [TIME] seconds" blockType="command"
    //% LIST.shadow="normal"
    //% TIME.shadow="number" TIME.defl=0.2
	export function executeSim(parameter: any, block: any) {
        var iaList=parameter.LIST.code;
        var t=parameter.TIME.code;

        Generator.addCode(`# The list format is [joint index, angle, joint index, angle...]`)
        Generator.addCode(`sendLongCmd('I', ${iaList}, ${t})`);
	}



    //% block="action frame [ANGLE]" blockType="reporter"
	//% ANGLE.shadow="list"  ANGLE.defl='0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 30, 30, 30, 30, 30, 30'
	export function angleList(parameter: any, block: any) {
        var angle=parameter.ANGLE.code;
        // return angle;
        Generator.addCode(`${angle}`)
	}


    //% block="Transform to frame [LIST] and delay [TIME] seconds" blockType="command"
    //% LIST.shadow="normal"
    //% TIME.shadow="number" TIME.defl=0.2
	export function executeAllSim(parameter: any, block: any) {
        var iaList=parameter.LIST.code;
        var t=parameter.TIME.code;

        Generator.addCode(`# The length of list is 16. The list format is [angle, angle, angle...]`)
        Generator.addCode(`sendLongCmd('L', ${iaList}, ${t})`);
	}


    //% block="Music note[NOTE] Duration 1/[DUR]" blockType="reporter"
	//% NOTE.shadow="dropdown"  NOTE.options="NOTE"  NOTE.defl="NOTE.C1"
	//% DUR.shadow="range"  DUR.params.min=1  DUR.params.max=127  ANGLE.defl=2
	export function noteDur(parameter: any, block: any) {
        var note=parameter.NOTE.code;
        var dur=parameter.DUR.code;

		Generator.addCode(`creatList(${note}, ${dur})`);
	}


    //% block="Music note and duration list [LIST]" blockType="reporter"
	//% LIST.shadow="list"  LIST.defl='14,4,14,4,21,4,21,4,23,4,23,4,21,2'
	export function noteDurList(parameter: any, block: any) {
        var listNoteDur=parameter.LIST.code;

		Generator.addCode(`${listNoteDur}`);
	}


    //% block="Play melody [LIST] and delay [TIME] seconds" blockType="command"
    //% LIST.shadow="normal"
    //% TIME.shadow="number" TIME.defl=1
	export function playMelody(parameter: any, block: any) {
        var noteDurList=parameter.LIST.code;
        var t=parameter.TIME.code;

        Generator.addCode(`# The list format is [note, duration, note, duration...]`)
        Generator.addCode(`sendLongCmd('B', ${noteDurList}, ${t})`);
	}


    //% block="Execute the command [CMD] and delay [TIME] seconds" blockType="command"
    //% CMD.shadow="string" CMD.defl="m0 -60 0 60 0 0"
    //% TIME.shadow="number" TIME.defl=0.2
    export function executeCmd(parameter: any, block: any) {
        let cmd=parameter.CMD.code;
        var t=parameter.TIME.code;

        Generator.addCode(`sendCmdStr(${cmd}, ${t})`);

    }


	//% block="Close serial port" blockType="command"
    export function closeSerialPort(parameter: any, block: any) {
    
        Generator.addCode(`closePort()`);
        
    }


/*
    function replaceQuotationMarks(str:string){
            str=str.replace(/"/g, ""); //去除所有引号
            return str
    }
*/

    
}
