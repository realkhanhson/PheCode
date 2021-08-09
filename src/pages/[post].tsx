import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { fetchPostContent } from "../lib/posts";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from "date-fns";
import PostLayout from "../components/post/PostLayout";
import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../lib/graphcms";

export type Props = {
	post?: any;
	preview: boolean;
	morePosts: any;
};

export default function Post({ post, preview, morePosts }: Props) {
	const router = useRouter();

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<PostLayout
			title={post?.title}
			date={parseISO(post?.date)}
			slug={post?.slug}
			tags={post?.tags}
			author={post?.author}
			description={""}
			image={post?.coverImage}>
			<div dangerouslySetInnerHTML={{ __html: post?.content.html }} />
		</PostLayout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllPostsWithSlug();
	const paths = posts.map((it) => "/" + it.slug);
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const slug = params.post as String;
	const data = await getPostAndMorePosts(slug, preview);

	return {
		props: {
			preview,
			post: data.post,
			morePosts: data.morePosts || [],
		},
	};
};

// export type Props = {
// 	title: string;
// 	dateString: string;
// 	slug: string;
// 	tags: string[];
// 	author: any;
// 	description?: string;
// 	image?: string;
// 	source: MdxRemote.Source;
// };

// const components = { InstagramEmbed, YouTube, TwitterTweetEmbed };
// const slugToPostContent = ((postContents) => {
// 	let hash = {};
// 	postContents.forEach((it) => (hash[it.slug] = it));
// 	return hash;
// })(fetchPostContent());

// export default function Post({ title, dateString, slug, tags, author, description = "", image = "", source }: Props) {
// 	const content = hydrate(source, { components });
// 	return (
// 		<PostLayout
// 			title={title}
// 			date={parseISO(dateString)}
// 			slug={slug}
// 			tags={tags}
// 			author={author}
// 			description={description}
// 			image={image}>
// 			{content}
// 		</PostLayout>
// 	);
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const paths = fetchPostContent().map((it) => "/" + it.slug);
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	const slug = params.post as string;
// 	const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
// 	const { content, data } = matter(source, {
// 		engines: {
// 			yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
// 		},
// 	});
// 	const mdxSource = await renderToString(content, { components, scope: data });
// 	return {
// 		props: {
// 			title: data.title,
// 			dateString: data.date,
// 			slug: data.slug,
// 			description: "",
// 			image: data.image,
// 			tags: data.tags,
// 			author: data.author,
// 			source: mdxSource,
// 		},
// 	};
// };
