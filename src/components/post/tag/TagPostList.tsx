import React from "react";
import { PostCMS } from "../../../lib/posts";
import { TagContent } from "../../../lib/tags";
import PostItem from "../PostItem";
import Pagination from "../../Pagination";
import { Container, Grid } from "@material-ui/core";

type Props = {
	posts: PostCMS[];
	tag: TagContent;
	pagination: {
		current: number;
		pages: number;
	};
};

export default function TagPostList({ posts, tag, pagination }: Props) {
	return (
		<>
			<Container maxWidth="lg">
				<h1>{tag.name}</h1>
				<Grid container alignItems="stretch" spacing={5}>
					{posts.map((it, i) => (
						<Grid item key={i} xs={12} md={6} lg={4}>
							<PostItem post={it} />
						</Grid>
					))}
				</Grid>
				<Pagination
					current={pagination.current}
					pages={pagination.pages}
					link={{
						href: () => "/tags/[[...slug]]",
						as: (page) => (page === 1 ? "/tags/" + tag.slug : `/tags/${tag.slug}/${page}`),
					}}
				/>
			</Container>
			<style jsx>
				{`
					h1 {
						font-size: 32px;
						margin: 0 0 2rem;
						padding: 0 0 0 20px;
						font-weight: 100;
					}
					@media (min-width: 769px) {
						h1 {
							font-size: 2rem;
						}
					}
				`}
			</style>
		</>
	);
}
