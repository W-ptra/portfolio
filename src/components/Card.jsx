import { useState,useEffect } from "react";

function Card({ portfolio }) {
  const [zoomImage, setZoomImage] = useState(false);
  const body = document.body;
  useEffect(()=>{
    if(zoomImage){
      body.style.overflow = "hidden"
      return;
    }

    body.style.overflow = "auto"
  },[zoomImage])

  const handleZoomChange = (url) => {
    setZoomImage((zoomImage) => !zoomImage);
  };

  return (
    <>
      <div className="h-[32rem] bg-black/80 rounded-xl flex flex-col p-2.5 border-[0.08rem] border-white shadow-md relative">
        <div
          className="flex-1/2 bg-gray-400 min-h-[16.5rem] rounded-2xl items-center flex justify-center mb-1 cursor-zoom-in"
          onClick={() => handleZoomChange(`${portfolio.thumbnail}.webp`)}
        >
          <img
            src={`${portfolio.thumbnail}.webp`}
            alt={portfolio.thumbnail}
            className="w-auto max-h-[16.5rem] rounded-md"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col flex-1/2 text-white">
          <div className="basis-[15%] border border-black border-b-white flex flex-col justify-center font-bold">
            <span>{portfolio.title}</span>
          </div>
          <div className="basis-[50%] space-y-0 text-[0.8rem] mt-1">
            {portfolio.description}
          </div>
          <div className="basis-[17.5%] flex justify-center items-center gap-x-2">
            <a
              href={portfolio.github}
              className="flex items-center gap-1 border border-white rounded-md px-2 py-0.5 hover:font-bold"
            >
              <img
                src="/logo/github.webp"
                alt="github repository"
                className="size-[1.2rem] "
                loading="lazy"
              />
              <span>Github</span>
            </a>
            {portfolio.youtube && (
              <a
                href={portfolio.youtube}
                className="flex items-center gap-1 border border-white rounded-md px-2 py-0.5 hover:font-bold"
              >
                <img
                  src="/logo/youtube.webp"
                  alt="youtube"
                  className="size-[1.2rem] "
                  loading="lazy"
                />
                <span>Watch</span>
              </a>
            )}
            {portfolio.demo && (
              <a
                href={portfolio.demo}
                className="flex items-center gap-1 border border-white rounded-md px-2 py-0.5 hover:font-bold"
              >
                <img
                  src="/logo/demo.webp"
                  alt="demo"
                  className="size-[1.2rem] "
                  loading="lazy"
                />
                <span>Demo</span>
              </a>
            )}
          </div>
          <div className="basis-[17.5%] flex gap-x-2 items-center justify-center mt-1.5">
            {portfolio.skills.map((skill) => (
              <img
                key={skill}
                src={`/logo/${skill}.webp`}
                alt={skill}
                className="w-[1.6rem]"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {portfolio.winner && (
          <a
            href={portfolio.winner_link}
            className="
                  flex items-center justify-center text-center w-[13rem] h-[3.5rem]
                  cursor-pointer absolute bg-[#FFDC2B] top-[35px] right-[-28px] z-20 px-5
                  text-[12px] font-[600] rotate-49 hover:font-extrabold 
              "
          >
            <p>{portfolio.winner}</p>
          </a>
        )}
      </div>
        {zoomImage && (
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/90 z-50 flex justify-center items-center"
            onClick={()=>handleZoomChange(`${portfolio.thumbnail}.webp`)}
          >
            <div>
              <img 
                src={`${portfolio.thumbnail}.webp`} 
                alt="" 
                className="max-w-[90vw] md:max-w-[40rem] max-h-[90vh] md:max-h-[30rem] rounded-xl" 
                loading="lazy"  
              />
              <h3 className="text-center text-white font-bold mt-5">Click Anywhere to close</h3>
            </div>

          </div>
        )}
      
    </>
  );
}

export default Card;
