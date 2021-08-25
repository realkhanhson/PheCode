import React from "react";
import Layout from "../components/Layout";
import { Button, IconButton, TextField, Typography, InputLabel, FormControl, Select, Paper } from "@material-ui/core";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function create() {
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
		<Layout>
			<Paper elevation={0}>
				<div className="container">
					<h1>Add Post</h1>
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
				</div>
				<div className="action">
					<Button color="secondary">Cancel</Button>
					<Button color="primary">Add</Button>
				</div>
			</Paper>

			<style jsx>
				{`
					.container {
						max-width: 43rem;
						width: 100%;
						margin: 0 auto;
						box-sizing: border-box;
						z-index: 0;
					}
					.metadata div {
						display: inline-block;
						margin-right: 0.5rem;
					}
					article {
						flex: 1 0 auto;
					}
					.action {
						display: flex;
						margin-left: auto;
						margin-right: 3.5rem;
						padding-bottom: 1rem;
					}
					h1 {
					}
					@media (min-width: 769px) {
						.container {
							display: flex;
							flex-direction: column;
						}
					}
				`}
			</style>
		</Layout>
	);
}
