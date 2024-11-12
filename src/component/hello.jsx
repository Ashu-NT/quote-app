import React, { useContext, useEffect } from 'react'
import { globalContext } from './content'
import Button from '@mui/material/Button'
import TwitterIcon from '@mui/icons-material/Twitter';
import {} from 'react-icons'
import { FaTumblr } from 'react-icons/fa';
import { Tooltip } from '@mui/material';

function HelloTailWind() {

    const {quote,
        loading,
        color,
        fetchQuoteFromApi,
        randomColorGenerator,
        radomNumber,
        randomNumberGenerator,
        NavigateToTwitterPage,
        NavigateToTumblrPage
    } = useContext(globalContext);

    useEffect(()=>{
        fetchQuoteFromApi();
        
    },[])

    console.log("COLOR =",color,radomNumber,quote, "LOADING =",loading);

    function handleNextQuote() {
        randomNumberGenerator();
        randomColorGenerator();
    }

  return (
    <div className='bg-white mb-5 py-8 px-8 rounded-md mx-auto max-w-xl'>
        <div className='font-serif text-xl' style={{color:`${color}`}}>
            {
                loading ? <h3>Loading Data, Please Wait!!!</h3> :
                < >
                    <p id="text" className='text-center font-semibold mb-4'>{quote?.quotes[radomNumber]?.quote}</p>
                    <p id="author" className='text-right font-normal mb-6 italic'>- {quote?.quotes[radomNumber]?.author}</p>
                </>
            }
        </div>
       
        <div  className='grid grid-cols-5'>
            <div className='col-span-4 '> 
            <Tooltip title="Tweet this quote">
                    <button onClick={NavigateToTwitterPage} className='ml-8 mr-6 p-2 text-2xl'>
                        <TwitterIcon color='primary'/>
                    </button> 
            </Tooltip>
            
            <Tooltip title="Post this quote on tumblr">
                    <button onClick={NavigateToTumblrPage} className='p-3 text-2xl mr-5'>
                        <FaTumblr/>
                    </button>   
            </Tooltip>
            <a id="tweet-quote" href='https://twitter.com/intent/tweet' target='_blanck' rel='Twitter link'>link</a>
            </div>
            <div>
                <button id="new-quote" style={{background:`${color}`,color:'white', border:"none", padding:"8px", borderRadius:"6px"}} onClick={handleNextQuote} >
                    New quote
                </button>
            </div>  
        </div>
    </div>
  )
}

export default HelloTailWind