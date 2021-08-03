import { Typography, Paper } from "@material-ui/core";

import Comment from "@components/post/comment/Comment";
import AddCommentBox from "@components/post/comment/AddCommentBox";

export default function CommentList() {
	const styles = {
		container: {
			display: "flex",
			flexFlow: "column",
			gap: "24px",
			padding: "32px",
			// maxWidth: "calc(0.6 * 1920px)",
			maxWidth: "720px",
			margin: "24px auto 0",
			backgroundColor: "#fafafa",
			border: "1px solid #c0c0c0",
			borderRadius: "16px",
		},
		textbtnShowMore: {
			color: "#a0a0a0",
			fontWeight: 700
		}
	}
	return (

			<div style={styles.container}>

				<AddCommentBox author="OP" />

				<Comment
					author="Khanh Son"
					content={`
					This is a false fact. Even when you enjoy it, sometimes it can get frustrating. Some people have
					trouble focusing. And it has nothing to do with "what they enjoy". Sometimes when programming
					stresses you out, you should take a break.
				`}
				/>

				<Comment
					author="Thien Bui"
					content={`
					You still wanna make sure if you're unfocused by laziness or because you hate it
				`}
				/>

				<Comment
					author="Nam Quoc"
					content={`
					Thank you so much for sharing all this. I'm pretty sure that, I'll gain efficiency by following
					the promodoro technique. I used to stay watching videos and taking note for about 3h every
					night. And sometime, I wanted to give up because I felt like I was not really understanding, as
					if I was just keeping a written version of what I was watching.
				`}
				/>

				<div style={styles.textbtnShowMore}>
					Show more comment&hellip;
				</div>
			</div>
	);
}
