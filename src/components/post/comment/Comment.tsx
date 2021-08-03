import Avatar from "@material-ui/core/Avatar";

const Comment = ({ author, image, content }) => {
	const styles = {
		container: {
			display: "flex",
			flexFlow: "row",
			gap: "16px",
		},
		textContainer: {
			display: "flex",
			flexFlow: "column",
			backgroundColor: "#e8e8e8",
			borderRadius: 16,
			padding: "8px 16px",
			width: "632px",
		},
		authorName: {
			fontWeight: 700,
		},
	};

	return (
		<div style={styles.container}>
			<Avatar>{image}</Avatar>
			<div style={styles.textContainer}>
				<div style={styles.authorName}>{author}</div>
				<div>{content}</div>
			</div>
		</div>
	);
};

export default Comment;
