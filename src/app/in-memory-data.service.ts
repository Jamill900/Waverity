import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let news = [
      {
        id: 1,
        cover: 'assets/images/oil1.gif',
        title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
        info: 'For the last 11 months, our team in collaboration with BP AGT geophysical specialists worked on the development of a novel technique that enables significant enhancement in vertical resolution while broadening the seismic data bandwidth.\n\n Integration of advanced AI algorithms with signal processing allowed to mitigate one of the main shortcomings of the conventional approaches as deep learning-based S.I.Q.E. does not require the availability of well data or any prior geological interpretation.\n\n As the result of S.I.Q.E. seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development starting from exploration to depletion.',
        date: '25 February 2022'
      },
      {
        id: 2,
        cover: 'assets/images/news2.gif',
        title: 'Enhancement of ACG and SD seismic data vertical resolution based on S.I.Q.E. algorithm',
        info: 'We are pleased to announce that our first seismic image quality enhancement (S.I.Q.E.) algorithm has been successfully applied in the Azeri-Chirag-Gunashli (ACG) and Shah Deniz (SD) fields located in the South Caspian Basin. The interest in these fields is that they have a large number of wells that allow you to check the performance of the S.I.Q.E. methodology. At the same time, it is important to note that both fields have different seismic qualities and also various data acquisition methods were used in their collection. Namely, towed streamer for the ACG field and ocean bottom seismic for the SD field.\n\n In general, we can highlight the key facts from obtained results. Quantitatively, the high-frequency components were seen to be enhanced over various time intervals. On average, the outcomes have 15 Hz more frequency bandwidth compared to the initial cubes. At the time, an increase in the signal-to-noise ratio of 35% was observed. As a result of enhancement of the high-frequency components and broadening of the bandwidth, there is also an increase in the dominant frequency values of 56% and consequently an increase in resolution of 38%. These results were obtained within a few weeks in comparison to traditional methods, which require several months.\n\n Due to the large availability of well data, various analyzes were carried out. One of which demonstrated a good match of seismic events between synthetic seismic data and enhanced seismic volumes. This indicates that the observed seismic events are consistent with the actual logging data. In parallel, comparisons were made with the vertical seismic profile (VSP) data which led to similar conclusions. Finally, statistical analysis showed a better fit between the seismic responses interpreted on the enhanced seismic volume and the geological units determined using a standard set of well logs from drilled wells and consistent assumptions.',
        date: '6 April 2022'
      },
      {
        id: 3,
        cover: 'assets/images/oil2.gif',
        title: 'The next product of WAVERITY: Improvement of SNR based on seismic Image Noise Attenuation (S.I.N.A.) technique',
        info: 'WAVERITY team developed in house tool for increasing the signal-to-noise ratio (SNR) of seismic reflectivity data. The methodology employs deep learning algorithms which efficiently manage the conditioning of corrupted images, decreasing or completely removing various types of noise including random, coherent, colored, and structural/orientation noises.\n\n Among the benefits of the proposed methodology is its superiority over conventional filtering methods such as f-x deconvolution and structural filtering, as S.I.N.A. increases the data quality without affecting the seismic events themselves. Unlike conventional methods, the developed algorithm does not require a lot of parameterizations and the desired output can be obtained within a short time interval. Moreover, it is important to note that this methodology does not need any well data and completely depends only on the original seismic data.\n\n The robustness of S.I.N.A. has been tested on a number of open-source data, as well as on several real fields from the South Caspian Basin such as Azeri-Chirag-Guneshli and Shah Deniz. As a result, specialists are able to improve their interpretation and enhance field understanding by upgrading the visibility of the geological objects.',
        date: '19 April 2022'
      }
    ];

    let oil = [
      {
        id: 1,
        button: 'S.I.Q.E',
        title: 'Seismic Image Quality Enhancement (S.I.Q.E)',
        info: 'SIQE technology enables to achieve significant enhancement in vertical resolution and Signal-to-Noise Ratio (SNR) improvement for both 2D and 3D seismic data of any quality. Unlike conventional approaches, Deep learning based SIQE does not require the availability of well data or any prior geological interpretation. As the result of SIQE seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development starting from exploration to depletion.',
        cover: 'assets/images/oil1.gif',
        cover2: 'assets/images/oil1after.gif',
        cover3: 'assets/images/oil1before.gif'
      },
      {
        id: 2,
        button: 'S.I.N.A',
        title: 'Seismic Image Noise Attenuation (S.I.N.A)',
        info: 'The application of SINA technology allows subject matter experts to more clearly differentiate structural geological features, especially fault propagation in 3D via achieving notable improvement in Signal-to-Noise Ratio (SNR). The deep learning engine of SINA recognizes and removes different types of noises including random, coherent, colored, structural/orientation and gaussian noises present in seismic data without distorting the original seismic response.',
        cover: 'assets/images/oil2.gif',
        cover2: 'assets/images/oil2after.gif',
        cover3: 'assets/images/oil2before.gif'
      },
      {
        id: 3,
        button: '4D Seismic Inversion',
        title: 'Hybrid Deep Learning and Physics Based 4D Seismic Inversion',
        info: 'The Deep learning core of the proposed 4D seismic inversion technology is trained based on various stochastically generated and physically simulated depletion scenarios. These scenarios embed different timewise spatial changes of reservoir properties comprising reservoir pressure and fluid saturations. A fully trained model predicts field variation of the aforementioned reservoir properties during the period between two acquisition dates.',
        cover: 'assets/images/oil3.gif',
        cover2: '',
        cover3: ''
      },
      {
        id: 4,
        button: 'AVO Classification',
        title: 'AVO Classification for Fluid and Facies Identification',
        info: 'The proposed workflow allows the identification of reservoir fluid type and lithology distribution based on amplitude versus offset/angle (AVO) data. Core ML algorithms of the methodology provide an initial insight on potential trends in amplitude vs offset prior to the application of conventional AVO analysis. The main advantage of this technique is the significant reduction of uncertainty range during the traditional AVO classification. The final outcome is a much clearer differentiation between lithology and fluid effects.',
        cover: 'assets/images/oil4.gif',
        cover2: '',
        cover3: ''
      },
      {
        id: 5,
        button: 'Hybrid FWI',
        title: 'Full Waveform Inversion (FWI)',
        info: 'Traditional FWI methodology is quite sensitive to the robustness of input data, which can lead to inconsistent models. The proposed technology is a physics-based neural-network model that performs seismic full waveform inversion by integrating the wave equation operators into a deep neural network. This minimizes the dependency on the amplitudes of a complex, unknown wave equation and parameters that conventional waveform inversion relies heavily upon.',
        cover: 'assets/images/oil5.gif',
        cover2: '',
        cover3: ''
      }
    ];

    let rss = [
      {
        id: 1,
        title: 'Crop Mapping and Yield Forecast',
        info: 'The technology provides management solutions for crop health mapping and yield forecasting via the integration of high-res multispectral satellite or aerial imagery with Deep Learning algorithms. Modern satellite technologies are able to provide daily, weekly and monthly image data covering large areas, that can be embedded into automated workflows with broad crop monitoring applications in agriculture.',
        cover: 'assets/images/rss1.gif',
        cover2: 'assets/images/rss1after.gif',
        cover3: 'assets/images/rss1before.gif'
      },
      {
        id: 2,
        title: 'Image Change Detection',
        info: 'The solution focuses on the processing of satellite-derived images taken over the same area for a period of time in order to identify, monitor and forecast potential geohazards events such as landslides, floodings, etc. Data analytics and ML core of the technology allow mitigating the limitation of human-based monitoring practices via automating of all procedures of surveillance.',
        cover: 'assets/images/rss2.gif',
        cover2: '',
        cover3: ''
      },
      {
        id: 3,
        title: 'Geohazards and Security System Solutions',
        info: 'Proposed technology enables the identification of changes between scenes of the same geographical location observed on satellite images acquired at different times. This has a broad application in areas such as security surveillance, land use monitoring, agriculture, construction and etc.',
        cover: 'assets/images/rss3.gif',
        cover2: '',
        cover3: ''
      }
    ];

    let custom = [
      {
        id: 1,
        button: 'AI Consultancy and Support',
        title: 'AI Consultancy and Support to Optimize Routine Workflows',
        info: 'Our experienced team can provide high quality, customer-tailored AI solutions to address specific challenges of our customers as well as to maximize the efficiency of their existing processes through automation of routine workflows.',
        cover: 'assets/images/custom1.gif'
      },
      {
        id: 2,
        button: 'Technology on Specific Demand',
        title: 'Building the Technology Based on Specific Demand',
        info: 'We are eager to work closely with our customers to develop innovative digital solutions that will empower them to address pressing business challenges.',
        cover: 'assets/images/custom2.gif'
      }
    ];

    return { news, oil, rss, custom };
  }
}