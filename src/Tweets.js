import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const TweetsGrid = styled.table`
    max-width: 500px;
`;

const TweetMessage = styled.td`
    padding: 20px;
`;

const TweetLikes = styled.td`
    width: 100px;
`;

const TweetRow = styled.tr`

`;

const Tweets = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api.stocktwits.com/api/2/streams/symbols.json', {
                params: {
                    access_token: window.location.hash.split('=')[1],
                    symbols: 'AAPL,MSFT'
                }
            });
            console.log(response.data.messages);
            setTweets(response.data.messages || []);
        })();
    }, []);

    return (
        <div>
            <h2>Tweets about stocks you're tracking</h2>
            <TweetsGrid>
                {tweets.map(({ body, likes }) => (
                    <TweetRow>
                        <TweetMessage>🗨{body}</TweetMessage>
                        <TweetLikes>❤ {likes && likes.total || 0}</TweetLikes>
                    </TweetRow>
                ))}
            </TweetsGrid>
            
        </div>
    );
};

export default Tweets;