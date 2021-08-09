import React from "react";
import config from "../../lib/config";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export function SocialList({}) {
	return (
		<div>
			<a>
				<FacebookIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<a>
				<YouTubeIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<a>
				<InstagramIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<a>
				<TwitterIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<a>
				<LinkedInIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<style jsx>{`
				a {
					display: inline-block;
				}
				a:not(:last-child) {
					margin-right: 2em;
				}
			`}</style>
		</div>
	);
}
