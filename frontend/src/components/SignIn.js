import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const router = useHistory();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { data } = await axios.post('http://localhost:3000/admin/signin', {
			email,
			password,
		});
		console.log(data);
		if (data.error) return alert(data.message);

		await localStorage.setItem('@auth_token', JSON.stringify(data.payload));
		axios.defaults.headers.common['Authorization'] = `Bearer ${data.payload}`;

		router.push('/');
	};
	return (
		<div className='container'>
			<div className='row mt-5'>
				<div className='col-md-6 offset-3'>
					<div className='card '>
						<div className='card-header'>Admin Signin</div>
						<form onSubmit={handleSubmit} className='card-body'>
							<div class='form-group'>
								<label for='exampleInputEmail1'>Email address</label>
								<input
									type='email'
									class='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
									placeholder='Enter email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<small id='emailHelp' class='form-text text-muted'>
									We'll never share your email with anyone else.
								</small>
							</div>
							<div class='form-group'>
								<label for='exampleInputPassword1'>Password</label>
								<input
									type='password'
									class='form-control'
									id='exampleInputPassword1'
									placeholder='Password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div class='form-group form-check'>
								<input
									type='checkbox'
									class='form-check-input'
									id='exampleCheck1'
								/>
								<label class='form-check-label' for='exampleCheck1'>
									Check me out
								</label>
							</div>
							<button type='submit' class='btn btn-primary'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;