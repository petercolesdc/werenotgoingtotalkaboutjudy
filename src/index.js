import React from 'react';
import ReactDOM from 'react-dom';
import './theme/css/fonts.css'
import './theme/css/style.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const commands = [
    {
      emoji: '☕️ 🍰',
      name: 'cooper'
    }
];

commands.forEach(
	(
    {
      name, emoji
    }
  ) => window.console[name] = (...args) => console.log(emoji + '  ' + args.join(', '))
);

console.cooper("I am the FBI");

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
