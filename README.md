# Petoi Mind+ Expansion Library 
### A block-based drag-and-drop programming tool for Petoi robots. 
<img src="./python/_images/featured.png" width="300">

---------------------------------------------------------

## Table of Contents
- [Petoi Mind+ Expansion Library](#petoi-mind-expansion-library)
  - [Table of Contents](#table-of-contents)
  - [URL](#url)
  - [Summary](#summary)
  - [How to use](#how-to-use)
  - [Examples](#examples)
  - [License](#license)
  - [Supported targets](#supported-targets)
  - [Release Logs](#release-logs)

## URL
* Project URL : ```https://github.com/PetoiCamp/Petoi_MindPlusLib```

## Summary
Use the user library of Mind+V1.7.3 and above to load this extension to control the Petoi robot.
It allows to schedule movements, play music, and access to the GPIO pins.


## How to use
Download and install [Mind+ Desktop app](https://mindplus.dfrobot.com).

Input the project URL: **https://github.com/PetoiCamp/Petoi_MindPlusLib** in the interface to import this library as follows:
<img width="613" alt="image" src="https://user-images.githubusercontent.com/9747608/227246863-bb229849-4470-494a-9e00-f674ce0ffe9a.png">
<img width="613" alt="image" src="https://user-images.githubusercontent.com/9747608/227246912-f83f9640-2bf7-4dc8-8e2d-b329245a40d6.png">
<img width="613" alt="image" src="https://user-images.githubusercontent.com/9747608/227698081-96999540-9196-46da-b4ba-62fbb5087b30.png">


For macOS (<=V1.7.2 RC3.0), you need to download [PetoiRobot.zip](https://github.com/PetoiCamp/Petoi_MindPlusLib/raw/main/PetoiRobot.zip) first, and copy the extracted folder (**PetoiRobot**) to
 **/Users/{your username}/Documents/mindplus-py/environment/Python3.6.5-64/lib/python3.6/site-packages/**

* Before running the program, we recommend you [upgrade your robot to the newest firmware](https://bittle.petoi.com/3-NyBoard-Configuration) for the best compatibility. The standard firmware should support most of the coding blocks. However, you will need to use the **GROVE_SERIAL_PASS_THROUGH** mode to access the IO pins.
 
<img width="613" alt="image" src="https://user-images.githubusercontent.com/9747608/227701778-c60b5e7e-bee9-474c-bc70-ed91c95773f9.png">


<img width="900" alt="image" src="https://user-images.githubusercontent.com/9747608/227698055-bc776753-745f-43d1-b8c8-46347df969e8.png">


## Examples
The following examples can be found in [examples/](https://github.com/JasonWong08/ext-petoi_robot/tree/main/examples) folder and opened by the Mind+ APP directly.

Play melody (/examples/PlayMelody.mp)

![PlayMelody](https://user-images.githubusercontent.com/15603750/228172247-f12aafe9-7187-4717-a1be-107a4a56f2c1.png)


Execute skills (/examples/ExecuteSkills.mp)

![ExecuteSkills](https://user-images.githubusercontent.com/15603750/228173463-0b30986d-6a4c-4d8e-be68-4b881dc51953.png)


Turn around (/examples/TurnAround.mp)

![TurnAround](https://user-images.githubusercontent.com/15603750/228174412-81008304-0352-477a-8a03-a43560927139.png)


Write the value of digital pin (/examples/WriteDigital.mp)

![WriteDigital](https://user-images.githubusercontent.com/15603750/228175321-eba6484f-6643-4e22-8c4c-d470e2423217.png)


Write the value of analog pin ((/examples/WriteAnalog.mp)

![WriteAnalog](https://user-images.githubusercontent.com/15603750/228176252-088885a7-6f42-4f61-8d1a-b6697106d945.png)


Read the random values of analog pin and turn them into music tones ((/examples/ReadAnalog.mp)

![ReadAnalog](https://user-images.githubusercontent.com/15603750/228176846-758c68ab-11e0-4f6d-944d-543aaf068b53.png)


Control the robot's joints and play melody ((/examples/Robot.mp)

![Robot](https://user-images.githubusercontent.com/15603750/228177210-a76f390d-262b-4bb5-8e22-54e2129ce1a8.png)


## License

MIT

## Supported targets

MCU                | JavaScript    | Arduino   | MicroPython    | Python
---------------- | :------------: | :---------: | :---------------: | ----------
arduino            |                     |                 |                          |       √
esp32               |                     |                 |                          |       √


## Release Logs
* V0.0.1  Basic functions completed.

## Link to the [online store](https://www.petoi.com/collections/robots) for the robots' hardware. 
