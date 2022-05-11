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
        cover: '../../assets/images/news1.jpg',
        title: 'Why Jamil optic sensing is transforming the intervention sector and how to get involved',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, risus, magna scelerisque euismod integer lorem. Ultricies tempor lacus erat arcu nisl ut tempus faucibus. Non tortor tincidunt aenean sit felis fermentum dui nunc. Eget est sociis dignissim in est auctor dignissim. Eget est sociis dignissim in est auctor dignissim. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, risus, magna scelerisque euismod integer lorem. Ultricies tempor lacus erat arcu nisl ut tempus faucibus. Non tortor tincidunt aenean sit felis fermentum dui nunc. Eget est sociis dignissim in est auctor dignissim. Eget est sociis dignissim in est auctor dignissim. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices.',
        date: '24 February 2022'
      },
      {
        id: 2,
        cover: '../../assets/images/news2.jpg',
        title: 'Working smarter: Why Industry 4.0 is the key to driving an intelligent energy transition',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, risus, magna scelerisque euismod integer lorem. Ultricies tempor lacus erat arcu nisl ut tempus faucibus. Non tortor tincidunt aenean sit felis fermentum dui nunc. Eget est sociis dignissim in est auctor dignissim. Eget est sociis dignissim in est auctor dignissim. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, risus, magna scelerisque euismod integer lorem. Ultricies tempor lacus erat arcu nisl ut tempus faucibus. Non tortor tincidunt aenean sit felis fermentum dui nunc. Eget est sociis dignissim in est auctor dignissim. Eget est sociis dignissim in est auctor dignissim. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices.',
        date: '24 February 2022'
      },
      {
        id: 3,
        cover: '../../assets/images/news3.jpg',
        title: '2022`s top digitization trends: what will define the analytics space this year?',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, risus, magna scelerisque euismod integer lorem. Ultricies tempor lacus erat arcu nisl ut tempus faucibus. Non tortor tincidunt aenean sit felis fermentum dui nunc. Eget est sociis dignissim in est auctor dignissim. Eget est sociis dignissim in est auctor dignissim. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, risus, magna scelerisque euismod integer lorem. Ultricies tempor lacus erat arcu nisl ut tempus faucibus. Non tortor tincidunt aenean sit felis fermentum dui nunc. Eget est sociis dignissim in est auctor dignissim. Eget est sociis dignissim in est auctor dignissim. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices.',
        date: '24 February 2022'
      },
      {
        id: 4,
        cover: '../../assets/images/news4.jpg',
        title: 'Keeping carbon under lock and key: Best practices for successful CCS',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, risus, magna scelerisque euismod integer lorem. Ultricies tempor lacus erat arcu nisl ut tempus faucibus. Non tortor tincidunt aenean sit felis fermentum dui nunc. Eget est sociis dignissim in est auctor dignissim. Eget est sociis dignissim in est auctor dignissim. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, risus, magna scelerisque euismod integer lorem. Ultricies tempor lacus erat arcu nisl ut tempus faucibus. Non tortor tincidunt aenean sit felis fermentum dui nunc. Eget est sociis dignissim in est auctor dignissim. Eget est sociis dignissim in est auctor dignissim. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices viverra at amet. Id nascetur ultricies nec pulvinar ac. Et nunc tellus auctor amet senectus id. Maecenas praesent orci quisque nisl, donec. Malesuada molestie sit id dolor, sodales ultrices.',
        date: '24 February 2022'
      },
      {
        id: 5,
        cover: '../../assets/images/news3.jpg',
        title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
        info: 'For the last 11 months, our team in collaboration with BP AGT geophysical specialists worked on the development of a novel technique that enables significant enhancement in vertical resolution and broadens the bandwidth of the seismic data. Integration of advanced AI algorithms with signal processing allowed to mitigate one of the main shortcomings of the conventional approaches as deep learning-based SIQE does not require the availability of well data or any prior geological interpretation. As the result of SIQE seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development starting from exploration to depletion.',
        date: '24 February 2022'
      },
    ];

    let oil = [
      {
        id: 1,
        button: 'S.I.Q.E',
        title: 'Enhancement of Seismic Vertical Resolution(S.I.Q.E)',
        info: 'SIQE technology enables to achieve significant enhancement in vertical resolution and Signal-to-Noise Ratio (SNR) improvement for both 2D and 3D seismic data of any quality. Unlike conventional approaches, Deep learning based SIQE does not require the availability of well data or any prior geological interpretation. As the result of SIQE seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development starting from exploration to depletion.',
        cover: '../../assets/images/news1.jpg'
      },
      {
        id: 2,
        button: 'S.I.N.A',
        title: 'Improvement of Seismic Signal-To-Noise Ratio(S.I.N.A)',
        info: 'The application of SINA technology allows subject matter experts to more clearly differentiate structural geological features, especially fault propagation in 3D via achieving notable improvement in Signal-to-Noise Ratio (SNR). The deep learning engine of SINA recognizes and removes different types of noises including random, coherent, colored, structural/orientation and gaussian noises present in seismic data without distorting the original seismic response.',
        cover: '../../assets/images/news2.jpg'
      },
      {
        id: 3,
        button: '4D Seismic Inversion',
        title: 'Hybrid Deep Learning and Physics Based 4D Seismic Inversion',
        info: 'The Deep learning core of the proposed 4D seismic inversion technology is trained based on various stochastically generated and physically simulated depletion scenarios. These scenarios embed different timewise spatial changes of reservoir properties comprising reservoir pressure and fluid saturations. A fully trained model predicts field variation of the aforementioned reservoir properties during the period between two acquisition dates.',
        cover: '../../assets/images/news3.jpg'
      },
      {
        id: 4,
        button: 'AVO Classification',
        title: 'AVO Classification for Fluid and Facies Identification',
        info: 'The proposed workflow allows the identification of reservoir fluid type and lithology distribution based on amplitude versus offset/angle (AVO) data. Core ML algorithms of the methodology provide an initial insight on potential trends in amplitude vs offset prior to the application of conventional AVO analysis. The main advantage of this technique is the significant reduction of uncertainty range during the traditional AVO classification. The final outcome is a much clearer differentiation between lithology and fluid effects.',
        cover: '../../assets/images/news4.jpg'
      },
      {
        id: 5,
        button: 'Hybrid FWI',
        title: 'Full Waveform Inversion (FWI)',
        info: 'Traditional FWI methodology is quite sensitive to the robustness of input data, which can lead to inconsistent models. The proposed technology is a physics-based neural-network model that performs seismic full waveform inversion by integrating the wave equation operators into a deep neural network. This minimizes the dependency on the amplitudes of a complex, unknown wave equation and parameters that conventional waveform inversion relies heavily upon.',
        cover: '../../assets/images/news5.jpg'
      }
    ];

    let rss = [
      {
        id: 1,
        title: 'Crop Mapping and Yield Forecast',
        info: 'The technology provides management solutions for crop health mapping and yield forecasting via the integration of high-res multispectral satellite or aerial imagery with Deep Learning algorithms. Modern satellite technologies are able to provide daily, weekly and monthly image data covering large areas, that can be embedded into automated workflows with broad crop monitoring applications in agriculture.',
        cover: '../../assets/images/news1.jpg'
      },
      {
        id: 2,
        title: 'Image Change Detection',
        info: 'The solution focuses on the processing of satellite-derived images taken over the same area for a period of time in order to identify, monitor and forecast potential geohazards events such as landslides, floodings, etc. Data analytics and ML core of the technology allow mitigating the limitation of human-based monitoring practices via automating of all procedures of surveillance.',
        cover: '../../assets/images/news2.jpg'
      },
      {
        id: 3,
        title: 'Geohazards and Security System Solutions',
        info: 'Proposed technology enables the identification of changes between scenes of the same geographical location observed on satellite images acquired at different times. This has a broad application in areas such as security surveillance, land use monitoring, agriculture, construction and etc.',
        cover: '../../assets/images/news3.jpg'
      }
    ];

    let custom = [
      {
        id: 1,
        button: 'AI Consultancy and Support',
        title: 'AI Consultancy and Support to Optimize Routine Workflows',
        info: 'Our experienced team can provide high quality, customer-tailored AI solutions to address specific challenges of our customers as well as to maximize the efficiency of their existing processes through automation of routine workflows.',
        cover: '../../assets/images/news5.jpg'
      },
      {
        id: 2,
        button: 'Technology on Specific Demand',
        title: 'Building the Technology Based on Specific Demand',
        info: 'We are eager to work closely with our customers to develop innovative digital solutions that will empower them to address pressing business challenges.',
        cover: '../../assets/images/news4.jpg'
      }
    ];

    return { news, oil, rss, custom };
  }
}