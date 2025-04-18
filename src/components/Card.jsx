function Card({ portfolio }) {
  return (
    <div className="h-[32rem] bg-black/80 rounded-xl flex flex-col p-2.5 border-[0.08rem] border-white shadow-md relative">
      <div
        className="flex-1/2 bg-gray-400 min-h-[16.5rem] rounded-2xl items-center flex justify-center mb-1"
       
      >
        <img
          src={`${portfolio.thumbnail}.webp`}
          alt={portfolio.thumbnail}
          className="w-auto max-h-[16.5rem] rounded-2xl"
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
            />
          ))}
        </div>
      </div>

      {portfolio.winner && (
        <a
          href={portfolio.winner_link}
          className="
                flex items-center justify-center text-center w-[14rem] h-[3.5rem]
                cursor-pointer absolute bg-[#FFDC2B] top-[35px] right-[-50px] z-20 px-5
                text-[13px] font-[600] rotate-45 hover:font-extrabold 
            "
        >
          <p>{portfolio.winner}</p>
        </a>
      )}
    </div>
  );
}

export default Card;
