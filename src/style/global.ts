import theme from "./theme";

const styles = {
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
    "@font-face": {
        fontFamily: "Oswald",
        src: "url(assets/fonts/Oswald-Regular.ttf)"
    }
};

export default styles;
