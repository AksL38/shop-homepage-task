

export default function CartItem(props) {
    return <span className="linkCursor list-group-item">{props.data.name}
    <button className="btn btn-sm btn-danger float-right" onClick={() => props.removeFromCart(props.data.name)}>Remove from cart</button>
    </span>
    
     
}