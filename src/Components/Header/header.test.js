import { render } from "@testing-library/react"
import Header from "./header"
import {StaticRouter} from "react-router-dom/server"
import { Provider } from "react-redux";


test(
    "logo should be visible on rendering the page",
    ()=>{
        const view= render(<StaticRouter><Provider><Header/></Provider></StaticRouter>  )
        console.log( view);
    }
);