function Header() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col text-white basis-2/3 pr-0 md:pr-4">
        <h1 className="text-4xl font-bold mb-5 text-center md:text-start">
          Hello There 👋 <br />
          I'm Wisnu!
        </h1>
        <p className="text-md">
          Backend Engineer 👨‍💻 with 1 year of experience, 10+ projects successfully built, and 4 hackathon wins 🏆. Highly proficient in backend
          development across multiple programming languages 🛠, frameworks, databases, and cloud platforms ⛅, with working knowledge of DevOps
          practices including cloud infrastructure, deployment, Linux, virtualization, containerization, and CI/CD. Able to adapt quickly to new
          environments, collaborate with cross-functional teams, and translate business requirements into high-quality applications.
        </p>
        <div className="flex flex-row md:flex-col items-center md:items-start justify-around mt-3 md:mt-0">
          <div className="my-5">
            <a
              className="border border-white px-1 md:px-5 py-2 rounded-md hover:font-bold"
              href="/document/CV_WISNU_PUTRA.pdf"
              download=""
            >
              Download My CV
            </a>
          </div>
          <div className="flex gap-x-3">
            <div>
              <a href="https://github.com/W-ptra"
                className="flex items-center gap-x-1 hover:font-bold"
              >
                <img
                  src="/logo/github.webp"
                  alt="github"
                  className="size-6"
                  loading="lazy"
                />
                <span>
                  Github
                </span>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/wisnuputraaa//"
                className="flex items-center gap-x-1 hover:font-bold"
              >
                <img
                  src="/logo/linkedin.webp"
                  alt="linkedin"
                  className="size-6"
                  loading="lazy"
                />
                <span>
                  Linkedin
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/3 flex justify-center items-center mt-5 mb-10">
        <img
          className="w-[20rem] rounded-4xl"
          src="/others/portrait.webp"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Header;
