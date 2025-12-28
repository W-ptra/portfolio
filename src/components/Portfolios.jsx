import { useState } from "react"
import jsonPortfolios from "../portfolio.json"
import Card from "./Card"

function Portfolios() {
    const [selectedSkills, setSelectedSkills] = useState([])

    const skillSet = [
        ...new Set(
            jsonPortfolios.flatMap(portfolio => portfolio.skills)
        )
    ]

    const toggleSkill = (skill) => {
        setSelectedSkills(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        )
    }

    const filteredPortfolios =
        selectedSkills.length > 0
            ? jsonPortfolios.filter(portfolio =>
                selectedSkills.every(skill =>
                    portfolio.skills.includes(skill)
                )
            )
            : jsonPortfolios

    return (
        <>
            <h1 className="text-center text-white text-xl md:text-3xl font-bold my-5">
                Let's Look at My Awesome Project 👀
            </h1>

            <div className="flex flex-wrap gap-2 justify-center">
                <button
                    onClick={() => setSelectedSkills([])}
                    className={`px-3 py-1 rounded text-white ${selectedSkills.length === 0
                        ? "bg-black border border-white cursor-pointer"
                        : "bg-black cursor-pointer"
                        }`}
                >
                    All
                </button>

                {skillSet.map(skill => (
                    <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`px-3 py-1 rounded text-white ${selectedSkills.includes(skill)
                            ? "bg-black border border-white cursor-pointer"
                            : "bg-black cursor-pointer"
                            }`}
                    >
                        <img
                            key={skill}
                            src={`/logo/${skill}.webp`}
                            alt={skill}
                            className="w-[1.6rem]"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-5 items-center">
                {filteredPortfolios.map(portfolio => (
                    <Card
                        key={portfolio.title}
                        portfolio={portfolio}
                    />
                ))}
            </div>
        </>
    )
}

export default Portfolios