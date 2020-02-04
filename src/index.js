import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import { StyledAlert } from "./commons/StyledComponents";
import { Check } from 'react-feather';

const options = {
  position: positions.MIDDLE,
  timeout: 2500,
  type: "success",
  transition: "scale"
};

const AlertTemplate = ({ options, message, close }) => (
  <StyledAlert onClick={close}>
    <Check size={48} style={{ marginBottom: "20px"}}/>
    {message}
  </StyledAlert>
)

ReactDOM.render(<AlertProvider template={AlertTemplate} {...options}><App /></AlertProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
