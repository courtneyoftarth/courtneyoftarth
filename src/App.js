import React from 'react';
import StocksPage from './StocksPage';

function App() {

  if (!window.location.href.includes('access')) {
    window.location.href = 'https://api.stocktwits.com/api/2/oauth/authorize/?' +
      'client_id=a15329c01d369560' +
      '&response_type=token' + 
      '&redirect_uri=https://courtneyoftarth.github.io/stocks' + 
      '&scope=read,watch_lists,publish_messages,publish_watch_lists,follow_users,follow_stocks';
  }
    
  return <StocksPage />;
}

export default App;
