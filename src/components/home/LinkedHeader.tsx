import Link from "next/link";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const LinkedHeader = ({ title, href }) => {
	const styleVars = {
		textSize: "36px",
	};
	const styles = {
		container: {
			display: "flex",
			flexFlow: "row",
			alignItems: "center",
			gap: "16px",
			color: "#ff9900",
			cursor: "pointer",
		},
		link: {
			fontSize: styleVars.textSize,
			fontWeight: 700,
			color: "#ff9900",
		},
		icon: {
			width: styleVars.textSize,
			height: styleVars.textSize,
		},
	};

	return (
		<Link href={href} passHref>
			<div style={styles.container}>
				<a style={styles.link}>{title}</a>
				<ArrowForwardIosIcon style={styles.icon} />
			</div>
		</Link>
	);
};

export default LinkedHeader;
