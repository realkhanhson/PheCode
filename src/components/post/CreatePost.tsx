import React from "react";
import {
	Button,
	IconButton,
	TextField,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

export default function CreatePost() {
	const styles = {
		container: {
			width: "500px",
		},
	};

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={handleClickOpen}>
				<CreateIcon />
			</IconButton>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<div style={styles.container}>
					<DialogTitle id="form-dialog-title">Create Post</DialogTitle>
					<DialogContent>
						<DialogContentText>Have fun</DialogContentText>
						<TextField autoFocus margin="dense" id="name" label="Title" fullWidth />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="secondary">
							Cancel
						</Button>
						<Button onClick={handleClose} color="primary">
							Create
						</Button>
					</DialogActions>
				</div>
			</Dialog>
		</>
	);
}
