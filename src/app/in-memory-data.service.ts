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
        info: 'At the initiative of the bp AGT Innovation team, over the past 11 months, we have been working in collaboration with bp AGT specialists to develop a new method that enables significantly improved vertical resolution while broadening seismic data bandwidth.\n\n Integration of advanced AI algorithms with signal processing allowed us to mitigate one of the main shortcomings of conventional approaches, as deep learning-based S.I.Q.E. does not require the availability of well data or any prior geological interpretation.\n\n As the result of S.I.Q.E. seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development, starting from exploration to depletion.',
        date: '25 February 2022'
      },
      {
        id: 2,
        cover: 'assets/images/news2.gif',
        title: 'Enhancement of ACG and SD seismic data vertical resolution based on S.I.Q.E. algorithm',
        info: 'We are pleased to announce that our first seismic image quality enhancement (S.I.Q.E.) algorithm has been successfully applied in the Azeri-Chirag-Gunashli (ACG) and Shah Deniz (SD) fields located in the South Caspian Basin. The interest in these fields is that they have a large number of wells that allow you to check the performance of the S.I.Q.E. methodology. At the same time, it is important to note that both fields have different seismic qualities and also that various data acquisition methods were used in their collection. Specifically, towed streamer for the ACG field and ocean bottom seismic for the SD field.\n\n In general, we can highlight the key facts from the obtained results. Quantitatively, the high-frequency components were seen to be enhanced over various time intervals. On average, the outcomes have 15 Hz more frequency bandwidth compared to the initial cubes. At the time, an increase in the signal-to-noise ratio of 35% was observed. As a result of the enhancement of the high-frequency components and broadening of the bandwidth, there is also an increase in the dominant frequency values of 56% and, consequently, an increase in resolution of 38%. These results were obtained within a few weeks in comparison to traditional methods, which require several months.\n\n Due to the large availability of well data, various analyses were carried out. One of which demonstrated a good match of seismic events between synthetic seismic data and enhanced seismic volumes. This indicates that the observed seismic events are consistent with the actual logging data. In parallel, comparisons were made with the vertical seismic profile (VSP) data, which led to similar conclusions. Finally, statistical analysis showed a better fit between the seismic responses interpreted from the enhanced seismic volume and the geological units determined using a standard set of well logs from drilled wells and consistent assumptions.',
        date: '6 April 2022'
      },
      {
        id: 3,
        cover: 'assets/images/oil2.gif',
        title: 'The next product of WAVERITY: Improvement of SNR based on Seismic Image Noise Attenuation (S.I.N.A.) technique',
        info: 'WAVERITY team developed an in-house tool for increasing the signal-to-noise ratio (SNR) of seismic reflectivity data. The methodology employs deep learning algorithms which efficiently manage the conditioning of corrupted images, decreasing or completely removing various types of noise, including random, coherent, colored, and structural/orientation noises.\n\n Among the benefits of the proposed methodology is its superiority over conventional filtering methods such as f-x deconvolution and structural filtering, as S.I.N.A. increases the data quality without affecting the seismic events themselves. Unlike conventional methods, the developed algorithm does not require a lot of parameterizations and the desired output can be obtained within a short time interval. Moreover, it is important to note that this methodology does not need any well data and completely depends only on the original seismic data.\n\n The robustness of S.I.N.A. has been tested on a number of open-source data as well as on several real fields from the South Caspian Basin, such as Azeri-Chirag-Guneshli and Shah Deniz. As a result, specialists are able to improve their interpretation and enhance field understanding by upgrading the visibility of the geological objects.',
        date: '19 April 2022'
      },
      {
        id: 4,
        cover: 'assets/images/news4.png',
        title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
        info: 'We are happy to announce that WAVERITY team has successfully implemented the Seismic Imaging Quality Enhancement (S.I.Q.E.) algorithm for three prospects (North Khali, Bibi-Heybat, Qarabatdakh), which are located within the Shallow Water Absheron Peninsula (SWAP) area and are undergoing exploration activities.\n\n While each of these three fields is unique in terms of its geological setting, exploration objectives, and seismic data quality, the S.I.Q.E. has effectively increased the vertical resolution and removed various types of noise in all cases, making the geological interpretation more efficient.\n\n Considering the very limited amount of well data, the validation was done by means of analyzing various types of attribute maps, as well as applying seismic stratigraphy methods to identify and compare important stratigraphic events between original and processed seismic volumes.\n\n Overall, we achieved up to a 40% increase in dominant frequency (which practically translates to doubling, or in some cases, tripling, the number of troughs and peaks in reservoir intervals). We also improved the signal-to-noise ratio by 24%, resulting in a much cleaner seismic image.',
        date: '4 August 2022'
      },
      {
        id: 5,
        cover: 'assets/images/news5.jpg',
        title: 'WAVERITY was presented at the event organized by bp’s innovation team in Azerbaijan, Georgia and Türkiye',
        info: 'On November 17, WAVERITY team participated at the initiative organized by bp’s innovation team in Azerbaijan, Georgia, and Türkiye. The purpose of the event was to drive efficiency of bp’s operations in the region and promote innovations in Azerbaijan.\n\nThe event took place at ADA University and began with an introductory film and speech by Gary Jones, bp AGT regional president. Then it was followed by Dr. Arzu Javadova, SOCAR’s chief geologist’s speech, in which Dr. Javadova addressed the letter from Rovshan Najaf, SOCAR President.\n\nThen, the presentation space was opened by Ayten Agalarova, head of country bp in Georgia and AGT Innovation Team lead. The first startup to be presented was WAVERITY, Seismic Image Quality Enhancement Solution project. Following that, three other startups were introduced: AIQUM (Sand Detection Solution Using Fiber Optic Technology), VoltaCH4 (Methane Detection and Quantification Solution Using Satellite and Drone Images), and DMP (Digital Material Purchasing Software Solution). All the startup teams worked closely with the local universities, engineers, and digital innovators to develop their solutions.\n\nAfter the presentation spaces, a general Q&A session was opened, and all the guests had a chance to ask the project teams questions. The closing speech of Hafiz Pashayev, the founding rector of ADA University, concluded the official part of the event.',
        date: '18 November 2022'
      }
    ];

    let oil = [
      {
        id: 1,
        button: 'S.I.Q.E.',
        title: 'Seismic Image Quality Enhancement (S.I.Q.E.)',
        info: 'S.I.Q.E. technology enables to achieve significant enhancement in vertical resolution and Signal-to-Noise Ratio (SNR) improvement for both 2D and 3D seismic data of any quality. Unlike conventional approaches, Deep learning based S.I.Q.E. does not require the availability of well data or any prior geological interpretation. As the result of S.I.Q.E. seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development starting from exploration to depletion.',
        cover: 'assets/images/siqe.png',
        cover2: 'assets/images/siqe_2.jpg',
        cover3: 'assets/images/siqe_1.jpg'
      },
      {
        id: 2,
        button: 'S.I.N.A.',
        title: 'Seismic Image Noise Attenuation (S.I.N.A.)',
        info: 'The application of S.I.N.A. technology allows subject matter experts to more clearly differentiate structural geological features, especially fault propagation in 3D via achieving notable improvement in Signal-to-Noise Ratio (SNR). The deep learning engine of S.I.N.A. recognizes and removes different types of noises including random, coherent, colored, structural/orientation and gaussian noises present in seismic data without distorting the original seismic response.',
        cover: 'assets/images/sina.png',
        cover2: 'assets/images/sina_2.jpg',
        cover3: 'assets/images/sina_1.jpg'
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

    let careers = [
      {
        id: 1,
        name: 'Senior Data Scientist',
        location: 'Baku, Azerbaijan',
        link: 'https://forms.clickup.com/31136212/f/xp6em-2803/2JEQ5S2BWF8WG2SPGD'
      },
      {
        id: 2,
        name: 'Geophysicist\n(Interpreter)',
        location: 'Baku, Azerbaijan',
        link: 'https://forms.clickup.com/31136212/f/xp6em-2783/J3LGWHBCC3OFPAJZK8'
      },
      {
        id: 3,
        name: 'Geophysicist\n(Developer)',
        location: 'Baku, Azerbaijan',
        link: 'https://forms.clickup.com/31136212/f/xp6em-2763/9VFMXB3NZW2GT6IPE3'
      },
      {
        id: 4,
        name: 'Geologist\n\b',
        location: 'Baku, Azerbaijan',
        link: 'https://forms.clickup.com/31136212/f/xp6em-2823/SGARRV1ZPXXUUJWOQH'
      }
    ];

    return { news, oil, rss, custom, careers };
  }
}