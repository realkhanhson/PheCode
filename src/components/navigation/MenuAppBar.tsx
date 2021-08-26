import React from "react";
import {
	Badge,
	InputBase,
	AppBar,
	Divider,
	InputAdornment,
	Menu,
	MenuItem,
	Link,
	IconButton,
	Button,
} from "@material-ui/core";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CreateIcon from "@material-ui/icons/Create";

const MenuAppBar = () => {
	const styles = {
		appBarSpecifics: {
			boxShadow: "none",
			color: "#000000",
			zIndex: 1030,
		},
	};

	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<AppBar position="sticky" style={styles.appBarSpecifics}>
				<div className="container">
					<div className="tabs">
						<Link href="/">
							<img src="/images/logo.png" className="logoTab" />
						</Link>
						<div className="iconButton">
							<Button>
								<BookmarkBorderOutlinedIcon />
								<span className="tab-label">&nbsp;Saved</span>
							</Button>
							<Button>
								<FavoriteBorderOutlinedIcon />
								<span className="tab-label">&nbsp;For You</span>
							</Button>
							<Button>
								<WhatshotOutlinedIcon />
								<span className="tab-label">&nbsp;Trending</span>
							</Button>
							{/* <IconButton>
								<BookmarkBorderOutlinedIcon />
							</IconButton>
							<IconButton>
								<FavoriteBorderOutlinedIcon />
							</IconButton>
							<IconButton>
								<WhatshotOutlinedIcon />
							</IconButton> */}
						</div>
					</div>

					<div className="searchBox">
						<InputBase
							placeholder="What are you looking for?"
							startAdornment={
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							}
						/>
					</div>

					<div className="userContainer">
						<div className="userBtns">
							<Link href="/create">
								<IconButton>
									<CreateIcon />
								</IconButton>
							</Link>
							<div className="iconButton">
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
						</div>
						<Divider orientation="vertical" flexItem />

						{auth && (
							<div className="userNameContainer">
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
									<div className="menuAvatar">
										<Avatar>TM</Avatar>
										<div className="menuText">Tommy</div>
									</div>
									<Divider />
									<MenuItem onClick={handleClose}>
										<PersonIcon />
										<div className="menuText">Profile</div>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<DescriptionIcon />
										<div className="menuText">Post Management</div>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<HistoryIcon />
										<div className="menuText">History</div>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<SettingsIcon />
										<div className="menuText">Settings</div>
									</MenuItem>
									<Divider />
									<MenuItem onClick={handleClose}>
										<ExitToAppIcon />
										<div className="menuText">Sign Out</div>
									</MenuItem>
								</Menu>
							</div>
						)}
					</div>
				</div>
				<style jsx>
					{`
						.container {
							display: flex;
							flex-flow: row;
							background-color: #f8f8f8;
							border-bottom: 1px solid #c0c0c0;
							padding: 8px;
							align-items: center;
						}
						.iconButton{
							display: none;
						}
						.tabs {
							display: flex;
							/* flex: 1; */
							justify-content: left;
							align-items: center;
							margin-right: auto;
						}

						.logoTab {
							display: flex;
							height: 32px;
							margin: 0 calc((48px - 32px) / 2);
						}
						.searchBox{
							display: flex
							justify-content: center;
							background-color: #e8e8e8;
							border-radius: 8px;
							padding: 8px 16px;
							color: #808080;
							max-width: 50rem;
							margin-left: auto;
							margin-right: auto;

						}
						.userContainer {
							display: flex;
							/* flex: 1; */
							justify-content: right;
							align-items: center;
							margin-left: auto;
						}
						.userBtns {
							display: flex;
							flex-flow: row;
						}
						.userNameContainer {
							display: flex;
							flex-flow: row;
							align-items: center;
							padding-left: 15px;
						}
						.menuAvatar {
							display: flex;
							padding: 10px;
						}
						.menuText {
							padding-left: 15px;
							padding-top: 5px;
						}
						@media (min-width: 769px) {
							.iconButton{ 
								display: flex;
							}
						}
						@media (max-width: 1100px) {
							/* Tested on Firefox */
							.tab-label {
								display: none;
							}
						}
					`}
				</style>
			</AppBar>
		</Slide>
	);
};

export default MenuAppBar;
