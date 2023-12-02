// App.js
import React from 'react';
import MyComponent from './components/MyComponent';
import './App.css';

const App = () => {
  return (
    <div class="rectangle-container">
      <input style={{ display: 'none' }} type="file" accept="image/*" />
      <br />
      <h2 class="title">Uploading your image</h2>
      <br />
      <p class="subtitle">File should be Jpeg, Png,...</p>
      <div  className="square-container" type="file" accept="image/*" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p class="Or">Or</p>
      <br />
      <button class="button">Choose a file</button>
      <br />

    </div>

  );
};

export default App;
