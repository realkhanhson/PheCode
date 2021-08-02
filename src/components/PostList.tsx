import React from "react";
import { Container, Grid } from "@material-ui/core";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

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
				<h1>All</h1>
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
						href: (page) => (page === 1 ? "/" : "/page/[page]"),
						as: (page) => (page === 1 ? null : "/page/" + page),
					}}
				/>
			</Container>
			<style jsx>{`
				h1 {
					font-size: 32px;
					margin: 0 0 2rem;
					padding: 0 0 0 20px;
					font-weight: 100;
				}
				@media (min-width: 769px) {
				}
			`}</style>
		</>
	);
}
