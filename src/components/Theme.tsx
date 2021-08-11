import { createMuiTheme } from "@material-ui/core";
import { viVN } from "@material-ui/core/locale";

const theme = createMuiTheme(
	{
		typography: {
			fontFamily: "'Inter', sans",
		},
		palette: {
			primary: {
				main: "#556cd6",
			},
			common: {
				black: "#292929",
				white: "#fafafa",
			},
		},
		overrides: {
			MuiCard: {
				root: {
					"&.MuiPostCard--normal": {
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						borderRadius: "25px",
						minHeight: "425px",
						minWidth: "300px",
						boxShadow: "0 6px 20px 1px rgba(0, 0, 0, 0.12)",
						margin: "auto",
						transition: "0.3s",
						"&:hover": {
							transform: "translateY(-3px)",
							boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
						},
					},
				},
			},
			MuiCardActions: {
				root: {
					padding: "0 0 20px 20px",
					marginTop: "auto",
				},
			},
			MuiCardMedia: {
				root: {
					height: 250,
				},
			},
			MuiPaper: {
				elevation0: {
					maxWidth: 800,
					flexDirection: "column",
					justifyContent: "space-between",
					borderRadius: "25px",
					boxShadow: "0 6px 20px 1px rgba(0, 0, 0, 0.2)",
					display: "flex",
					marginLeft: "auto",
					marginRight: "auto",
				},
			},
			MuiContainer: {
				root: {
					paddingLeft: 0,
					paddingRight: 0,
				},
			},
			MuiGrid: {
				"spacing-xs-5": {
					width: "100%",
					margin: 0,
				},
			},
			MuiMenu: {
				paper: {
					backgroundColor: "#FFFFFF",
					borderRadius: "20px",
					minWidth: "200px",
					boxShadow: "0 6px 20px 1px rgba(0, 0, 0, 0.12)",
					margin: "auto",
					transition: "0.3s",
					"&:hover": {
						transform: "translateY(-3px)",
						boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
					},
				},
			},
			MuiDialog: {
				paper: {
					borderRadius: "20px"
				}
			}
		},
	},
	viVN
);

export default theme;
