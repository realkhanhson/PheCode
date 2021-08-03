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
			<a
				title="Facebook"
				href={`https://www.facebook.com/${config.facebook_account}`}
				target="_blank"
				rel="noopener">
				<FacebookIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<a
				title="Youtube"
				href={`https://www.youtube.com/channel/${config.youtube_account}`}
				target="_blank"
				rel="noopener">
				<YouTubeIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<a
				title="Instagram"
				href={`https://www.instagram.com/${config.instagram_account}`}
				target="_blank"
				rel="noopener">
				<InstagramIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<a
				title="Twitter"
				href={`https://www.twitter.com/${config.twitter_account}`}
				target="_blank"
				rel="noopener">
				<TwitterIcon style={{ fontSize: 45 }} color="action" />
			</a>
			<a
				title="Linkedin"
				href={`https://www.linkedin.com/in/${config.linkedin_account}`}
				target="_blank"
				rel="noopener">
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
