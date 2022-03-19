import "./src/css/normalize.css"
import "./src/css/layout.css"
import "@fontsource/lato"
import "@fontsource/krona-one"

import React from "react"
import ThemeWrapper from "./src/HOCs/isBlackTheme"

export function wrapPageElement({ element, props }) {
    return <ThemeWrapper {...props}>
        {element}
    </ThemeWrapper>
}