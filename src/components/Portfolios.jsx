import jsonPortfolios from "../portfolio.json"
import Card from "./Card"

function Portfolios(){
    return(
        <>
            <h1
                className="text-center text-white text-xl md:text-3xl font-bold my-5"
            >
                Let's Look at My Awesome Project 👀
            </h1>
            <div 
                className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-5 items-center"
            >
                { jsonPortfolios.map(portfolio => (
                    <Card portfolio={portfolio} key={portfolio.title}/>
                ))}
            </div>
        </>
    )
}

export default Portfolios