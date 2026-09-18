import LanguageSwitcher from "./LanguageSwitcher";

function Header({ copy, locale }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex basis-2/3 flex-col pr-0 text-white md:pr-4">
        <div className="mb-5 flex items-start justify-between gap-4">
          <h1 className="text-center text-4xl font-bold md:text-start">
            {copy.greeting} <br />
            {copy.introduction}
          </h1>
          <LanguageSwitcher locale={locale} label={copy.languageLabel} switchLanguage={copy.switchLanguage} />
        </div>
        <p className="text-md">{copy.bio}</p>
        <div className="mt-3 flex flex-row items-center justify-around md:mt-0 md:flex-col md:items-start">
          <div className="my-5">
            <a className="rounded-md border border-white px-1 py-2 hover:font-bold md:px-5" href="/document/CV_WISNU_PUTRA.pdf" download>
              {copy.downloadCv}
            </a>
          </div>
          <div className="flex gap-x-3">
            <a href="https://github.com/W-ptra" className="flex items-center gap-x-1 hover:font-bold">
              <img src="/logo/github.webp" alt="GitHub" className="size-6" loading="lazy" />
              <span>{copy.github}</span>
            </a>
            <a href="https://www.linkedin.com/in/wisnuputraaa/" className="flex items-center gap-x-1 hover:font-bold">
              <img src="/logo/linkedin.webp" alt="LinkedIn" className="size-6" loading="lazy" />
              <span>{copy.linkedin}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mb-10 mt-5 flex basis-1/3 items-center justify-center">
        <img className="w-[20rem] rounded-4xl" src="/others/portrait.webp" alt="Wisnu Putra" loading="lazy" />
      </div>
    </div>
  );
}

export default Header;
