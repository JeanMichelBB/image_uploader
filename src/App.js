//src/App.js
import React, { useState } from 'react';
import './styles.css';
import ImageUploader from './components/ImageUploader';
import LoadingInterface from './components/LoadingInterface';
import UploadSuccessInterface from './components/UploadSuccessInterface';

const App = () => {
  const [currentInterface, setCurrentInterface] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleNext = (file) => {
    setCurrentInterface(2); 
    setTimeout(() => {
      setUploadedFile(file);
      setCurrentInterface(3); 
    }, 2000); 
  };

  const renderInterface = () => {
    switch (currentInterface) {
      case 1:
        return <ImageUploader onNext={handleNext} />;
      case 2:
        return <LoadingInterface />;
      case 3:
        return <UploadSuccessInterface uploadedFile={uploadedFile} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderInterface()}
    </div>
  );
};

export default App;
