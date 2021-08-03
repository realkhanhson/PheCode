import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';

const InfoBar = ({likes, comments, time}) => {
	const styles = {
		infoBar: {
			display: "flex",
			flexFlow: "row",
			gap: "24px",
			color: "#808080"
		},
		infoSegment: {
			display: "flex",
			flexFlow: "row",
			gap: "8px",
			alignItems: "center",
		},
	}

	return (
		<div style={styles.infoBar}>
			<div style={styles.infoSegment} className="thumbs">
				<ThumbUpAltOutlinedIcon />
				<span>69/72</span>
			</div>
			<div style={styles.infoSegment} className="comments">
				<ChatBubbleOutlineOutlinedIcon />
				<span>42</span>
			</div>
			<div style={styles.infoSegment} className="time">
				<AccessTimeOutlinedIcon />
				<span>Dec 31</span>
			</div>
		</div>
	)
}

export default InfoBar;
