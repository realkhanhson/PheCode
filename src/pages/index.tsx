import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import PostList from "../components/PostList";
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
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
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

// import { GetStaticProps } from "next";
// import Layout from "../components/Layout";
// import BasicMeta from "../components/meta/BasicMeta";
// import OpenGraphMeta from "../components/meta/OpenGraphMeta";
// import TwitterCardMeta from "../components/meta/TwitterCardMeta";
// import TagPostList from "../components/TagPostList";
// import config from "../lib/config";
// import { countPosts, listPostContent, PostContent } from "../lib/posts";
// import { getTag, listTags, TagContent } from "../lib/tags";
// import { Grid } from "@material-ui/core";

// type TagPost = {
//   posts: PostContent[];
//   tag: TagContent;
//   pagination: {
//     current: number;
//     pages: number;
//   };
// };

// let Tag: TagPost[];

// type Props = {
//   Tag: TagPost[];
// };

// export default function Index({ Tag }: Props) {
//   const url = "/";
//   const title = "";
//   return (
//     <Layout>
//       <BasicMeta url={url} title={title} />
//       <OpenGraphMeta url={url} title={title} />
//       <TwitterCardMeta url={url} title={title} />
//       <Grid container alignItems="stretch" spacing={5}>
//         {Tag.map((it) => (
//           <TagPostList
//             posts={it.posts}
//             tag={it.tag}
//             pagination={it.pagination}
//           />
//         ))}
//       </Grid>
//     </Layout>
//   );
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const tags = listTags();
//   const Tag = {};
//   for (const tag of tags) {
//     const [slug, page] = [tag.slug, "1"];

//     const posts = listPostContent(
//       page ? parseInt(page as string) : 1,
//       config.posts_per_page,
//       slug
//     );
//     const pagination = {
//       current: page ? parseInt(page as string) : 1,
//       pages: Math.ceil(countPosts(slug) / config.posts_per_page),
//     };
//     const TagPost: {
//       posts: PostContent[];
//       tag: TagContent;
//       pagination: { current: number; pages: number };
//       page?: string;
//     } = { posts, tag, pagination };
//     if (page) {
//       TagPost.page = page;
//     }

    
//   }
//   return {
//     props: {
//       Tag,
//     },
//   };
// };

// export default function Index({ posts, tag, pagination }: Props) {
//   const url = "/";
//   const title = "";
//   const tags = listTags();
//   return (
//     <Layout>
//       <BasicMeta url={url} title={title} />
//       <OpenGraphMeta url={url} title={title} />
//       <TwitterCardMeta url={url} title={title} />
//       <Grid container alignItems="stretch" spacing={5}>
//         {tags.map((it) => (
//           <TagPostList posts={posts} tag={it} pagination={pagination} />
//         ))}
//       </Grid>
//     </Layout>
//   );
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = listPostContent(1, config.posts_per_page);
//   const tags = listTags();
//   const pagination = {
//     current: 1,
//     pages: Math.ceil(countPosts() / config.posts_per_page),
//   };
//   return {
//     props: {
//       posts,
//       tags,
//       pagination,
//     },
//   };
// };
