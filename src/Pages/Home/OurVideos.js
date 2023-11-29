import React from 'react'
import YouTube from 'react-youtube';


function OurVideos(props) {

  const youtubeSlides = [
    {
      url: "UB_wG18xLJA"
    },
    {
      url: "MChZHq0RwkU"
    },
    {
      url: "xZdRqlHfQ-Y"
    },
    {
      url: "mf2x6gaGDuw"
    },
    {
      url: "c4gGjwHvH9Q"
    },
    {
      url: "0xruayMI2Nk"
    },
    {
      url: "TiFZOTCrM7A"
    },
    {
      url: "YuXe4CaOAmM"
    }
  ]

  const opts = {
    height:'215',
    width: '360',
    };


  return (
      <div className='bg-zinc-600 md:py-6 py-3'>
        <div>
          <h1 className='text-center font-bold text-white text-4xl md:text-5xl mt-10 font-HeadingFont'>
          Watch<span className='text-green-500 font-bold'>Our Videos</span>
          </h1>
        </div>

          <div className="flex flex-row my-16 w-full m-auto  pr-4  carousel scroll-smooth px-5 items-center justify-start overflow-x-auto overflow-y-hidden max-w-[1240px]">
          {youtubeSlides.map((video, index) => (
            <div key={index} className='flex m-auto md:mx-5'>
              <YouTube videoId={video.url} opts={opts} className={'rounded-xl'}/>
                {/* <iframe className='rounded-3xl m-2 md:w-[360px] md:h-[215px]' src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
            </div>
          ))}
          </div>
      </div>
  );
}

export default OurVideos;



