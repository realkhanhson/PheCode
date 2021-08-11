import React from "react";
import {
	Button,
	IconButton,
	TextField,
	Typography,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
	InputLabel,
	FormControl,
	Select,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

export default function CreatePost() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const editorRef: any = React.useRef();
	const { CKEditor, ClassicEditor }: any = editorRef.current || {};

	React.useEffect(() => {
		editorRef.current = {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
			ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
		};
	}, []);

	const [state, setState] = React.useState({
		age: "",
		name: "hai",
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	return (
		<>
			<IconButton onClick={handleClickOpen}>
				<CreateIcon />
			</IconButton>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Add Post</DialogTitle>
				<DialogContent>
					<Typography>Title</Typography>
					<TextField autoFocus margin="dense" id="name" fullWidth />
					<br />
					<br />
					<Typography>Slug</Typography>
					<TextField autoFocus margin="dense" id="name" fullWidth />
					<br />
					<br />
					<Typography>Date</Typography>
					<form noValidate>
						<TextField
							id="datetime-local"
							type="datetime-local"
							defaultValue="2021-08-11T11:40"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</form>
					<br />
					<FormControl variant="outlined">
						<InputLabel htmlFor="outlined-age-native-simple">Add Tag</InputLabel>
						<Select
							native
							value={state.age}
							onChange={handleChange}
							label="Tag"
							inputProps={{
								name: "age",
								id: "outlined-age-native-simple",
							}}>
							<option aria-label="None" />
							<option value={10}>Reactjs</option>
							<option value={20}>Netlify</option>
							<option value={30}>Material-UI</option>
							<option value={40}>Python</option>
							<option value={50}>Javascript</option>
							<option value={60}>Tailwindcss</option>
						</Select>
					</FormControl>
					<br />
					<br />
					<Typography>Content</Typography>
					<CKEditor
						editor={ClassicEditor}
						data=""
						onReady={(editor) => {
							console.log("Editor is ready to use!", editor);
						}}
						onChange={(event, editor) => {
							const data = editor.getData();
							console.log({ event, editor, data });
						}}
						onBlur={(event, editor) => {
							console.log("Blur.", editor);
						}}
						onFocus={(event, editor) => {
							console.log("Focus.", editor);
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="secondary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
