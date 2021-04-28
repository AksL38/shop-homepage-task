import Card from './Card';

export default function Items(props) {
    return <div className="row">
        {
            props.data.map((item, index) => {
                return <Card data={item} addToCart={props.addToCart} key={index} removeFromCart={props.removeFromCart}></Card>
            })

        }
    </div>
}