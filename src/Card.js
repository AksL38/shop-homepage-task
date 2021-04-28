

export default function Card() {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <span className="linkCursor"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></span>
                <div className="card-body">
                    <h4 className="card-title">
                        <span className="linkCursor">Item One</span>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
        </div>

    )
}