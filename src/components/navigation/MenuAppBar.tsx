import React from "react";
import { Badge, InputBase, AppBar, Divider, InputAdornment, Menu, MenuItem, Link, IconButton } from "@material-ui/core";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PersonIcon from "@material-ui/icons/Person";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CreateIcon from "@material-ui/icons/Create";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";

const MenuAppBar = () => {
	const styles = {
		appBarSpecifics: {
			boxShadow: "none",
			color: "#000000",
			zIndex: 1030, // Magic number: exactly 1 less than the default z-index for nprogress
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
			paddingLeft: "15px",
		},
		menuAvatar: {
			display: "flex",
			padding: "10px",
		},
		menuText: {
			paddingLeft: "15px",
			paddingTop: "5px",
		},
		userName: {},
	};

	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
							{/* <AddCircleOutlineOutlinedIcon /> */}
							<CreateIcon />
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
					<Divider orientation="vertical" flexItem />

					{auth && (
						<div style={styles.userNameContainer}>
							<div style={styles.userName}>Undefined</div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit">
								<AccountCircleOutlinedIcon />
							</IconButton>

							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={handleClose}>
								<div style={styles.menuAvatar}>
									<Avatar>UN</Avatar>
									<div style={styles.menuText}>Undefined</div>
								</div>
								<Divider />
								<MenuItem onClick={handleClose}>
									<PersonIcon />
									<div style={styles.menuText}>Profile</div>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<HistoryIcon />
									<div style={styles.menuText}>History</div>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<SettingsIcon />
									<div style={styles.menuText}>Settings</div>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose}>
									<ExitToAppIcon />
									<div style={styles.menuText}>Sign Out</div>
								</MenuItem>
							</Menu>
						</div>
					)}
				</div>
			</div>
		</AppBar>
	);
};

export default MenuAppBar;
