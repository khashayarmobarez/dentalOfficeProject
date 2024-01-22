import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//fonts
import './media/fonts/Shabnam.woff';
import './media/fonts/Vazir.woff';

const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrox1n3f1itc01w3r37bsk8a/master',   
    cache: new InMemoryCache(),
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);
