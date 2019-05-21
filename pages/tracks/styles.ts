import { Styles } from "react-jss";
import Theme from "types/theme";

const styles = (theme: Theme): Styles => ({
    statusMessage: {
        paddingLeft: 20,
        fontFamily: theme.baseFont,
        fontSize: 16
    },
    errorMessage: {
        color: "red"
    },
    trackList: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        paddingTop: 20
    }
});

export default styles;
