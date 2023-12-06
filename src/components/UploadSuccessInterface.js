import React, { useState, useEffect } from 'react';
import '../styles.css';

const UploadSuccessInterface = ({ uploadedFile }) => {
  const [imageLink, setImageLink] = useState('');

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(imageLink).then(
      () => {
        console.log('Link copied to clipboard');
      },
      (error) => {
        console.error('Unable to copy link to clipboard', error);
      }
    );
  };

  const generateImageLink = () => {
    // Generate a URL for the uploaded image
    const imageUrl = URL.createObjectURL(uploadedFile);
    setImageLink(imageUrl);
  };

  useEffect(() => {
    generateImageLink();
  }, [uploadedFile]);

  return (
    <div className="rectangle-container-upload">
      <h2 className="title">&#9989;</h2>
      <p className="subtitle">Uploaded Successfully!</p>
      <div className="square-container-uploaded" type="file" accept="image/*">
        {/* Use the generated image link in the src attribute */}
        <img src={imageLink} alt="upload" className='uploaded-image' />
      </div>
      <div className="copyContainer">
        <div className="inputContainer">
          <input
            className="copyLink"
            value={imageLink}
            readOnly
          />
        </div>
        <button type="button" className="copyButton" onClick={copyLinkToClipboard}>
          Copy Link
        </button>
      </div>

      <footer>
        <p className="attribution">
          Created by{' '}
          <a href="https://jeanmichelbb.github.io/" target="_blank" rel="noopener noreferrer">
            Jean-Michel
          </a>{' '}
          - devChallenges.io
        </p>
      </footer>
    </div>
  );
};

export default UploadSuccessInterface;
