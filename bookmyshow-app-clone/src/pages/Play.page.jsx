import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

// components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in New Delhi</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                        <Poster isPlay={true} 
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/et00326779-urwblcyjuw-portrait.jpg" 
                                title="Hamlet" 
                                subtitle="Drama | English, Hindi | 18yrs+ | 2h 30mins"/>
                      </div>
                      <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex:items-center'>
                        <Poster isPlay={true} 
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/et00115024-fkxtuwkkqf-portrait.jpg"
                                title="Umrao Jaan" 
                                subtitle="Drama | Hindi | 18yrs+ | 2h"/>
                      </div>
                      <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex:items-center'>
                        <Poster isPlay={true} 
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00384238-mwrquqgdcg-portrait.jpg" 
                                title="The Patient" 
                                subtitle="Drama | English | 18yrs+ | 1h 30mins"/>
                      </div>
                      <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex:items-center'>
                        <Poster isPlay={true} 
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/et00385350-xsrmvbbanm-portrait.jpg" 
                                title="BIRDFLIGHT" 
                                subtitle="Contemporary, Drama | English, Hindi | 18yrs+ | 2h"/>
                      </div>
                      <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex:items-center'>
                        <Poster isPlay={true} 
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00351817-vmpeestjte-portrait.jpg" 
                                title="My Wife's 8th Vachan" 
                                subtitle="Comedy Shows | English, Hindi | 18yrs+ | 2h 30mins"/>
                      </div>
                      <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex:items-center'>
                        <Poster isPlay={true} 
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/et00385837-seddgfqxkz-portrait.jpg" 
                                title="Classic Chekhov" 
                                subtitle="Fantasy | English | 18yrs+ | 2h"/>
                      </div>
                    </div>
                </div>
                
                <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Hindi", "Tamil", "Telugu"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);