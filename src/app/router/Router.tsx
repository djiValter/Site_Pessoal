import {BrowserRouter, Route, Routes as Switch} from "react-router-dom"
import {Main} from "../Main.tsx";

export const Routes = () => {
    return (
       <BrowserRouter>
           <Switch>
                <Route path="/main" element={<Main />} />
           </Switch>
       </BrowserRouter>
    )
}