// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = ({ propsAddContact }) => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [photo, setPhoto] = useState('');

	const nameOnChangeHandler = (event) => {
		setName(event.target.value);
	};
	const phoneOnChangeHandler = (event) => {
		setPhone(event.target.value);
	};
	const emailOnChangeHandler = (event) => {
		setEmail(event.target.value);
	};
	const photoOnChangeHandler = (event) => {
		setPhoto(event.target.value);
	};

	const formOnSubmitHandler = (event) => {
		event.preventDefault();

		const formContact = {
			name: name,
			phone: phone,
			email: email,
			photo: photo,
		};

		propsAddContact(formContact);

		setName('');
		setPhone('');
		setEmail('');
		setPhoto('');
	};

	// Form berisi name, phone, email, dan photo url
	// Buatlah state newContact berupa objek sesuai dengan data yang ada

	return (
		<>
			<Card
				sx={{ maxWidth: 600, margin: '0 auto', backgroundColor: '#f7f1eb' }}
			>
				<form action="" onSubmit={formOnSubmitHandler}>
					<CardContent sx={{ padding: '1em' }}>
						<TextField
							sx={{ width: '100%', margin: '0.5em 0' }}
							id="filled-basic"
							label="Name *"
							variant="filled"
							value={name}
							onChange={nameOnChangeHandler}
						/>
						<TextField
							sx={{ width: '100%', margin: '0.5em 0' }}
							id="filled-basic"
							label="Phone *"
							variant="filled"
							value={phone}
							onChange={phoneOnChangeHandler}
						/>
						<TextField
							sx={{ width: '100%', margin: '0.5em 0' }}
							id="filled-basic"
							label="Email *"
							variant="filled"
							value={email}
							onChange={emailOnChangeHandler}
						/>
						<TextField
							sx={{ width: '100%', margin: '0.5em 0' }}
							id="filled-basic"
							label="Photo URL *"
							variant="filled"
							value={photo}
							onChange={photoOnChangeHandler}
						/>
					</CardContent>
					<CardActions>
						<Button type="submit" color="success">
							ADD CONTACT
						</Button>
					</CardActions>
				</form>
			</Card>
		</>
	);
};

export default ContactForm;
