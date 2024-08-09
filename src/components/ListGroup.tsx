function ListGroup() {
    const items = [
        'adrian',
        'max',
        'asdf',
        'Vier'
    ]
    

    const getEmptyItemsMessage = () => {
        return (items.length === 0) ? <p>No Elements were found</p> : null
    }
    const getItems = () =>{
        return items.map(item =>
            <li key={item}
                className="list-group-item"
                onClick= {() => handleClick(item)}
            >{item}</li>
        )
    }

    const handleClick = (item: string) => {
        console.log(item)
    }

    return (
        <>
            <h1>List Header</h1>
            <ul className="list-group">
                {getEmptyItemsMessage()}
                {getItems()}
            </ul>
        </>

    )
}

export default ListGroup