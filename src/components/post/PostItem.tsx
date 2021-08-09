import Link from "next/link";
import { PostContent, PostCMS } from "../../lib/posts";
import Date from "./meta/Date";
import { parseISO } from "date-fns";
import { getAuthor } from "../../lib/authors";
import Author from "./meta/Author";
import { Card, CardContent, CardMedia, CardActions, Typography, CardActionArea } from "@material-ui/core";

import InfoBar from "@components/post/meta/InfoBar";

type Props = {
	post: PostCMS;
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
			justifyContent: "center",
		},

		infobar: {},
	};

	return (
		<Link href={"/" + post.slug}>
			{/* FIXME no ripple effect */}
			<div style={styles.container}>
				<div style={styles.title}>{post.title}</div>
				<Author author={post.author} />

				{/* TODO tags */}

				{/* TODO content preview */}
				<div style={styles.contentPreview}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin, erat ut scelerisque
					tempor, nisi lectus vestibulum erat, nec volutpat dolor lacus vitae ante. Nam vel orci eros.
				</div>

				<InfoBar likes={"69/72"} comments={"42"} time={"Dec 31"} />
			</div>

			{/* <Card className="MuiPostCard--normal">
				<CardActionArea>
					<CardMedia>
						<Image src={post.image} style={{ height: "250px", padding: 0 }} />
					</CardMedia>
					<CardContent>
						<Typography gutterBottom variant="h6" component="h2">
							{post.title}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Typography variant="body2" color="textSecondary" component="p">
						<Date date={parseISO(post.date)} />
						&nbsp;&nbsp;
						<Author author={getAuthor(post.author)} />
					</Typography>
				</CardActions>
			</Card> */}
		</Link>
	);
}
