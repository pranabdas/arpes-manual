---
title: Baking the chambers and instruments
sidebar_label: Baking procedure
---

Once the ultra high vacuum components are exposed to the atmosphere, they
require baking at high temperature (usually 110°-150&nbsp;°C) in order to
release various contaminants from the walls of the chambers.

Our ARPES chambers are usually baked at 120&nbsp;°C for 72 hours after various
maintenance and upgrade works. In order to bake the chambers follow the steps:

1. Switch off the manipulator motor driver electrics. Disconnect the motor
cables. Remove the motors. Leave the screws on the manipulator.
2. Remove all the junction boxes and cables.
3. Remove camera and cables.
4. Remove the slit wheel knob. Note down the reading or make sure nobody changes
the knob wheel while detached.
5. Remove high voltage isolators for the Mott detector.
6. Remove all other components that cannot be baked e.g., LED lights, cameras,
cooling water pipes.
7. Cover all the windows, and feed through by aluminum foil.
8. Setup the baking tents.

**Note:** Due to improper interlock configuration, currently the baking
controller requires the cryopump to be ON while baking.

:::danger

After the baking is complete, allow sufficient time (about one whole day) for
the chamber to cool down. Do not remove the baking tent or aluminum foils until
the chamber reached near room temperature. Sudden temperature change might
cause cracks in the viewports and feed-throughs.

:::

### Reference log
For you reference of various conditions, here is sample logbook:

**11/Mar/2019**

We are preparing the bake out of analyzer and preparation chamber.

Chamber pressure before we started: <br/>
Analyzer : 4.34 ✕ 10<sup>-8</sup> mbar <br/>
Spin : 1.13 ✕ 10<sup>-8</sup> mbar <br/>
Prep : 2.72 ✕ 10<sup>-8</sup> mbar <br/>
Buffer : 3.94 ✕ 10<sup>-7</sup> mbar <br/>

- Removed analyzer preamplifier junction boxes
- Removed slit wheel knob (analyzer slit = 500)
- Removed detector camera
- Remove x-ray source water supply and connections.

Baking the chamber for 68 hours at 120&nbsp;°C.

Baking started at 14:36 hrs.

At 16:00, temperature reached 78&nbsp;°C. Started TSP. 5 days 10 hours,
sublimate every 3 hours.

Started NEG pump in conditioning mode.

Settings for NEG conditioning:

<img src={require("../static/img/neg-conditioning.webp").default} alt="neg-conditioning" width="400px" />

Maximum time can be set for conditioning is 48 hours. We need to restart the NEG
conditioning after 48 hours or before. During conditioning, the NEG temperature
reaches 250&nbsp;°C.

Chamber pressure at 17:30 <br/>
Analyzer : 3.88 ✕ 10<sup>-7</sup> mbar <br/>
Spin : 2.36 ✕ 10<sup>-7</sup> mbar <br/>
Prep : 5.80 ✕ 10<sup>-7</sup> mbar <br/>
Buffer : 3.60 ✕ 10<sup>-6</sup> mbar <br/>
Readings on the gauges, NOT on the PCUs. <br/>

**12/Mar/2019**

Chamber pressure at 11:00 <br/>
Analyzer : 2.99 ✕ 10<sup>-7</sup> mbar <br/>
Spin : 9.96 ✕ 10<sup>-8</sup> mbar <br/>
Prep : 3.55 ✕ 10<sup>-7</sup> mbar <br/>
Buffer : 2.18 ✕ 10<sup>-6</sup> mbar <br/>
<br/>
Chamber pressure at 17:30 <br/>
Analyzer : 2.16 ✕ 10<sup>-7</sup> mbar <br/>
Spin : 7.70 ✕ 10<sup>-8</sup> mbar <br/>
Prep : 2.30 ✕ 10<sup>-7</sup> mbar <br/>
Buffer : 1.68 ✕ 10<sup>-6</sup> mbar <br/>

