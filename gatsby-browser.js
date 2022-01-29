import "./src/css/normalize.css"
import "./src/css/layout.css"
import "@fontsource/lato"
import "@fontsource/krona-one"

import React from "react"
import ThemeWrapper from "./src/HOCs/isBlackTheme"
import LoaderWrapper from "./src/HOCs/loader"

export function wrapPageElement({ element, props }) {
    return <ThemeWrapper {...props}>
        <LoaderWrapper>
            {element}
        </LoaderWrapper>
    </ThemeWrapper>
}