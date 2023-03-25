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
<img width="613" alt="image" src="https://user-images.githubusercontent.com/9747608/227247380-36ec328c-3fd2-4be0-b178-be542f5015c8.png">

For Mac, you need to add [these library files](https://github.com/PetoiCamp/Petoi_MindPlusLib/tree/main/python/libraries) in 
 **/Users/{your username}/Documents/mindplus-py/environment/Python3.6.5-64/lib/python3.6/site-packages/**
 
<img width="613" alt="image" src="https://user-images.githubusercontent.com/9747608/227257791-ff42fee8-d4e7-4b9d-9fd1-f13777be15d6.png">

<img width="613" alt="image" src="https://user-images.githubusercontent.com/9747608/227697372-0df45dfa-18e6-4137-bb2a-bc6e491a255b.png">

<img width="613" alt="image" src="https://user-images.githubusercontent.com/9747608/227697378-6ec2ef6c-c037-4dfb-81da-80845a54131d.png">

## Examples
The following examples can be found in [examples/](https://github.com/JasonWong08/ext-petoi_robot/tree/main/examples) folder and opened by the Mind+ APP directly.


Write the value of digital pin (/examples/WriteDigital.mp)

![WriteDigital](https://user-images.githubusercontent.com/15603750/227687911-66d5a7f0-7c1a-48a8-ae1d-e3abb5551027.png)


Write the value of analog pin ((/examples/WriteAnalog.mp)

![WriteAnalog](https://user-images.githubusercontent.com/15603750/227687921-b8cef15f-f593-444e-920e-d5e966ad95a6.png)


Read the random value of analog pin and turn it into music tones ((/examples/ReadAnalog.mp)

![ReadAnalog](https://user-images.githubusercontent.com/15603750/227687944-a27830ed-fba2-404a-87f2-07e17554ad60.png)


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
