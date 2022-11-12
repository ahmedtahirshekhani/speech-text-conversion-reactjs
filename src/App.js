import logo from './logo.svg';
import './App.css';
import {startRecording, stopRecording, onRecordPress} from './services/index.js';
import {useState, useEffect} from 'react';
import Process from 'process';
function App() {
  useEffect(() => {
    window.process = Process;
  }, []);
  return (
    <>
    <div className="App">
      <div id = "mainContainer" className='row'>
    
    <div className='col-6' >
    <h1>Speech to Text</h1>
      <select id="inputLanguageList">
          <option value = "nan">Select the language you are going to speak</option>
          <option value = "zh-CN">Chinese (simplified)</option>
          <option value = "en-AU">English (Australian)</option>
          <option value = "en-GB">English (British)</option>
          <option value = "en-US">English (US)</option>
          <option value = "fr-FR">French</option>
          <option value = "fr-CA">French (Canadian)</option>
          <option value = "de-DE">German</option>
          <option value = "it-IT">Italian</option>
          <option value = "ja-JP">Japanese</option>
          <option value = "ko-KR">Korean</option>
          <option value = "pt-BR">Portugese (Brazilian)</option>
          <option value = "es-US">Spanish (US)</option>
      </select>
      <div id = "recordButtonContainer">
          <button id = "record" className = "recordInactive" onClick = {(e)=>onRecordPress(e)}>◉</button>
      </div>
    </div>
    <div className='col-6'>
    <div id = "outputSection">
        <div id = "headerText"><h2>Transcription</h2></div>
        <div id = "transcribedText"></div>
    </div>
    </div>
</div>
    </div>
    
    <div className="App">
      <div id = "mainContainer" className='row'>
    
    <div className='col-6' >
    <h1>Text to Speech</h1>
    
      <div id = "recordButtonContainer">
          <button id = "record" className = "recordInactive" onClick = {(e)=>onRecordPress(e)}>◉</button>
      </div>
    </div>
    <div className='col-6'>
    <div id = "outputSection">
        <div id = "headerText"><h2>Transcription</h2></div>
        <div id = "transcribedText"></div>
    </div>
    </div>
</div>
    </div>
    </>
  );
}

export default App;
