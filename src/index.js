import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/app/'; //вебпак по умолчанию ищет index js,а в него мы все импортировали
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(<React.StrictMode><App/></React.StrictMode>,document.getElementById('root'));
// ReactDOM.render(<React.StrictMode>{/*</>*/}</React.StrictMode>,document.getElementById('root'));