**13/Mar/2019**

Chamber pressure at 11:30 <br/>
Analyzer : 1.13 ✕ 10<sup>-7</sup> mbar <br/>
Spin : 4.71 ✕ 10<sup>-8</sup> mbar <br/>
Prep : 1.23 ✕ 10<sup>-7</sup> mbar <br/>
Buffer : 1.03 ✕ 10<sup>-6</sup> mbar <br/>
<br/>
Chamber pressure at 17:15 <br/>
Analyzer : 9.58 ✕ 10<sup>-8</sup> mbar <br/>
Spin : 4.19 ✕ 10<sup>-8</sup> mbar <br/>
Prep : 1.04 ✕ 10<sup>-7</sup> mbar <br/>
Buffer : 8.90 ✕ 10<sup>-7</sup> mbar <br/>

**14/Mar/2019**

Chamber pressure at 11:25 <br/>
Analyzer : 6.96 ✕ 10<sup>-8</sup> mbar <br/>
Spin : 3.43 ✕ 10<sup>-8</sup> mbar <br/>
Prep : 7.08 ✕ 10<sup>-8</sup> mbar <br/>
Buffer : 7.18 ✕ 10<sup>-7</sup> mbar <br/>
<br/>
11:30 HRS <br/>
Starting NEG Activation <br/>
t<sub>rise</sub> = 15 min <br/>
t<sub>hold</sub> = 60 min <br/>
T = 450 °C <br/>

<img src={require("../static/img/neg-activation.webp").default} alt="neg-activation" width="400px" />

Pressure is increasing after NEG activation. After 19 minutes, status is HOLD,
temperature is 335&nbsp;°C.

Analyzer : 9.90 ✕ 10<sup>-6</sup> mbar <br/>
Spin : 3.31 ✕ 10<sup>-6</sup> mbar <br/>
Prep : 2.84 ✕ 10<sup>-6</sup> mbar <br/>
Buffer : 3.87 ✕ 10<sup>-5</sup> mbar <br/>

After this point, pressure started recovering, though the temperature kept
rising.

After one hour (15 minutes t<sub>rise</sub> and 45 minutes t<sub>hold</sub>),
NEG activation temperature reached 433&nbsp;°C.

Maximum temperature reached by NEG pump = 441&nbsp;°C <br/>
V<sub>out</sub> = 95 V <br/>
I<sub>out</sub> = 3.9 A. <br/>

The baking heaters and the NEG activation going to stop almost at the same time.

Baking stopped at 13:00 <br/>
Chamber pressure: <br/>
Analyzer : 1.12 ✕ 10<sup>-7</sup> mbar <br/>
Spin : 4.64 ✕ 10<sup>-8</sup> mbar <br/>
Prep : 9.32 ✕ 10<sup>-8</sup> mbar <br/>
Buffer : 8.57 ✕ 10<sup>-7</sup> mbar <br/>

Degas the vacuum gauges at 13:55 hrs. when the temperature is 75&nbsp;°C. <br/>
Gauge degas time = 15 minutes. <br/>

Chamber pressure at 17:40 <br/>
Chamber temperature reached 40 °C. <br/>
Analyzer : 2.35 ✕ 10<sup>-9</sup> mbar <br/>
Spin : 1.36 ✕ 10<sup>-9</sup> mbar <br/>
Prep : 3.80 ✕ 10<sup>-9</sup> mbar <br/>
Buffer : 3.05 ✕ 10<sup>-7</sup> mbar. <br/>

**15/Mar/2019**

Chamber pressure at 11:40 <br/>
Analyzer : 2.26 ✕ 10<sup>-10</sup> mbar <br/>
Spin : 1.72 ✕ 10<sup>-10</sup> mbar <br/>
Prep : 4.07 ✕ 10<sup>-10</sup> mbar <br/>
Buffer : 2.28 ✕ 10<sup>-7</sup> mbar.
