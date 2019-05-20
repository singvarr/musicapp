import Theme from "types/theme";

const styles = (theme: Theme) => ({
    main: {
        margin: [0, 30],
        paddingTop: 90,
        fontFamily: theme.baseFont,
        fontSize: 16,
        color: theme.textColor,
        backgroundColor: theme.backgroundColor
    }
});

export default styles;
