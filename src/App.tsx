import ListGroup from "./components/ListGroup.tsx";
import SiteHeader from "./components/SiteHeader.tsx";


function App() {
    const items = [
        'adrian',
        'max',
        'asdf',
        'Vier'
    ]
    return (
        <div className="container">
            <SiteHeader/>
            <ListGroup heading={"Whatever"} items={items}/>
        </div>)
}

export default App;