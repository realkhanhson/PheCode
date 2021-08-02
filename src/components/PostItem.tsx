import Link from "next/link";
import { PostContent } from "../lib/posts";
import Date from "./Date";
import { parseISO } from "date-fns";
import { getAuthor } from "../lib/authors";
import Author from "./Author";
import Image from "material-ui-image";
import { Card, CardContent, CardMedia, CardActions, Typography, CardActionArea } from "@material-ui/core";

type Props = {
	post: PostContent;
};

export default function PostItem({ post }: Props) {
	return (
		<Link href={"/" + post.slug}>
			<Card className="MuiPostCard--normal">
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
			</Card>
		</Link>
	);
}
