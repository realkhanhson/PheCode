import Link from "next/link";
import { PostContent } from "../../lib/posts";
import Date from "./meta/Date";
import { parseISO } from "date-fns";
import { getAuthor } from "../../lib/authors";
import Author from "./meta/Author";
import { Card, CardContent, CardMedia, CardActions, Typography, CardActionArea } from "@material-ui/core";

import InfoBar from "@components/post/meta/InfoBar";

type Props = {
	post: PostContent;
};

export default function PostItem({ post }: Props) {
	const styles = {
		container: {
			display: "flex",
			flexFlow: "column",
			gap: "16px",
			border: "1px solid #c0c0c0",
			backgroundColor: "#ffffff",
			padding: "32px",
			borderRadius: "16px",
			cursor: "pointer",
			"&:hover": {
				boxShadow: "0 6px 20px 1px rgba(0, 0, 0, 0.12)",
			},
		},

		title: {
			fontWeight: 500,
			height: "64px",
			fontSize: "32px",
		},

		contentPreview: {
			textAlign: "justify" as const, // https://stackoverflow.com/a/63440317
		},

		author: {
			paddingTop: "20px",
		},
	};

	return (
		<Link href={"/" + post.slug} passHref>
			{/* FIXME no ripple effect */}
			<div style={styles.container}>
				<div style={styles.title}>{post.title}</div>

				<Typography variant="body2" color="textSecondary" component="p">
					<div style={styles.author}>
						<Author author={getAuthor(post.author)} />
					</div>
					<br />
					<Date date={parseISO(post.date)} />
				</Typography>
				<div>
					According to Wikipedia, “a software development process is the process of dividing software
					development”.
				</div>
				<InfoBar likes={"69/72"} comments={"42"} time={"Dec 31"} />
			</div>
		</Link>
	);
}
