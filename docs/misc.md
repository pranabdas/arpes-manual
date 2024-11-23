---
title: Miscellaneous
---

### Buffer pressure limits

We noticed some error in the buffer PCU. It is likely due to the vacuum limits
are too high to maintain, and there is some time limit on how long the
primary/<wbr/>rough pump can be ON continuously. We need to relax the pressure
limits as follows:

MG Low: 2.00e-01 mbar <br/>
MG High: 6.00e-01 mbar <br/>

FG Low: 5.00e-01 mbar <br/>
FG High: 6.00e-01 mbar. <br/>


### SPIN PCU FV Pump Work Time warning

In order to clear the warning, go to *Settings* → *Advanced Options* → *FV Pump
Work Time* → *Reset*.


### Edwards scroll pump

- **Reset service warning:** Press and hold the standby speed increase and
decrease buttons simultaneously for 5 sec.

- **Auto start:** Press and hold either the Power ON or OFF button for 8 sec.


### Resources
- [Edward scroll pump manual](https://file-storage.github.io/manuals/Edwards_nXDS_ScrollPumpManual.pdf)
