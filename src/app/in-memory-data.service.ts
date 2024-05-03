import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let news = [
      {
        id: 18,
        cover: 'assets/images/oil1.gif',
        title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
        info: 'At the initiative of the bp AGT Innovation team, over the past 11 months, we have been working in collaboration with bp AGT specialists to develop a new method that enables significantly improved vertical resolution while broadening seismic data bandwidth.\n\n Integration of advanced AI algorithms with signal processing allowed us to mitigate one of the main shortcomings of conventional approaches, as deep learning-based S.I.Q.E. does not require the availability of well data or any prior geological interpretation.\n\n As the result of S.I.Q.E. seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development, starting from exploration to depletion.',
        date: '25 February 2022'
      },
      {
        id: 17,
        cover: 'assets/images/news2.gif',
        title: 'Enhancement of ACG and SD seismic data vertical resolution based on S.I.Q.E. algorithm',
        info: 'We are pleased to announce that our first seismic image quality enhancement (S.I.Q.E.) algorithm has been successfully applied in the Azeri-Chirag-Gunashli (ACG) and Shah Deniz (SD) fields located in the South Caspian Basin. The interest in these fields is that they have a large number of wells that allow you to check the performance of the S.I.Q.E. methodology. At the same time, it is important to note that both fields have different seismic qualities and also that various data acquisition methods were used in their collection. Specifically, towed streamer for the ACG field and ocean bottom seismic for the SD field.\n\n In general, we can highlight the key facts from the obtained results. Quantitatively, the high-frequency components were seen to be enhanced over various time intervals. On average, the outcomes have 15 Hz more frequency bandwidth compared to the initial cubes. At the time, an increase in the signal-to-noise ratio of 35% was observed. As a result of the enhancement of the high-frequency components and broadening of the bandwidth, there is also an increase in the dominant frequency values of 56% and, consequently, an increase in resolution of 38%. These results were obtained within a few weeks in comparison to traditional methods, which require several months.\n\n Due to the large availability of well data, various analyses were carried out. One of which demonstrated a good match of seismic events between synthetic seismic data and enhanced seismic volumes. This indicates that the observed seismic events are consistent with the actual logging data. In parallel, comparisons were made with the vertical seismic profile (VSP) data, which led to similar conclusions. Finally, statistical analysis showed a better fit between the seismic responses interpreted from the enhanced seismic volume and the geological units determined using a standard set of well logs from drilled wells and consistent assumptions.',
        date: '6 April 2022'
      },
      {
        id: 16,
        cover: 'assets/images/oil2.gif',
        title: 'The next product of WAVERITY: Improvement of SNR based on Seismic Image Noise Attenuation (S.I.N.A.) technique',
        info: 'WAVERITY team developed an in-house tool for increasing the signal-to-noise ratio (SNR) of seismic reflectivity data. The methodology employs deep learning algorithms which efficiently manage the conditioning of corrupted images, decreasing or completely removing various types of noise, including random, coherent, colored, and structural/orientation noises.\n\n Among the benefits of the proposed methodology is its superiority over conventional filtering methods such as f-x deconvolution and structural filtering, as S.I.N.A. increases the data quality without affecting the seismic events themselves. Unlike conventional methods, the developed algorithm does not require a lot of parameterizations and the desired output can be obtained within a short time interval. Moreover, it is important to note that this methodology does not need any well data and completely depends only on the original seismic data.\n\n The robustness of S.I.N.A. has been tested on a number of open-source data as well as on several real fields from the South Caspian Basin, such as Azeri-Chirag-Guneshli and Shah Deniz. As a result, specialists are able to improve their interpretation and enhance field understanding by upgrading the visibility of the geological objects.',
        date: '19 April 2022'
      },
      {
        id: 15,
        cover: 'assets/images/news4.png',
        title: 'A successful application of the S.I.Q.E. algorithm on seismic data for 3 prospects in the SWAP area',
        info: 'We are happy to announce that WAVERITY team has successfully implemented the Seismic Imaging Quality Enhancement (S.I.Q.E.) algorithm for three prospects (North Khali, Bibi-Heybat, Qarabatdakh), which are located within the Shallow Water Absheron Peninsula (SWAP) area and are undergoing exploration activities.\n\n While each of these three fields is unique in terms of its geological setting, exploration objectives, and seismic data quality, the S.I.Q.E. has effectively increased the vertical resolution and removed various types of noise in all cases, making the geological interpretation more efficient.\n\n Considering the very limited amount of well data, the validation was done by means of analyzing various types of attribute maps, as well as applying seismic stratigraphy methods to identify and compare important stratigraphic events between original and processed seismic volumes.\n\n Overall, we achieved up to a 40% increase in dominant frequency (which practically translates to doubling, or in some cases, tripling, the number of troughs and peaks in reservoir intervals). We also improved the signal-to-noise ratio by 24%, resulting in a much cleaner seismic image.',
        date: '4 August 2022'
      },
      {
        id: 14,
        cover: 'assets/images/news5.jpg',
        title: 'WAVERITY was presented at the event organized by bp’s innovation team in Azerbaijan, Georgia and Türkiye',
        info: 'On November 17, WAVERITY team participated at the initiative organized by bp’s innovation team in Azerbaijan, Georgia, and Türkiye. The purpose of the event was to drive efficiency of bp’s operations in the region and promote innovations in Azerbaijan.\n\nThe event took place at ADA University and began with an introductory film and speech by Gary Jones, bp AGT regional president. Then it was followed by Dr. Arzu Javadova, SOCAR’s chief geologist’s speech, in which Dr. Javadova addressed the letter from Rovshan Najaf, SOCAR President.\n\nThen, the presentation space was opened by Ayten Agalarova, head of country bp in Georgia and AGT Innovation Team lead. The first startup to be presented was WAVERITY, Seismic Image Quality Enhancement Solution project. Following that, three other startups were introduced: AIQUM (Sand Detection Solution Using Fiber Optic Technology), VoltaCH4 (Methane Detection and Quantification Solution Using Satellite and Drone Images), and DMP (Digital Material Purchasing Software Solution). All the startup teams worked closely with the local universities, engineers, and digital innovators to develop their solutions.\n\nAfter the presentation spaces, a general Q&A session was opened, and all the guests had a chance to ask the project teams questions. The closing speech of Hafiz Pashayev, the founding rector of ADA University, concluded the official part of the event.',
        date: '18 November 2022'
      },
      {
        id: 13,
        cover: 'assets/images/news/13.jpg',
        title: 'WAVERITY participated at 28th International Caspian Oil & Gas Exhibition',
        info: 'Great news! WAVERITY had the privilege of being part of the 28th International Caspian Oil & Gas Exhibition in Baku from May 31st to June 2nd. Our team participated in the session on "Opportunities for small and medium-sized businesses in providing oil and gas companies."\n\nDuring the exhibition, Ali Naghiyev, CEO at eiGroup, Izat Shahsenov, Director and Principal Data Scientist at WAVERITY, and Nariman Ismailov, Senior Geophysicist at BP AGT, presented WAVERITY’s innovative approach and methodology. We highlighted the unique advantages that our solutions offer, addressing the industry’s most pressing needs by leveraging AI for better decision-making and more efficient operations.\n\nIn addition to the theoretical aspects, the team shared practical examples by discussing real case studies that showcased the application of WAVERITY’s solutions and the achieved outcomes.\n\nWe are excited about the potential benefits our services can bring to the oil and gas industry and remain committed to making a positive impact as we continue our journey of innovation.\n\nOur sincere gratitude to BP AGT for granting us this incredible opportunity.',
        date: '18 November 2023'
      },
      {
        id: 12,
        cover: 'assets/images/news/12.jpg',
        title: 'Innovation Program with BP AGT',
        info: 'We extend our sincere appreciation to BP AGT for the invaluable opportunity provided through Innovation Program.\n\nIt was under their guidance that we launched WAVERITY and subsequently established our independent operations.\n\nEnduring partnership with BP AGT is a testament to the strength of our collaboration. As one of our esteemed clients, BP’s involvement enables us to tap into their expertise and resources, driving us towards our shared objectives.\n\nWith gratitude, we acknowledge BP AGT’s ongoing trust and support.',
        date: '18 November 2023'
      },
      {
        id: 11,
        cover: 'assets/images/news/11.jpg',
        title: 'WAVERITY has signed a Memorandum of Understanding (MoU) with STRYDE',
        info: 'We are pleased to inform that WAVERITY has signed a Memorandum of Understanding (MoU) with STRYDE, a renowned company known for its innovative achievements in the seismic industry. It specializes in manufacturing the world’s smallest and lightest nodal seismic system, as well as providing cutting-edge onshore seismic technology and efficient data processing solutions.\n\nOur collaboration with STRYDE is driven by a shared objective to enhance seismic imaging technology. Together, we intend to research and develop innovative products and solutions that deliver exceptional quality in seismic data.\n\nStay connected for more updates on our progress as we work towards advancing seismic imaging technology.',
        date: '18 November 2023'
      },
      {
        id: 10,
        cover: 'assets/images/news/10.jpg',
        title: 'Javidan Karimli participated in the International SEG ASOIU Field Camp 2023',
        info: 'We are happy to share that Javidan Karimli, from the WAVERITY team, is participating in the International SEG ASOIU Field Camp 2023.\n\nThe camp, which began on July 24, is a joint initiative by #SEG, #UFAZ, and the #ASOIU Career Center. It provides a platform for 25 students from ASOIU, UFAZ, #Khazar University, Istanbul Technical University, and King Fahd University of Petroleum & Minerals.\n\nAt the camp, students will gain hands-on experience using geophysical methods such as Ground Penetrating Radar (GPR), Seismic Refraction, and Electrical Resistivity (ERT), along with geochemical instruments like water pH and conductivity meters. The emphasis is on practical application of these tools and the interpretation and processing of the data obtained.\n\nWe send our warmest regards to Javidan, who is fulfilling a role as one of the supervisors at the camp, and wish the best of luck to all camp participants.\n\nThe WAVERITY team extends its sincere thanks to all those who have contributed to this notable initiative.',
        date: '18 November 2023'
      },
      {
        id: 9,
        cover: 'assets/images/news/9.jpg',
        title: 'WAVERITY has started collaboration with SOCAR',
        info: 'Breaking New Ground! WAVERITY is excited to share that our team has started its collaboration with SOCAR on enhancement of the seismic image quality for one of the prominent fields under exploration in the South Caspian Basin.\n\nWe feel proud of the opportunity to contribute to SOCAR’s mission of fostering sustainable development and ensuring energy security on both local and global levels.\n\nStay connected for more updates on our collaborative journey as we work hand in hand to enhance energy solutions.',
        date: '18 November 2023'
      },
      {
        id: 8,
        cover: 'assets/images/news/8.jpg',
        title: 'WAVERITY will participate at 10th SPE Annual Caspian Technical Conference and Exhibition.',
        info: 'WAVERITY is set to make its mark at the 10th SPE Annual Caspian Technical Conference and Exhibition, taking place on November 21-23 in Baku. We will present the following research papers:\n\n"Seismic Facies Clustering Via Spectral Decomposition Using Machine Learning."\n"Application of Deep Learning Methods in Seismic Image Enhancement."\n"Estimation of Gamma Ray Values With Deep Learning From Seismic."\n\nAnticipating an enriching dialogue and the exchange of innovative thoughts.\n\nWe are looking forward to seeing you!',
        date: '18 November 2023'
      },
      {
        id: 6,
        cover: 'assets/images/news/6.jpg',
        title: 'Join WAVERITY’s Upcoming Webinar',
        info: 'Exciting News: Join WAVERITY’s Upcoming Webinar!\n\nWe’ve noticed your questions and the increasing interest in our expanding AI product portfolio, and we’re excited to announce that there’s an important update on the horizon!\n\nSave the Date:\n🗓️ Date: 7 November, 2023\n⏰ Time: 4 p.m. Baku time (UTC+04:00)\n\nEarly November we’ll be hosting a highly anticipated webinar where we’ll dive deep into WAVERITY’s products, real-world case examples, and the value we bring to the industry.\n\nHere’s what you can expect:\n- We’ll talk about our cutting-edge AI products and technologies covering post-processing and conventional processing stages of seismic data analysis.\n- Real-case examples showcasing tangible results.\n- You can meet our team of tech experts and geoscientists.\n- Ask burning questions about our methodology and outcomes.\n- Explore opportunities to join our exceptional team.\n\nMark your calendar, set your alarms, and be ready to join us! We considered also the importance of accommodating different time zones, ensuring that all industry professionals can participate.\n\nStay tuned, follow our page, there will be a reminder post! Don’t miss this opportunity to supercharge your knowledge and get to know WAVERITY!',
        date: '7 Octoober 2023'
      },
      {
        id: 5,
        cover: 'assets/images/news/5.jpg',
        title: 'WAVERITY visited ADIPEC 2023 in Abu Dhabi',
        info: 'Our Team Explores the Future of Energy at ADIPEC 2023.\n\nWe are excited to share a glimpse of our team’s participation at ADIPEC 2023 Exhibition and Conference, held in Abu Dhabi from October 2-5.\n\nWith the theme "Decarbonising. Faster. Together.", the event brought together more than 160,000 attendees, 1,500 speakers, and 2,200 exhibiting companies, including government ministers, CEOs, policymakers, industry experts, and innovators.\n\nTeam’s experience at ADIPEC 2023 reinforces our commitment to staying at the forefront of industry innovations, collaborating with global leaders, and contributing to the collective effort to provide cutting-edge and comprehensive solutions for the energy sector.\n\nStay tuned for more updates as we continue to drive innovation and sustainability in the energy sector.',
        date: '10 October 2023'
      },
      {
        id: 4,
        cover: 'assets/images/news/4.jpg',
        title: 'New Research Direction Announcement from WAVERITY!',
        info: 'Exciting New Research Direction Announcement from WAVERITY!\n\nAs our team is expanding, we’re pleased to announce a significant development in our research focus: the introduction of a new stream that’s set to integrate deep learning techniques into conventional seismic data processing.\n\nIntroducing "NeuroSeis": Non-Linear Signal Processing and Deep Learning-based Solutions.\n\nIn the field of seismic processing, innovation is the key to accuracy and efficiency. NeuroSeis brings a cutting-edge approach to seismic processing world, enhancing accuracy and computational performance across the entire workflow: first break picking, sorting, velocity analysis, denoising, demultiple, velocity model building, and more. We intend to work with both land and marine seismic data.\n\nMoving forward in this direction, we will be sharing progress with industry professionals and believe that collaborations will be an effective basis for growth. We are confident that "NeuroSeis" will bring valuable advancements to the geosciences industry and the way we process seismic data.\n\nStay tuned for more updates as we continue to shape the future of geoscience AI solutions.',
        date: '6 November 2023'
      },
      {
        id: 3,
        cover: 'assets/images/news/3.jpg',
        title: 'WAVERITY hosted a webinar on AI technologies in seismic data analysis',
        info: 'On November 7, 2023, WAVERITY hosted a webinar on AI technologies in seismic data analysis, featuring speakers Javidan Karimli and Hasan Asgarov. The event, conducted at 4 p.m. Baku time, spanned approximately 90 minutes and offered profound insights into the field.\n\nKey Aspects of the Webinar:\n\n- A detailed exploration of WAVERITY’s advanced AI products and technologies, particularly focusing on S.I.N.A., S.I.Q.E., and Log Cube algorithms.\n- Presentation of real-case examples to demonstrate the practical applications and results of these technologies.\n- Q&A segment for a deeper understanding of WAVERITY’s methodologies and achievements.\n- Discussion on opportunities for those interested in joining the WAVERITY team.\n\nWe extend our heartfelt thanks to all the participants for their presence and active engagement during the webinar. Your participation made the event a great success. We will be hosting another webinar in the near future and look forward to your continued participation. Stay tuned for more details!',
        date: '10 November 2023'
      },
      {
        id: 2,
        cover: 'assets/images/news/2.jpg',
        title: 'WAVERITY is preparing to participate in the 10th SPE Annual Caspian Technical Conference and Exhibition',
        info: 'WAVERITY is preparing to participate in the 10th SPE Annual Caspian Technical Conference and Exhibition, which will be held from November 21-23 in Baku. Our team plans to present several research papers:\n\nOrkhan Mammadov will discuss "Seismic Facies Clustering Via Spectral Decomposition Using Machine Learning," offering an exploration of new techniques in this area - 22 of November, at 12:00.\n\nJavidan Karimli’s contribution will be "Estimation of Gamma Ray Values With Deep Learning From Seismic," where he will examine the application of deep learning in interpreting geophysical data - 22 of November, at 17:00.\n\nWe hope to engage in meaningful conversations and share ideas at this event.\n\nLooking forward to the opportunity to connect with attendees.',
        date: '22 November 2023'
      },
      {
        id: 1,
        cover: 'assets/images/news/1.jpg',
        title: 'Orkhan Mammadov presented "Seismic Facies Clustering Via Spectral Decomposition Using Machine Learning» at SPE',
        info: 'At the recent 10th SPE Annual Caspian Technical Conference and Exhibition in Baku, Orkhan Mammadov, an employee of the WAVERITY presented a paper titled "Seismic Facies Clustering Via Spectral Decomposition Using Machine Learning."\n\nThis presentation, held on November 22nd, showcased innovative methods for enhancing seismic data analysis through the integration of spectral decomposition and machine learning.\n\nThe conference provided an excellent opportunity for WAVERITY to share our latest research and engage with industry experts. We are proud to contribute to the evolving field of geosciences and look forward to future events.',
        date: '6 December 2023'
      },
      {
        id: 0,
        cover: 'assets/images/news_19.png',
        title: 'First Product of Raw Seismic Data Processing within NeuroSeis stream: Automatic First Break Picking (FBP)',
        info: 'At the initiative of the bp AGT Innovation team, over the past 11 months, we have been working in collaboration with bp AGT specialists to develop a new method that enables significantly improved vertical resolution while broadening seismic data bandwidth.\n\n Integration of advanced AI algorithms with signal processing allowed us to mitigate one of the main shortcomings of conventional approaches, as deep learning-based S.I.Q.E. does not require the availability of well data or any prior geological interpretation.\n\n As the result of S.I.Q.E. seismic data enhancement, specialists are able to better comprehend and mitigate their risks during the major well planning activities throughout the different stages of the field development, starting from exploration to depletion.',
        date: '3 May 2024'
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
      },
      {
        id: 6,
        button: 'Log Cube',
        title: 'Log Cube: Log Scale Property Prediction from Seismic Reflectivity',
        info: 'The availability of log data is paramount in shaping reservoir development strategies and enabling well-informed decision-making. A greater volume of accessible logs directly enhances our understanding of subsurface formations. However, it’s important to acknowledge that in practical scenarios, log values are not uniformly accessible at all points.',
        cover: 'assets/images/log-cube.jpg',
        cover2: 'assets/images/log2.jpg',
        cover3: 'assets/images/log1.jpg'
      },
      {
        id: 7,
        button: 'MOTIVO',
        title: 'MOTIVO: Automatic Seismic Interpretation',
        info: 'Seismic data conceals a wealth of information beyond initial appearances, and manual methods may not fully tap into its complete potential. Unlocking hidden insights in seismic data, MOTIVO introduces an automated interpretation stream that is set to transform data review procedures.',
        cover: 'assets/images/motivo.jpg',
        cover2: 'assets/images/motivo-left.jpg',
        cover3: 'assets/images/motivo-right.jpg'
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
        id: 0,
        name: 'Algorithm’s Developer\nfor Geophysical Products',
        location: 'Baku, Azerbaijan',
        link: 'https://forms.clickup.com/31136212/f/xp6em-3307/M63OT65W62EK4RTEJS'
      },
      {
        id: 1,
        name: 'Senior Algorithm\nDeveloper',
        location: 'Baku, Azerbaijan',
        link: 'https://forms.clickup.com/31136212/f/xp6em-3204/YYUDA6QOPEIW1M5GQE'
      },
      {
        id: 2,
        name: 'Geophysicist\n(Interpreter)',
        location: 'Baku, Azerbaijan',
        link: 'https://forms.clickup.com/31136212/f/xp6em-2783/J3LGWHBCC3OFPAJZK8'
      }
    ];

    return { news, oil, rss, custom, careers };
  }
}