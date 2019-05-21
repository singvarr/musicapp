import color from "color";
import { Styles } from "react-jss";
import Theme from "types/theme";

const styles = (theme: Theme): Styles => ({
    track: {
        width: 300,
        padding: [10, 20],
        textAlign: "center",
        boxSizing: "border-box",
        color: theme.textColor,
        "&:hover": {
            backgroundColor: color(theme.backgroundColor)
                .lighten(0.2)
                .hex()
        }
    },
    link: {
        display: "block"
    },
    imageContainer: {
        padding: [0, 20],
        cursor: "pointer",
        "&:hover img": {
            transform: "scale(1.05)"
        }
    },
    image: {
        transition: "transform 0.4s ease-out"
    },
    title: {
        padding: [15, 0],
        fontFamily: theme.headingFont,
        fontSize: 24
    },
    performer: {
        padding: [5, 0],
        fontFamily: theme.baseFont,
        fontSize: 19
    },
    genres: {
        paddingBottom: 10
    },
    genre: {
        display: "inline-block",
        margin: [5, 5, 0, 0],
        padding: 5,
        border: `solid 1px ${theme.textColor}`,
        fontFamily: theme.baseFont,
        fontSize: 12,
        borderRadius: 5,
        cursor: "pointer",
        "&:last-child": {
            marginRight: 0
        },
        "&:hover": {
            borderColor: theme.accentColor,
            color: theme.accentColor
        }
    }
});

export default styles;
