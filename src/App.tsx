import ListGroup from "./components/ListGroup.tsx";
import SiteHeader from "./components/SiteHeader.tsx";
import SiteFooter from "./components/SiteFooter.tsx";


function App() {
    const items = [
        'adrian',
        'max',
        'asdf',
        'Vier'
    ]
    return (
        <div className="container d-flex flex-column min-vh-100">
            <SiteHeader/>
            <main className="flex-grow-1">
               <ListGroup heading={"Whatever"} items={items}/>
            </main>
            <SiteFooter/>
        </div>
    )
}

export default App;