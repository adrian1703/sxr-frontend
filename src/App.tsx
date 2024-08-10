import Message from './Message.tsx';
import ListGroup from "./components/ListGroup.tsx";


function App() {
    const items = [
        'adrian',
        'max',
        'asdf',
        'Vier'
    ]
    return (
        <>
            <Message/>
            <ListGroup heading={"Whatever"} items={items}/>
        </>)
}

export default App;