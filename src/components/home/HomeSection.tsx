const HomeSection = ({ children }) => {
	const styles = {
		container: {
			display: "flex",
			flexFlow: "column",
			gap: "32px",
			margin: "48px 0",
		},
	};

	return <div style={styles.container}>{children}</div>;
};

export default HomeSection;
