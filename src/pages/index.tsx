import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import PostList from "../components/post/PostList";
import config from "../lib/config";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";

type Props = {
	posts: PostContent[];
	tags: TagContent[];
	pagination: {
		current: number;
		pages: number;
	};
};
export default function Index({ posts, tags, pagination }: Props) {
	const url = "/";
	const title = "";
	return (
		<Layout>
			<PostList posts={posts} tags={tags} pagination={pagination} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = listPostContent(1, config.posts_per_page);
	const tags = listTags();
	const pagination = {
		current: 1,
		pages: Math.ceil(countPosts() / config.posts_per_page),
	};
	return {
		props: {
			posts,
			tags,
			pagination,
		},
	};
};
