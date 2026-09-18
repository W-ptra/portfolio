"use client";

import { useMemo, useState } from "react";
import Card from "./Card";

function Portfolios({ portfolios, copy }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const skillSet = useMemo(() => [...new Set(portfolios.flatMap((portfolio) => portfolio.skills))], [portfolios]);
  const toggleSkill = (skill) => setSelectedSkills((previousSkills) => previousSkills.includes(skill) ? previousSkills.filter((selectedSkill) => selectedSkill !== skill) : [...previousSkills, skill]);
  const filteredPortfolios = selectedSkills.length ? portfolios.filter((portfolio) => selectedSkills.every((skill) => portfolio.skills.includes(skill))) : portfolios;

  return (
    <section>
      <h2 className="my-5 text-center text-xl font-bold text-white md:text-3xl">{copy.projectsHeading}</h2>
      <div className="flex flex-wrap justify-center gap-2">
        <button type="button" onClick={() => setSelectedSkills([])} className={`cursor-pointer rounded bg-black px-3 py-1 text-white ${selectedSkills.length === 0 ? "border border-white" : ""}`}>{copy.all}</button>
        {skillSet.map((skill) => (
          <button type="button" key={skill} onClick={() => toggleSkill(skill)} className={`cursor-pointer rounded bg-black px-3 py-1 text-white ${selectedSkills.includes(skill) ? "border border-white" : ""}`} aria-label={skill}>
            <img src={`/logo/${skill}.webp`} alt={skill} className="w-[1.6rem]" loading="lazy" />
          </button>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
        {filteredPortfolios.map((portfolio) => <Card key={portfolio.title} portfolio={portfolio} copy={copy} />)}
      </div>
    </section>
  );
}

export default Portfolios;
