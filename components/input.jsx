import React from 'react';
import './styles/input.css';

const Input = (props) => (
	<input type={props.type} className="input-style" onChange={props.handleChange}/>
);

export default Input;
