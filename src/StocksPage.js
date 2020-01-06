import React from 'react';
import styled from 'styled-components';
import Graph from './Graph';
import Tweets from './Tweets';

const Wrapper = styled.div`
    display: grid;

    grid-template-areas:
        "HeadingArea HeadingArea";
        "GraphArea TweetsArea";

    grid-template-columns: 60% 40%;
    grid-template-rows: auto 600px;

    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;

const HeadingArea = styled.div`
    grid-area: HeadingArea;
    text-align: center;
`;

const GraphArea = styled(Graph)`
    grid-area: GraphArea;
`;

const TweetsArea = styled(Tweets)`
    grid-area: TweetsArea;
`;

const StocksPage = () => (
    <Wrapper>
        <HeadingArea>
            <h1>Internet of Stocks</h1>
        </HeadingArea>
        <GraphArea />
        <TweetsArea />
    </Wrapper>
);

export default StocksPage;
