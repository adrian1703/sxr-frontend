import ListGroup from "../components/ListGroup.tsx";

function Home() {
    const items = [
        'adrian',
        'max',
        'asdf',
        'Vier'
    ]

    return (
        <ListGroup heading={"Whatever"} items={items}/>
    )
}

export default Home