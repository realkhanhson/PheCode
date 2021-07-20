import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function TagButton({ tag }: Props) {
  return (
    <>
      <Link href={"/tags/[[...slug]]"} as={`/tags/${tag.slug}`}>
        <a>{tag.name}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 3px;
          background-color: rgba(241, 209, 128, 0.41);
          color: rgb(190, 159, 20);
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
          font-size: 18px;
        }
        a:active,
        a:hover {
          background-color: rgba(255, 187, 0, 0.41);
        }
      `}</style>
    </>
  );
}
