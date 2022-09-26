import react, { useState } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';

import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
	const [contactData, setContactData] = useState(contactsJSON);

	// Masukkan Header dan lakukan map untuk Contact ke dalam div App
	// untuk membuat daftar kontak bisa menggunakan MUI list
	// https://mui.com/material-ui/react-list/#folder-list

	const addContact = (newContact) => {
		const contact = {
			name: newContact.name,
			phone: newContact.phone,
			email: newContact.email,
			photo: newContact.photo,
		};

		setContactData([...contactData, contact]);
	};
	// Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
	// Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

	return (
		<div className="App">
			<Header />
			<Grid container spacing={2}>
				<Grid xs={6} sx={{ margin: '6em 0' }}>
					<ContactForm propsAddContact={addContact} />
				</Grid>
				<Grid xs={6} sx={{ margin: '6em 0' }}>
					<Contact data={contactData} />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
