import React from 'react'

export function onRenderBody({ setHeadComponents }) {
    setHeadComponents([
        <script
            dangerouslySetInnerHTML={{
                __html: `
                (function () {
                    function setTheme(isBlack) {
                        window.__theme = isBlack
                        isBlack 
                            ? document.documentElement.className = isBlack === 'false' ? '' : 'dark'
                            : null
                        
                    };
                
                    let isBlack = localStorage.getItem('isBlack');
                    setTheme(isBlack);
                })();`
            }}
        />,
    ]);
};