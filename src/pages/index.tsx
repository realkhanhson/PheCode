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
	return (
		<Layout>
			<PostList posts={posts.slice(0, 3)} title={"Continue Reading"} tags={tags} pagination={pagination} />
			<PostList posts={posts.slice(3, 5)} title={"For You"} tags={tags} pagination={pagination} />
			<PostList posts={posts.slice(0)} title={"Trending on PheCode"} tags={tags} pagination={pagination} />
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

// export const getStaticProps: GetStaticProps = async () => {
// 	const posts = listPostContent(1, config.posts_per_page);
// 	const tags = listTags();
// 	const pagination = {
// 		current: 1,
// 		pages: Math.ceil(countPosts() / config.posts_per_page),
// 	};
// 	return {
// 		props: {
// 			posts,
// 			tags,
// 			pagination,
// 		},
// 	};
// };
