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
<img width="612" alt="image" src="https://user-images.githubusercontent.com/9747608/227246912-f83f9640-2bf7-4dc8-8e2d-b329245a40d6.png">
<img width="612" alt="image" src="https://user-images.githubusercontent.com/9747608/227247380-36ec328c-3fd2-4be0-b178-be542f5015c8.png">

For Mac, you need to add [these library files](https://github.com/PetoiCamp/Petoi_MindPlusLib/tree/main/python/libraries) in 
 **/Users/{your username}/Documents/mindplus-py/environment/Python3.6.5-64/lib/python3.6/site-packages/**
 
<img width="692" alt="image" src="https://user-images.githubusercontent.com/9747608/227257791-ff42fee8-d4e7-4b9d-9fd1-f13777be15d6.png">

<img width="612" alt="image" src="https://user-images.githubusercontent.com/9747608/227253384-eb749950-dca0-4240-b096-a2d023ef5405.png">

## Examples
Write the value of digital pin (/examples/WriteDigital.mp)

![WriteDigital](https://user-images.githubusercontent.com/15603750/227526478-db59b1c9-75d5-4f2c-9d47-65ff5498203d.png)


Write the value of analog pin ((/examples/WriteAnalog.mp)

![WriteAnalog](https://user-images.githubusercontent.com/15603750/227526563-9274963d-280b-43c7-8cd0-52945e07fe57.png)


Read the value of analog pin ((/examples/ReadAnalog.mp)

![ReadAnalog](https://user-images.githubusercontent.com/15603750/227543792-83d1527e-219a-4575-97d6-c8aa2447abb7.png)


Control the robot's joints and play melody ((/examples/Robot.mp)

![Robot](https://user-images.githubusercontent.com/15603750/227526628-9ccac052-bf86-4012-889a-d6fefea26ce6.png)


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
