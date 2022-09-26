// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
	return (
		<>
			<Typography sx={{ margin: '0.5em 0' }} variant="h2">
				Call a Friend
			</Typography>
			<Divider>
				<h4>Your friendly contact app</h4>
			</Divider>
		</>
	);
};

export default Header;
