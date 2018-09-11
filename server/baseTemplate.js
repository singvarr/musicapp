const template = (body, initialState) => {
    return `<!DOCTYPE html>
        <html>
        <head>
            <title>Music App</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div id="root">${body}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(
                    initialState
                ).replace(/</g, "\\u003c")}
            </script>
            <script src="bundle.js"></script>
        </body>
        </html>`;
};

export default template;
