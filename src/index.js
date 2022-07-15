import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter as Router} from "react-router-dom";

import App from './App';
import './styles/main.scss';

ReactDOM.render(
<MoralisProvider appId={process.env.REACT_APP_MORALIS_APP_ID} serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}>
    <Router>
        <App />
    </Router>
</MoralisProvider>,

document.getElementById('root'));