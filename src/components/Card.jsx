"use client";

import { useEffect, useState } from "react";

function Card({ portfolio, copy }) {
  const [zoomImage, setZoomImage] = useState(false);

  useEffect(() => {
    document.body.style.overflow = zoomImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [zoomImage]);

  const toggleZoom = () => setZoomImage((isZoomed) => !isZoomed);

  return (
    <>
      <article className="relative flex h-[32rem] flex-col rounded-xl border-[0.08rem] border-white bg-black/80 p-2.5 shadow-md">
        <button type="button" className="mb-1 flex min-h-[16.5rem] flex-1/2 cursor-zoom-in items-center justify-center rounded-2xl bg-gray-400" onClick={toggleZoom} aria-label={`Zoom ${portfolio.title}`}>
          <img src={`${portfolio.thumbnail}.webp`} alt={portfolio.title} className="max-h-[16.5rem] w-auto rounded-md" loading="lazy" />
        </button>
        <div className="flex flex-1/2 flex-col text-white">
          <div className="flex basis-[15%] flex-col justify-center border border-black border-b-white font-bold"><span>{portfolio.title}</span></div>
          <div className="mt-1 basis-[50%] space-y-0 text-[0.8rem]">{portfolio.description}</div>
          <div className="flex basis-[17.5%] items-center justify-center gap-x-2">
            {portfolio.github && <a href={portfolio.github} className="flex items-center gap-1 rounded-md border border-white px-2 py-0.5 hover:font-bold"><img src="/logo/github.webp" alt="GitHub repository" className="size-[1.2rem]" loading="lazy" /><span>GitHub</span></a>}
            {portfolio.youtube && <a href={portfolio.youtube} className="flex items-center gap-1 rounded-md border border-white px-2 py-0.5 hover:font-bold"><img src="/logo/youtube.webp" alt="YouTube" className="size-[1.2rem]" loading="lazy" /><span>{copy.watch}</span></a>}
            {portfolio.demo && <a href={portfolio.demo} className="flex items-center gap-1 rounded-md border border-white px-2 py-0.5 hover:font-bold"><img src="/logo/demo.webp" alt="Demo" className="size-[1.2rem]" loading="lazy" /><span>{copy.demo}</span></a>}
          </div>
          <div className="mt-1.5 flex basis-[17.5%] items-center justify-center gap-x-2">
            {portfolio.skills.map((skill) => <img key={skill} src={`/logo/${skill}.webp`} alt={skill} className="w-[1.6rem]" loading="lazy" />)}
          </div>
        </div>
        {portfolio.winner && <a href={portfolio.winner_link} className="absolute top-[35px] right-[-28px] z-20 flex h-[3.5rem] w-[13rem] rotate-49 cursor-pointer items-center justify-center bg-[#FFDC2B] px-5 text-center text-[12px] font-[600] hover:font-extrabold">{portfolio.winner.length > 45 ? <span className="text-[0.55rem]">{portfolio.winner}</span> : <span>{portfolio.winner}</span>}</a>}
      </article>
      {zoomImage && <button type="button" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={toggleZoom} aria-label={copy.closeModal}>
        <span><img src={`${portfolio.thumbnail}.webp`} alt={portfolio.title} className="max-h-[90vh] max-w-[90vw] rounded-xl md:max-h-[30rem] md:max-w-[40rem]" loading="lazy" /><span className="mt-5 block text-center font-bold text-white">{copy.closeModal}</span></span>
      </button>}
    </>
  );
}

export default Card;
