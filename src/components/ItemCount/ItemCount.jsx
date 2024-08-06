import "./ItemCount.css"

export default function ItemCount(props) {
    function add() {
        if(props.count != props.stock ) {
            props.setCount(props.count + 1)
        }
    }

    function remove() {
        if(props.count != 0 ) {
            props.setCount(props.count - 1)
        }
    }

    return (
        <div className="CountContainer">
            <div className="CountActions">
                <button className="CountButton" onClick={remove}>-</button>
                <input className="CountInput" type="text" value={props.count}/>
                <button className="CountButton" onClick={add}>+</button>
            </div>
            <button className="AddCartButton" >Adicionar</button>
        </div>
    )
}