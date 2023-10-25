import './App.css';
import LoginButton from './components/login';
import { useEffect } from 'react';
import {gapi} from 'gapi-script'

const clientId = "886247322127-bnqtlmgjhh5aga0mohkmfolvevhi09op.apps.googleusercontent.com"

function App() {

  useEffect(() =>{
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  });


  return (
    <div className="App">
      <LoginButton/>
    </div>
  );
}

export default App;
