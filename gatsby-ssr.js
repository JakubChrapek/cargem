const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            dangerouslySetInnerHTML={{
                __html: `
                (function () {
                    // Update the current theme to either 'light' or 'dark'
                    function setTheme(theme) {
                        window.__theme = theme
                        if (theme) {
                            document.documentElement.className = 'dark'
                          } else {
                            document.documentElement.className = ''
                          }
                    };
                
                    let isDark

                    try {
                        isDark = localStorage.getItem('isBlack');
                    } catch (e) { }

                    setTheme(isDark);
                })();`
            }}
        />,
    ]);
};

