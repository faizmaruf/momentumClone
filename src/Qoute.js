import { React, useEffect } from 'react'
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedoIcon from '@mui/icons-material/Redo';
import { useState } from 'react';
// import proxy from 'http-proxy-middleware'
// app.use('/api/**', proxy({ target: "http://localhost:3000" }));





// Get Quote Tweets by Tweet ID
// https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets-lookup/quick-start

// const needle = require('needle');

// const tweetId = 20;
// const url = `https://api.twitter.com/2/tweets/${tweetId}/quote_tweets`;

// // The code below sets the bearer token from your environment variables
// // To set environment variables on macOS or Linux, run the export command below from the terminal:
// // export BEARER_TOKEN='YOUR-TOKEN'
// const bearerToken = process.env.BEARER_TOKEN;

// // this is the ID for @TwitterDev
// const getQuoteTweets = async () => {
//     let quoteTweets = [];
//     let params = {
//         "max_results": 100,
//         "tweet.fields": "created_at"
//     }

//     const options = {
//         headers: {
//             "User-Agent": "v2QuoteTweetsJS",
//             "authorization": `Bearer ${bearerToken}`
//         }
//     }

//     let hasNextPage = true;
//     let nextToken = null;
//     console.log("Retrieving quote Tweets...");
//     while (hasNextPage) {
//         let resp = await getPage(params, options, nextToken);
//         if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
//             if (resp.data) {
//                 quoteTweets.push.apply(quoteTweets, resp.data);
//             }
//             if (resp.meta.next_token) {
//                 nextToken = resp.meta.next_token;
//             } else {
//                 hasNextPage = false;
//             }
//         } else {
//             hasNextPage = false;
//         }
//     }

//     console.dir(quoteTweets, {
//         depth: null
//     });

//     console.log(`Got ${quoteTweets.length} quote Tweets for Tweet ID ${tweetId}!`);

// }

// const getPage = async (params, options, nextToken) => {
//     if (nextToken) {
//         params.pagination_token = nextToken;
//     }

//     try {
//         const resp = await needle('get', url, params, options);

//         if (resp.statusCode != 200) {
//             console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
//             return;
//         }
//         return resp.body;
//     } catch (err) {
//         throw new Error(`Request failed: ${err}`);
//     }
// }

// getQuoteTweets();

const getQoute = () => {
    const bearerToken = "AAAAAAAAAAAAAAAAAAAAAJsdlgEAAAAA969Umh8DriWHWubi6YRDAsPOFvY%3DMiJ2XfbTzLdlLGSDC8uhagom3LS5FIrdI2O2RK9pa8BrzFjBZH";
    const headers = {
        Authorization: `Bearer ${bearerToken}`,
        
    };
    // const config = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': '*',
    //     'Access-Control-Allow-Headers': '*',
    // }

    axios.get('https://api.twitter.com/2/tweets/300/quote_tweets?expansions=author_id&user.fields=created_at', { headers })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
}

export const Qoute = (props) => {
    const [state, setState] = useState({
        isHoverData: true,
    })

    useEffect(() => {
        // console.log('testing amat')
        getQoute()//
        // fetch('https://api.twitter.com/2/tweets/300/quote_tweets?expansions=author_id&user.fields=created_at')
        //     .then(response => response.json())

    }, []);

    // console.log('testing hover', state.isHoverData)
    return (
        <div className='flex w-full flex-col'>
            <span
                className='text-white m-auto text-lg text-center opacity-90'
                onMouseOver={() => {
                    setState(prevState => ({
                        isHoverData: !prevState.isHoverData
                    }));
                }}
                onMouseOut={() => {
                    setState(prevState => ({
                        isHoverData: !prevState.isHoverData
                    }));
                }}
            >
                if you want go to fast go alone, if you want go to far go to together
            </span>
            <div className={`m-auto ${state.isHoverData ? "hidden" : ""}`}>
                <span className='text-white text-sm text-center opacity-90'>
                    Faiz Alauddin Ma'ruf
                    <FavoriteBorderIcon
                        style={{ color: 'white', opacity: '0.9', fontSize: '0.97rem', marginLeft: '0.5rem' }}
                    />
                    <RedoIcon
                        style={{ color: 'white', opacity: '0.9', fontSize: '1rem', marginLeft: '0.15rem' }}
                    />
                    <TwitterIcon
                        style={{ color: 'white', opacity: '0.9', fontSize: '0.97rem', marginLeft: '0.2rem' }}
                    />
                </span>
            </div>
        </div>
    )
}



export default Qoute


