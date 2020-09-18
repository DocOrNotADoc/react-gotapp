import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));



// все стили можно фигачить импортом из одного шаблона (пока что)
// RandomCharBlock = CharDetails
// CharDetails = RandomCharStatesList
// CharDetailsItem = RandomCharState