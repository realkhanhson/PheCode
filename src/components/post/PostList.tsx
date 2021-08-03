import React from "react";
import { Container, Grid } from "@material-ui/core";
import { PostContent } from "@lib/posts";
import PostItem from "@components/post/PostItem";
import Pagination from "../Pagination";
import { TagContent } from "../../lib/tags";

import LinkedHeader from "@components/home/LinkedHeader";
import HomeSection from "@components/home/HomeSection";

type Props = {
	posts: PostContent[];
	tags: TagContent[];
	pagination: {
		current: number;
		pages: number;
	};
};

export default function PostList({ posts, tags, pagination }: Props) {
	return (
		<>
			<Container maxWidth="lg">
				<HomeSection>
					<LinkedHeader title={"For You"} href={"#"} />
					<Grid container alignItems="stretch" spacing={4}>
						{posts.map((it, i) => (
							<Grid item key={i} xs={12} md={6} lg={6}>
								<PostItem post={it} />
							</Grid>
						))}
					</Grid>
				</HomeSection>
			</Container>
		</>
	);
}
