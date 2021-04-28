

export default function Card(props) {
    let starsDisplay;
    switch (props.data.rating) {
        case 1: starsDisplay = <small className="text-muted" >&#9733; &#9734; &#9734; &#9734; &#9734;</small>; break;        
        case 2: starsDisplay = <small className="text-muted" >&#9733; &#9733; &#9734; &#9734; &#9734;</small>; break;
        case 3: starsDisplay = <small className="text-muted" >&#9733; &#9733; &#9733; &#9734; &#9734;</small>; break;
        case 4: starsDisplay = <small className="text-muted" >&#9733; &#9733; &#9733; &#9733; &#9734;</small>; break;
        case 5: starsDisplay = <small className="text-muted" >&#9733; &#9733; &#9733; &#9733; &#9733;</small>; break;
        default: starsDisplay = <small className="text-muted" >&#9734; &#9734; &#9734; &#9734; &#9734;;</small>; 

    }

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <span className="linkCursor"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></span>
                <div className="card-body">
                    <h4 className="card-title">
                        <span className="linkCursor">{props.data.title}</span>
                    </h4>
                    <h5>{props.data.price}</h5>
                    <p className="card-text">{props.data.description}</p>
                </div>
                <div className="card-footer">
                    {starsDisplay}
                    {props.data.added? 
                    <button className="btn btn-sm btn-danger float-right" onClick={() => props.removeFromCart(props.data.title)}>Remove From Cart</button>
                    :
                    <button className="btn btn-sm btn-success float-right" onClick={() => props.addToCart({name:props.data.title})}>Add to cart</button>
                    }
                    
                </div>
            </div>
        </div>

    )
}