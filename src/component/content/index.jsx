import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const globalContext = createContext(null);

function GlobalState({children}) {
    
    const [quote, setQuote] =useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#0a0abb");
    const [radomNumber, setRandomNumber] = useState(0);
   // const navigate = useNavigate();

    async function fetchQuoteFromApi() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/quotes');
            const result = await apiResponse.json();
            if(result?.quotes){
                setQuote(result);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }

    };

    function randomColorGenerator(){
        const radomColor = "#" + Math.floor(Math.random()*16229875).toString(16);
        setColor(radomColor);
    };

    function randomNumberGenerator(){
        const randomNum = Math.floor(Math.random()*quote?.quotes?.length + 1);
        setRandomNumber(randomNum);
    };

    function NavigateToTwitterPage() {
        window.open('https://twitter.com','_blank');
    };

    function NavigateToTumblrPage() {
        window.open('https://www.tumblr.com/','_blank');
    };


    return <globalContext.Provider 
    value={{quote,
        loading,
        fetchQuoteFromApi,
        color,
        randomColorGenerator,
        radomNumber,
        randomNumberGenerator,
        NavigateToTwitterPage,
        NavigateToTumblrPage
    }}>
        {children}
    </globalContext.Provider>
}

export default GlobalState;