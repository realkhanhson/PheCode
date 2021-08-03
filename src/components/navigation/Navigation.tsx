import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { listTags } from "../../lib/tags";

export default function Navigation() {
	const router = useRouter();
	const tags = listTags();
	const [active, setActive] = useState(false);
	return (
		<>
			<div className={active ? "active" : ""}>
				<ul>
					<li>
						<Link href="/">
							<a className={router.pathname === "/" ? "active" : null}>All</a>
						</Link>
					</li>
					{tags.map((tag, i) => (
						<li key={i}>
							<Link href={"/tags/[[...slug]]"} as={`/tags/${tag.slug}`}>
								<a className={router.pathname.startsWith(`/tags/${tag.slug}`) ? "active" : null}>
									{tag.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<style jsx>
				{`
          .container{
            display: flex:
            margin-left: auto;
            margin-right: auto;
          }
          ul {
            opacity: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            list-style: none;
            margin: 0;
            padding: 0;
            position: fixed;
            top: 0;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 1;
            transform: translateY(100%);
            transition: opacity 200ms;
          }
          .active ul {
            opacity: 1;
            transform: translateY(0);
          }
          li {
            font-size: 20px;
            padding: 1rem 1rem 1rem;
            list-style-type: none;
          }
          li:last-child {
            margin-bottom: 0;
          }
          @media (min-width: 769px) {
            ul {
              max-width: 870px;
              opacity: 1;
              flex-direction: row;
              margin-left: auto;
              margin-right: auto;
              border-radius: 15px;
              box-shadow: 0 6px 20px 1px rgba(0, 0, 0, 0.12);
              position: static;
              transform: translateY(0);
            }
          }
        `}
			</style>
		</>
	);
}
