import React from "react";
import { Typography, Paper } from "@material-ui/core";
import styles from "@public/styles/content.module.css";
import Author from "./meta/Author";
import Date from "./meta/Date";
import Layout from "../Layout";
import TagButton from "./tag/TagButton";
import { getAuthor } from "../../lib/authors";
import { getTag } from "../../lib/tags";
import Comment from "./comment/CommentList";

type Props = {
	title: string;
	date: Date;
	slug: string;
	tags?: string[];
	author: any;
	description?: string;
	image: string;
	children: React.ReactNode;
};
export default function PostLayout({ title, date, slug, author, tags, description, image, children }: Props) {
	return (
		<Layout>
			<Paper elevation={0}>
				<article className="container">
					<header>
						<Typography gutterBottom variant="h3" component="h1">
							<br />
							{title}
						</Typography>
						<div className={"metadata"}>
							{tags ? (
								<ul className={"tag-list"}>
									{tags.map((it, i) => (
										<li key={i}>
											<TagButton tag={getTag(it)} />
										</li>
									))}
								</ul>
							) : (
								<div></div>
							)}
							<Author author={getAuthor(author)} />
							<Date date={date} />
						</div>
					</header>
					<div className={styles.content}>{children}</div>
					<br />
				</article>
			</Paper>
			<Comment />
			<style jsx>
				{`
					.container {
						width: 100%;
						margin: 0 auto;
						max-width: 22rem;
						box-sizing: border-box;
						z-index: 0;
					}
					.metadata div {
						display: inline-block;
						margin-right: 0.5rem;
					}
					article {
						flex: 1 0 auto;
						padding-bottom: 3rem; /* magic: who left 3rem <br> on article title? */
					}
					h1 {
						margin: 0 0 0.5rem;
						font-size: 2.25rem;
					}
					.tag-list {
						list-style: none;
						margin: 0;
						padding: 0 0 5px;
					}
					.tag-list li {
						display: inline-block;
						padding: 0 7px 7px 0;
					}
					@media (min-width: 769px) {
						.container {
							display: flex;
							flex-direction: column;
							max-width: 43rem;
						}
					}
				`}
			</style>
		</Layout>
	);
}
