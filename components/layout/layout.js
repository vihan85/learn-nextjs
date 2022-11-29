import { Fragment } from "react"
import MainHearder from "./main-header"

function Layout ({children}) {
    return (
        <Fragment>
            <MainHearder/>
            <main>{children}</main>
        </Fragment>
    )
}
export default Layout