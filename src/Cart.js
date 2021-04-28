import CartItem from './CartItem';

export default function Cart(props) {
    return <div className="col-lg-3">
        <h1 className="my-4">Cart</h1>
        <div className="list-group">
            {
                props.cart.map((obj, index) => {
                    return <CartItem data={obj} key={index} removeFromCart = {props.render}></CartItem>
                })
            }
        </div>
    </div>
}

