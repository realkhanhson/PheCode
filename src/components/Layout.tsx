import React from "react";
import Header from "./navigation/Header";
import Copyright from "./navigation/Copyright";
import { SocialList } from "./navigation/SocialList";
import { Container } from "@material-ui/core";

import MenuAppBar from "@components/navigation/MenuAppBar";

type Props = {
	children: React.ReactNode;
};
export default function Layout({ children }: Props) {
	return (
		<>
			{/* <SearchAppBar /> */}
			<MenuAppBar />
			<Container maxWidth="lg">
				<Header />
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
