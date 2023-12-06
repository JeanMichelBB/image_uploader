//src/components/LoadingInterface.js
import React from 'react';
import '../styles.css';

const LoadingInterface = () => {
    return (
        <div className="rectangle-container-loading">
            <p className="Uploading">Uploading...</p>
            <div class="progress-bar">
                <div class="progress-bar-fill"></div>
            </div>
        </div>
    );
};

export default LoadingInterface;
