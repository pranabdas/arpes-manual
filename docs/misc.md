### Miscellaneous

**Buffer pressure limits:**

We noticed some error in the buffer PCU. It is likely due to the vacuum limits
are too high to maintain, and there is some time limit on how long the primary/
rough pump can be ON continuously. We need to relax the pressure limits as
follows:

MG Low: 2.00e-01 mbar <br/>
MG High: 6.00e-01 mbar <br/>

FG Low: 5.00e-01 mbar <br/>
FG High: 6.00e-01 mbar. <br/>
