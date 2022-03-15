---
title: Analyzer Operation
---

Make sure correct analyzer slit is chosen.

**Element Voltages:** <br/>
MCP = 1550 V <br/>
SCREEN = 3600 V.

If the count is too high, please reduce the MCP voltage to 1500 V or even 1400 V
(especially when performing spin measurements with Mott detectors, and the slit
is set to very wide). Count should not exceed few million, it can damage the
detector mesh permanently. If you do not need MCP spectrum, please set the MCP
voltage to 1200 V or below.

### Detector ramp up procedure

:::danger

If the chamber pressure starts to increase and/or the LED lights flash red, or
there is a sudden increase of counts or a hot pot, you must immediately exit the
voltage calibration window, and turn off the HV switch at the front of HV rack.

:::

After every chamber bake-out, or any changes to chamber condition and/or
analyzer electrical connections, please follow this procedure:

1. Check that the HV switch at the front of HV rack is turned off.
2. Check that the chamber pressure is bellow 5&nbsp;×&nbsp;10<sup>-4</sup> mbar
in the analyzer hemisphere.
3. Open the voltage calibration dialogue and make a note of the MCP and Screen
element voltages. MCP should be set at 1450&nbsp;V and Screen at 3600&nbsp;V.
Change both element voltages to 100&nbsp;V.
4. Exit to save changes.
5. Open the voltage calibration to confirm that both MCP and Screen element
voltages are 100&nbsp;V.
6. Turn ON the HV switch at the front of HV rack.
7. Select the Screen element and stepwise increase the element voltage to the
working value (i.e., 3600&nbsp;V). Each step should be 50&nbsp;V.
8. Keep eye on the detector image, vacuum level, and HV supplies LED lights
between each step.
9. Once reached the set value, exit and save changes.
10. Return to the voltage calibration dialogue. Select the MCP element and
stepwise increase the element voltage to the initial value (i.e., 1450&nbsp;V)
which each step being 50&nbsp;V. When finished, a few random background counts
should be observed.
11. Exit and save changes.

:::important

Please refer to the Scienta manual for more details.

:::


### User manuals

- [SES User Guide](https://file-storage.github.io/manuals/SES-Software-User-Guide-v2.0.pdf)
- [SES Software Manual](https://file-storage.github.io/manuals/SES-Software-Manual-v5_1.pdf)
