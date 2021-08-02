import { Typography, Paper } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Avatar from "@material-ui/core/Avatar";

export default function Comment() {
	return (
		<div className="container">
			<Paper elevation={0}>
				<div className="each-comment">
					<Avatar>OP</Avatar>&nbsp;&nbsp;
					<div className="box">
						<InputBase placeholder="Write your comment…" />
					</div>
				</div>
				<div className="each-comment">
					<Avatar>KS</Avatar>&nbsp;&nbsp;
					<div className="box">
						<div className="name">Khanh Son</div>
						This is a false fact. Even when you enjoy it, sometimes it can get frustrating. Some people have
						trouble focusing. And it has nothing to do with "what they enjoy". Sometimes when programming
						stresses you out, you should take a break.
					</div>
				</div>
				<div className="each-comment">
					<Avatar>BT</Avatar>&nbsp;&nbsp;
					<div className="box">
						<div className="name">Thien Bui</div>
						You still wanna make sure if you're unfocused by laziness or because you hate it
					</div>
				</div>
				<div className="each-comment">
					<Avatar>NQ</Avatar>&nbsp;&nbsp;
					<div className="box">
						<div className="name">Nam Quoc</div>
						Thank you so much for sharing all this. I'm pretty sure that, I'll gain efficiency by following
						the promodoro technique. I used to stay watching videos and taking note for about 3h every
						night. And sometime, I wanted to give up because I felt like I was not really understanding, as
						if I was just keeping a written version of what I was watching.
					</div>
				</div>
				<div className="show-more">Show more comment...</div>
			</Paper>
			<style jsx>
				{`
					.container {
						padding: 1.25rem 0 1rem 0;
					}
					.each-comment {
						padding: 1rem;
						display: flex;
					}
					.box {
						width: 720px;
						border-radius: 12px;
						box-sizing: border-box;
						padding: 7px;
						background-color: #f3f4f6;
					}
					.name {
						font-weight: bold;
					}
					.show-more {
						padding: 1rem;
						color: #9ca3af;
						cursor: pointer;
					}
				`}
			</style>
		</div>
	);
}
