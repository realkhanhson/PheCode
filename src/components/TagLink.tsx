import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/tags/[[...slug]]"} as={`/tags/${tag.slug}`}>
      <a>{tag.name}</a>
    </Link>
  );
}
