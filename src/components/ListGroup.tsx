import React, {useState} from "react";

function ListGroup() {
    const items = [
        'adrian',
        'max',
        'asdf',
        'Vier'
    ]
    const [selectedIndex, setSelectedIndex] = useState(-1)

    

    const getEmptyItemsMessage = () => {
        return (items.length === 0) ? <p>No Elements were found</p> : null
    }
    const getItems = () => {
        return items.map((item, index) =>
            <li key={item}
                className={"list-group-item" + ((selectedIndex === index) ? " active" : "")}
                onClick={(event) => handleClick(event, item, index)}
            >{item}</li>
        )
    }

    const handleClick = (event: React.MouseEvent, item: string, index: number) => {
        console.log(item)
        console.log(event)
        console.log(selectedIndex)
        console.log(index)
        const newIndex = (index === selectedIndex) ? -1 : index
        setSelectedIndex(newIndex)
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