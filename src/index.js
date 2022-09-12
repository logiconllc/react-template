import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SampleComponent from './Components/SampleComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SampleComponent repoName="React Sample Repo" />
);