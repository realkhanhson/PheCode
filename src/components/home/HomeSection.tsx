const HomeSection = ({ children }) => {
	const styles = {
		container: {
			display: "flex",
			flexFlow: "column",
			gap: "32px",
			margin: "48px auto 48px auto",
		},
	};

	return <div style={styles.container}>{children}</div>;
};

export default HomeSection;
