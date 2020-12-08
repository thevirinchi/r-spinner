import Spinner from './components/Spinner'
import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';

function App() {

    const [loading, toggleLoading] = useState(false)

    const handleLoading = () => {
        toggleLoading(true)
        setTimeout(function(){
            toggleLoading(false)
        }, 3000)
    }

    return (
        <div className="App">
            <Spinner loadingState={loading}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a className="App-link" target="_blank" rel="noopener noreferrer" onClick={handleLoading}> Start Loading </a>
            </header>
        </div>
    );
}

export default App;
