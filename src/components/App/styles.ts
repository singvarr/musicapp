import { Styles } from "react-jss";
import Theme from "types/theme";

const styles = (theme: Theme): Styles => ({
    "@global body": {
        margin: 0,
        padding: 0,
        backgroundColor: theme.backgroundColor
    },
    "@global main": {
        backgroundColor: theme.backgroundColor
    },
    "@global ul": {
        padding: 0,
        margin: 0,
        listStyle: "none"
    },
    "@global a": {
        textDecoration: "none"
    },
    main: {
        margin: [0, 30],
        paddingTop: 90,
        fontFamily: theme.baseFont,
        fontSize: 16,
        color: theme.textColor
    }
});

export default styles;
