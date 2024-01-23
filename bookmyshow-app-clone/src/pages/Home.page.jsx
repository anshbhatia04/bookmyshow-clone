import React, { useState } from 'react';

// Layout HOC
import DefaultLayoutHoc from '../layout/Default.layout';

// Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';


const HomePage = () => {
    const [ recommendedMovies, setRecommendedMovies ] = useState([]); 
    const [ premierMovies, setPremierMovies ] = useState([]); 
    const [ onlineStreamingEvents, setOnlineStreamingEvents ] = useState([]); 
    return (
        <>
          <HeroCarousel />

          <div className='container mx-auto px-4 md:px-12 my-8' >
            <h1 className='text 2-xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The Best of Entertainment</h1>
            <EntertainmentCardSlider />
          </div>

          <div className='mx-auto px-4 md:px-12 my-8'>
            <PosterSlider 
              title="Recommended Movies" 
              subject="List of Recommended Movies" 
              posters={recommendedMovies} 
              isDark={false}
            />
          </div>

          <div className='bg-premier-800 py-12'>
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <div className='hidden md:flex'>
                    <img src='' alt='RuPay' className='w-full h-full'/>
                </div>

                <PosterSlider 
                  title="Premieres" 
                  subject="Brand New Releases Every Friday" 
                  posters={premierMovies} 
                  isDark={true}
                />
            </div>
          </div>
          <div>
            <PosterSlider 
              title="Online Streaming Events" 
              subject="Online Stream Events" 
              posters={onlineStreamingEvents} 
              isDark={false}
            />
          </div>
        </>
   );
};

export default DefaultLayoutHoc(HomePage);