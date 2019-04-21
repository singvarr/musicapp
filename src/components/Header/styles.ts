import Theme from "types/theme";
import { Styles } from "react-jss";

const styles = (theme: Theme): Styles => ({
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
        marginLeft: 40,
        fontFamily: theme.headingFont,
        fontSize: 40
    },
    logo: {
        width: "auto",
        maxHeight: "100%"
    },
    donateLink: {
        position: "relative",
        alignSelf: "center",
        height: 30,
        marginRight: 25,
        padding: [5, 10],
        border: `solid 1px ${theme.textColor}`,
        fontFamily: theme.baseFont,
        fontSize: 24,
        borderRadius: 5,
        color: theme.textColor,
        textDecoration: null,
        "&:hover": {
            color: theme.accentColor,
            borderColor: theme.accentColor
        }
    }
});

export default styles;
