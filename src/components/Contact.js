// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
	// Contact berisi foto, nama, telepon, dan email
	return (
		<>
			{data.map((contact) => {
				return (
					<List
						sx={{
							width: '100%',
							maxWidth: 700,
							bgcolor: 'background.paper',
						}}
					>
						<ListItem alignItems="flex-start">
							<ListItemAvatar sx={{ width: 130 }}>
								<Avatar
									alt="Remy Sharp"
									sx={{ width: 100, height: 100 }}
									src={contact.photo}
								/>
							</ListItemAvatar>
							<ListItemText
								sx={{ margin: '1.5em 0' }}
								primary={contact.name}
								secondary={
									<React.Fragment>
										<Typography variant="body2" color="text.secondary">
											{contact.phone}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{contact.email}
										</Typography>
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant="middle" />
					</List>
				);
			})}
		</>
	);
};

export default Contact;
