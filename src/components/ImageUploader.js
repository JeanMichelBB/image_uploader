//src/components/ImageUploader.js
import React, { useState } from 'react';
import UploadImage from '../image.svg';
import '../styles.css';

const ImageUploader = ({ onNext }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Perform any necessary actions immediately when the file is selected
    if (file) {
      onNext(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);

    if (file) {
      onNext(file);
    }
  };

  return (
    <div className="rectangle-container" onDragOver={handleDragOver} onDrop={handleDrop}>
      <h2 className="title">Uploading your image</h2>
      <p className="subtitle">File should be Jpeg, Png,...</p>
      <label className="square-container">
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <div className="square">
          <img src={UploadImage} alt="upload" className='upload-image' />
        </div>
        <p className="text">Drag & Drop your image here</p>
      </label>
      <p className="or">Or</p>
      <button
        className="button"
        onClick={() => document.getElementById('fileInput').click()}
      >
        Choose a file
      </button>
    </div>
  );
};

export default ImageUploader;
