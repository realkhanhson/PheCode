import InputBase from "@material-ui/core/InputBase";
import Avatar from "@material-ui/core/Avatar";

const AddCommentBox = ({ author }) => {
	const styles = {
		container: {
			display: "flex",
			flexFlow: "row",
			gap: "16px",
			width: "100%",
		},
		inputTextBox: {
			borderRadius: "16px",
			border: "1px solid #a0a0a0",
			background: "none",
			padding: "8px 16px",
			width: "100%",
		},
	};

	return (
		<div style={styles.container}>
			<Avatar>{author}</Avatar>
			<InputBase style={styles.inputTextBox} placeholder="Write your comment…" />
		</div>
	);
};

export default AddCommentBox;
