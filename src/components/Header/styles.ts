import Theme from "types/theme";

const styles = (theme: Theme) => ({
    wrapper: {
        position: "fixed",
        zIndex: 100,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        borderBottom: `solid 1px ${theme.textColor}`,
        color: theme.textColor,
        backgroundColor: theme.backgroundColor
    },
    logoWrapper: {
        marginLeft: 30,
        maxWidth: 250,
        fontFamily: theme.headingFont,
        fontSize: 40,
        color: theme.textColor,
        textDecoration: "none"
    },
    logo: {
        width: "auto",
        maxHeight: "100%"
    },
    donateLink: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 30,
        marginRight: 25,
        padding: [5, 10],
        border: `solid 1px ${theme.textColor}`,
        fontFamily: theme.baseFont,
        fontSize: 24,
        borderRadius: 5,
        color: theme.textColor,
        textDecoration: "none",
        "&:hover": {
            color: theme.accentColor,
            borderColor: theme.accentColor
        }
    }
});

export default styles;
