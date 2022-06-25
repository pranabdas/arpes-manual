---
title: Manipulator operation
---

### Reference positions
- Sample transfer position: <br/>
X = 17.20 mm <br/>
Z = 43.7 cm <br/>
θ = 95° <br/>

- Rotate the manipulator from transfer to measurement position (θ : 95° → 2°) in
the preparation chamber. Set the XY stage more or less at the center. <br/>
X = 15 mm <br/>
Y = 14 mm <br/>
Z = 40 cm <br/>

- To the manipulator to pass through the neck of analysis chamber (Z : 40 cm →
12 cm):  <br/>
X = 18 mm <br/>
Y = 8 mm <br/>

- Manipulator movement in front of analyzer (Z < 12 cm): <br/>
X = 18 mm <br/>
Y = 16 mm <br/>

- Measurement position (depending on the sample/substrate thickness): <br/>
X = 12 mm <br/>
Y = 16 mm <br/>
Z = 1.675 cm <br/>

### Manipulator operation
Always double check the x- and y-positions before moving the manipular
z-position and rotations. In order to move the manipulator, input the absolute
position, press enter, and once ready click the play button. Always watch inside
the chamber when manipulator is moving.

<picture>
  <source type="image/webp" srcSet={require("/img/manipulator-motion.webp").default} />
  <img src={require("/img/manipulator-motion.png").default} alt="manipulator-motion" width="400px" />
</picture>

### Re-calibration
If the manipulator position is known, one can set it from the settings:

<picture>
  <source type="image/webp" srcSet={require("/img/manipulator-main-window.webp").default} />
  <img src={require("/img/manipulator-main-window.png").default} alt="manipulator-main-window" width="400px" />
</picture>

You can also access settings and calibration from the Setup menu.

<picture>
  <source type="image/webp" srcSet={require("/img/manipulator-calibration.webp").default} />
  <img src={require("/img/manipulator-calibration.png").default} alt="manipulator-calibration" width="400px" />
</picture>

### Reinstallation of manipulator software/driver
1. Install Microsoft .NET framework 3.5
2. Install MOXA serial to USB adapter UPort 1250 driver. You can download the
drivers from MOXA [website](
https://moxa.com/en/support/product-support/software-and-documentation?psid=114475).
If you have problem finding the driver in the official website, you may try
[this](http://pranabdas.github.io/drive/downloads/moxa-uport-1200-v3.1.zip).
3. Once the driver is installed and instruments are plugged in, the device
should appear in Windows Device Manager.
<br />
<picture>
  <source type="image/webp" srcSet={require("/img/device-manager.webp").default} />
  <img src={require("/img/device-manager.png").default} alt="device-manager.png" width="500px" />
</picture>
<br/><br/>
4. Set the correct port settings:
<br />
<picture>
  <source type="image/webp" srcSet={require("/img/moxa-port-settings.webp").default} />
  <img src={require("/img/moxa-port-settings.png").default} alt="moxa-port-settings" width="400px" />
</picture>
<br/><br/>
5. Download and unzip the [manipulator program](
http://pranabdas.github.io/drive/downloads/manipulator.zip). Note that the
settings are specific to our system.

### Troubleshooting
1. If there are communication issues, make sure the COM port in Device manager
and manipulator settings are same.
<br/>
<picture>
  <source type="image/webp" srcSet={require("/img/manipulator-settings.webp").default} />
  <img src={require("/img/manipulator-settings.png").default} alt="manipulator-settings" width="500px" />
</picture>
<br/><br/>
2. Often after power down or reconnecting the cables, the motor may give error
due to high acceleration. In that case, reduce the motor speed (2°/s^2):
<br/>
<picture>
  <source type="image/webp" srcSet={require("/img/motor-speed.webp").default} />
  <img src={require("/img/motor-speed.png").default} alt="motor-speed" width="500px" />
</picture>
<br/><br/>
3. You can save/reload manipulator settings to/from a file (look for the
respective icons in the top bar in the setup window).
<br/>
<picture>
  <source type="image/webp" srcSet={require("/img/setup-toolbar.webp").default} />
  <img src={require("/img/setup-toolbar.png").default} alt="setup-toolbar" width="500px" />
</picture>
<br/><br/>

### User manuals

- [Manipulator Service Book](https://file-storage.github.io/manuals/Manipulator-Service-Book.pdf)
- [Manipulator Software Manual](https://file-storage.github.io/manuals/Manual-Manipulator-v25.pdf)
