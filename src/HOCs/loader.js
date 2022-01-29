import React from "react"
import Loader from "../components/loader"

const LoaderWrapper = ({ children }) => {
    return (
        <Loader>
            {children}
        </Loader>
    )
}

export default LoaderWrapper