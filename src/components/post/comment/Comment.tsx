import Avatar from "@material-ui/core/Avatar";

const Comment = ({author, content}) => {
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
		},
		authorName: {
			fontWeight: 700,
		},
	}

	return (
		<div style={styles.container}>
			<Avatar>XX</Avatar>
			<div style={styles.textContainer}>
				<div style={styles.authorName}>{author}</div>
				<div>{content}</div>
			</div>
		</div>
	)
}

export default Comment
