import SiteHeader from "./components/SiteHeader.tsx";
import SiteFooter from "./components/SiteFooter.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";


function App() {

    return (
        <div className="container d-flex flex-column min-vh-100">
            <SiteHeader/>
            <main className="flex-grow-1">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home/>} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                    </Routes>
                </BrowserRouter>
            </main>
            <SiteFooter/>
        </div>
    )
}

export default App;