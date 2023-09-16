import React from 'react'
// import {useState} from 'react'

// import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

function OurVideos(props) {

  const youtubeSlides = [
    {
      url: "https://www.youtube.com/embed/UB_wG18xLJA"
    },
    {
      url: "https://www.youtube.com/embed/MChZHq0RwkU"
    },
    {
      url: "https://www.youtube.com/embed/xZdRqlHfQ-Y"
    },
    {
      url: "https://www.youtube.com/embed/mf2x6gaGDuw"
    },
    {
      url: "https://www.youtube.com/embed/c4gGjwHvH9Q"
    },
    {
      url: "https://www.youtube.com/embed/0xruayMI2Nk"
    },
    {
      url: "https://www.youtube.com/embed/TiFZOTCrM7A"
    },
    {
      url: "https://www.youtube.com/embed/YuXe4CaOAmM"
    }
  ]
// const [currentIndex, setCurrentIndex] = useState(0)

//   const prevSlide = () => { 
//     const isFirstSlide = currentIndex === 0
//     const newIndex = isFirstSlide ? youtubeSlides.length -1 : currentIndex -1
//     setCurrentIndex (newIndex);
//   }

//   const nextSlide = () => { 
//     const lastSlide = currentIndex === youtubeSlides.length -1
//     const newIndex = lastSlide ? 0 : currentIndex + 1
//     setCurrentIndex (newIndex);
//   }

  return (
      <div className='bg-zinc-600 py-6 '>
        <div>
          <h1 className='text-center font-bold text-white text-3xl md:text-4xl mt-[100px] font-HeadingFont'>
          Watch<span className='text-green-500 font-bold'>Our Videos</span>
          </h1>
        </div>

          <div className="flex flex-row my-16 w-full m-auto  pr-4  carousel scroll-smooth px-5 items-center justify-start overflow-x-auto overflow-y-hidden max-w-[1240px]">
          {youtubeSlides.map((video, index) => (
            <div key={index} className='flex m-auto md:mx-5'>

                <iframe className='rounded-3xl m-2 md:w-[360px] md:h-[215px]' src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
          ))}  
            {/* <div className=' top-[50%] -translate-x-0 translate-y-[-50% left-5 text-2xl rounded-full bg-green-500 p-2 text-white cursor-pointer] '>
              <BsChevronCompactLeft size={30} onClick={prevSlide}/>
            </div>
            <div className='top-[50%] -translate-x-0 translate-y-[-50% right-5 text-2xl rounded-full bg-green-500 p-2 text-white cursor-pointer] '>
              <BsChevronCompactRight size={30} onClick={nextSlide}/>
            </div> */}
          </div>
      </div>
  );
}

export default OurVideos;



