NVAN Flight Factor A320 MCDU Extractor
--------------------------------------

### Introduction
This tool makes easier for Home Cockpits to extract the MCDU screen from Flight Factor A320.

It is based on the web EFB that comes by default with flight factor, as it provides a WebSockets API to get
all the MCDU data. We use a modified client to get only the screen from the EFB.

You can extract both MCDU screens with the same program, it stores the size and position you give them in order
to avoid having to move them around each time you open the simulator, so it can be placed on the screens of most
replica CDUs or even on the original (OEM) ones if you connect the displays to the computer.

### Disclaimer
This software can only be used with an original copy of Flight Factor's A320 as it contains core code of the
EFB page.

### Installation
You can just download the [latest release here](https://github.com/nvan/flight-factor-a320-mcdu-extractor/releases).
**IMPORTANT:** You have to run it as administrator.

### Compiling
To compile the code, just download the repository, open the solution file in the `/src` folder with Visual Studio
and you are ready to go.
You have to add the `/screen` folder to the output folder (debug or release) in order for it to work.

### Donations
If you'd like to help me improving this projects, buying new hardware or jusy buying me a beer, you can donate via PayPal: [paypal.me/maduranma](https://www.paypal.com/paypalme/maduranma)