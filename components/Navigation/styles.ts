import Theme from "types/theme";

const styles = (theme: Theme) => ({
    navigation: {
        flexGrow: 1
    },
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100%"
    },
    listItem: {
        marginRight: 20,
        "&:last-child": {
            marginRight: 0
        }
    },
    link: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 20,
        fontFamily: theme.headingFont,
        color: theme.textColor,
        textDecoration: "none",
        "&:hover": {
            color: theme.accentColor
        }
    },
    activeLink: {
        color: theme.accentColor,
        textDecoration: "underline"
    }
});

export default styles;
