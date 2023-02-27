enum INDEX {
    //% block="0"
    0,
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4,
    //% block="5"
    5,
    //% block="6"
    6,
    //% block="7"
    7,
    //% block="8"
    8,
    //% block="9"
    9,
    //% block="10"
    10,
    //% block="11"
    11,
    //% block="12"
    12,
    //% block="13"
    13,
    //% block="14"
    14,
    //% block="15"
    15
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
	
	
	//% block="Excute the skill [SKILL] and delay [TIME] seconds" blockType="command"
    //% SKILL.shadow="dropdown"  SKILL.options="SKILL"
    //% TIME.shadow="number" TIME.defl=0.2	
    export function excuteSkill(parameter: any, block: any) {
        var skill=parameter.SKILL.code;
        var t=parameter.TIME.code;

        Generator.addCode(`sendSkillStr('${skill}', ${t})`); 
    }  
	
	
	//% block="Joint index [INDEX] Rotate angle [ANGLE]" blockType="reporter"
	//% INDEX.shadow="dropdown"  INDEX.options="INDEX"  INDEX.defl="INDEX.8"
	//% ANGLE.shadow="range"  ANGLE.params.min=-125  ANGLE.params.max=125  ANGLE.defl=30
	export function jointAngle(parameter: any, block: any) {
        var index=parameter.INDEX.code;
        var angle=parameter.ANGLE.code;

		Generator.addCode(`creatList(${index}, ${angle})`);
	}
	
	
	//% block="Join [LIST1] and [LIST2]" blockType="reporter"
	//% LIST1.shadow="normal"
	//% LIST2.shadow="normal"
	export function joinList(parameter: any, block: any) {
        var l1=parameter.LIST1.code;
        var l2=parameter.LIST2.code;

		Generator.addCode(`combineList(${l1}, ${l2})`);
	}


    //% block="Joint index and rotate angle list [LIST]" blockType="reporter"
	//% LIST.shadow="list"  LIST.defl='8, 30, 9, 30, 10, 30, 11, 30'
	export function jointAngleList(parameter: any, block: any) {
        var listJointAngle=parameter.LIST.code;

		Generator.addCode(`${listJointAngle}`);
	}
	
	
	//% block="Turn some joints sequentially [LIST] and delay [TIME] seconds" blockType="command"
    //% LIST.shadow="normal"
    //% TIME.shadow="number" TIME.defl=0.2
	export function excuteSeq(parameter: any, block: any) {
        var iaList=parameter.LIST.code;
        var t=parameter.TIME.code;

        Generator.addCode(`# The list format is [joint index, angle, joint index, angle...]`)
        Generator.addCode(`sendLongCmd('M', ${iaList}, ${t})`);
	}
	
	//% block="Turn some joints simultaneously [LIST] and delay [TIME] seconds" blockType="command"
    //% LIST.shadow="normal"
    //% TIME.shadow="number" TIME.defl=0.2
	export function excuteSim(parameter: any, block: any) {
        var iaList=parameter.LIST.code;
        var t=parameter.TIME.code;

        Generator.addCode(`# The list format is [joint index, angle, joint index, angle...]`)
        Generator.addCode(`sendLongCmd('I', ${iaList}, ${t})`);
	}



    //% block="All of the joints angles [ANGLE]" blockType="reporter"
	//% ANGLE.shadow="list"  ANGLE.defl='0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 30, 30, 30, 30, 30, 30'
	export function angleList(parameter: any, block: any) {
        var angle=parameter.ANGLE.code;
        // return angle;
        Generator.addCode(`${angle}`)
	}


    //% block="Turn all joints simultaneously [LIST] and delay [TIME] seconds" blockType="command"
    //% LIST.shadow="normal"
    //% TIME.shadow="number" TIME.defl=0.2
	export function excuteAllSim(parameter: any, block: any) {
        var iaList=parameter.LIST.code;
        var t=parameter.TIME.code;

        Generator.addCode(`# The length of list is 16. The list format is [angle, angle, angle...]`)
        Generator.addCode(`sendLongCmd('L', ${iaList}, ${t})`);
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
