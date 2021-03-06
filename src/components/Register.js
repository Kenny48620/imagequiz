import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import local_temp_store from '../data_access_layer/local_temporarily_storage';

const Register = () =>{
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const nevigate = useNavigate();

	let onNameChanged = (e)=>{
		setName(e.target.value);
	}


	let onEmailChanged = (e)=>{
		setEmail(e.target.value);
	}


	let onPasswordChanged = (e)=>{
		 setPassword(e.target.value);
	}

    let onSubmitHandler = (e) => {
         local_temp_store.customers.push({name: name, password: password, email: email, });
         nevigate('/login');
    }


	return (
	<Form onSubmit={onSubmitHandler}>
		<Form.Group className="mb-3" controlId="formBasicPassword">
	    	<Form.Label>Name</Form.Label>
	    	<Form.Control type="text" placeholder="Enter name" value={name} onChange={onNameChanged}/>
		</Form.Group>

	  	<Form.Group className="mb-3" controlId="formBasicEmail">
	    	<Form.Label>Email address</Form.Label>
	    	<Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChanged} />
	  	</Form.Group>

		<Form.Group className="mb-3" controlId="formBasicPassword">
	    	<Form.Label>Password</Form.Label>
	    	<Form.Control type="password" placeholder="Enter password" value={password} onChange={onPasswordChanged}/>
		</Form.Group>

	  	<Button variant="primary" type="submit">
	    	Submit
	  	</Button>
	</Form>
	);
}


export default Register;