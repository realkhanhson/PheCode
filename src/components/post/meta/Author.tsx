import { AuthorContent, AuthorCMS } from "../../../lib/authors";

type Props = {
	author: AuthorContent;
};

const Author = ({ author }: Props) => {
	const styles = {
		container: {
			display: "flex",
			flexFlow: "row",
			alignItems: "center",
			gap: "16px",
			maxHeight: "min-content",
		},
		authorAvatar: {},
		authorName: {
			fontSize: "20px",
			fontWeight: 800,
			height: "min-content",
		},
	};

	return (
		<div style={styles.container}>
			<svg style={styles.authorAvatar} height="32" width="32">
				<circle cx="16" cy="16" r="16" fill="#cccccc" />
			</svg>
			{/* FIXME */}
			<span style={styles.authorName}>{author.name}</span>
		</div>
	);
};

export default Author;
