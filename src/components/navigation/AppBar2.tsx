import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";

import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { InputAdornment } from "@material-ui/core";

const AppBar2 = () => {
	const styles = {
		appBarSpecifics: {
			boxShadow: "none",
			color: "#000000",
		},

		container: {
			display: "flex",
			flexFlow: "row",
			backgroundColor: "#f8f8f8",
			borderBottom: "1px solid #c0c0c0",
			padding: "8px",
			alignItems: "center",
		},

		tabs: {
			display: "flex",
			justifyContent: "left",
			alignItems: "center",
			flex: "1",
			marginRight: "auto",
		},
		logoTab: {
			display: "flex",
			height: "32px",
			margin: "0 calc((48px - 32px) / 2)",
		},

		searchBox: {
			display: "flex",
			justifyContent: "center",
			flex: "2",
			backgroundColor: "#e8e8e8",
			borderRadius: "8px",
			padding: "8px 16px",
			color: "#808080",
			// maxWidth: "calc(0.5 * 1920px)",
			width: "100%",
		},

		userContainer: {
			display: "flex",
			justifyContent: "right",
			flex: "1",
			marginLeft: "auto",
			flexFlow: "row",
		},
		userBtns: {
			display: "flex",
			flexFlow: "row",
		},
		userNameContainer: {
			display: "flex",
			flexFlow: "row",
			alignItems: "center",
		},
		userName: {},
	};

	return (
		<AppBar position="sticky" style={styles.appBarSpecifics}>
			<div style={styles.container}>
				<div style={styles.tabs}>
					<Link href="/">
						<img src="/images/logo.png" style={styles.logoTab} />
					</Link>
					<IconButton>
						<BookmarkBorderOutlinedIcon />
					</IconButton>
					<IconButton>
						<FavoriteBorderOutlinedIcon />
					</IconButton>
					<IconButton>
						<WhatshotOutlinedIcon />
					</IconButton>
				</div>

				<InputBase
					style={styles.searchBox}
					placeholder="What are you looking for?"
					startAdornment={
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					}
				/>

				<div style={styles.userContainer}>
					<div style={styles.userBtns}>
						<IconButton>
							<AddCircleOutlineOutlinedIcon />
						</IconButton>
						<IconButton>
							<Badge badgeContent={4} color="secondary">
								<ForumOutlinedIcon />
							</Badge>
						</IconButton>
						<IconButton>
							<Badge badgeContent={8} color="secondary">
								<NotificationsOutlinedIcon />
							</Badge>
						</IconButton>
					</div>

					<Divider />

					<div style={styles.userNameContainer}>
						<div style={styles.userName}>Username</div>
						<IconButton>
							<AccountCircleOutlinedIcon />
						</IconButton>
					</div>
				</div>
			</div>
		</AppBar>
	);
};

export default AppBar2;
