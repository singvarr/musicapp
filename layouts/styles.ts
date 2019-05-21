import Theme from "types/theme";

const styles = (theme: Theme) => ({
    "@global body": { backgroundColor: theme.backgroundColor },
    main: {
        margin: [0, 30],
        paddingTop: 90,
        fontFamily: theme.baseFont,
        fontSize: 16,
        color: theme.textColor
    }
});

export default styles;
