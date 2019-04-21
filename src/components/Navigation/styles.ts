import { Styles } from "react-jss";
import Theme from "types/theme";

const styles = (theme: Theme): Styles => ({
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100%",
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
        "&:hover": {
            color: theme.accentColor
        },
        "&.active": {
            textDecoration: "underline"
        }
    }
});

export default styles;
