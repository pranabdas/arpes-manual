### Experimental ARPES resolution 

The ARPES experimental resolution depends on several factors including measurement temperature, sample quality, light source used, and the analyzer resolution. Here we will describe a practical scenario. The sample for this measurement was grown using molecular beam epitaxy (MBE) method. The sample was of very good quality. We obtained the following ARPES spectrum using $10~eV$ pass energy and $5~meV$ energy step. 

![ARPES spectra](img/res-band.png) 

We extract the Energy Distribution Curve (EDC) by integrating $\pm0.25~Å^{-1}$ range. 

![ARPES spectra](img/res-edc.png) 

The measurement was done at liquid nitrogen temperature; the sample reaches about $90~K$. At $90~K$, the Fermi-Dirac distribution looks like this: 

![Fermi Dirac distribution](img/res-fermi-func.png) 

Now, we can convolute a Gaussian broadening of $10~meV$, which fits our experimental data well. 

![Fermi Dirac distribution](img/res-fit.png) 

There is some room for adjusting the fitting parameters, but the slope is certainly better than $15~meV$ for our current data. Therefore, we have about $8~meV$ thermal broadening and $10~meV$ instrumental (combines sample quality, analyzer resolution, and light source broadening), i.e., we can expect better than $15~meV$ $(\sigma_{total} = \sqrt{\sigma_x^2 + \sigma_y^2})$ resolution. 
