import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Copyright from "./Copyright";
import { SocialList } from "./SocialList";
import { Container } from "@material-ui/core";
import SearchAppBar from "./SearchAppBar";
import Link from "@material-ui/core/Link";

type Props = {
	children: React.ReactNode;
};
export default function Layout({ children }: Props) {
	return (
		<>
			<SearchAppBar />
			<Container maxWidth="lg">
				<Header />

				<Navigation />
			</Container>
			<main>{children}</main>
			<footer>
				<div className={"social-list"}>
					<SocialList />
				</div>
				<Copyright />
			</footer>
			<style jsx>
				{`
					main {
						padding: 2rem 0 1rem 0;
					}
					.social-list {
						margin-top: 1rem;
						text-align: center;
					}
					footer {
						margin-bottom: 1rem;
					}
					@media (min-width: 769px) {
						main {
							flex: 1 0 auto;
						}
					}
				`}
			</style>
		</>
	);
}
