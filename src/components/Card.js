import React from "react"

function Card(props) {
    return (
        <div className="col-3">
            <div className="card" style={{ width: "18rem;", marginBottom: "10px" }}>
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body">
                    <h5 className="card-title">{props.name.name}</h5>
                    <p className="card-text">
                        {props.name.email}
                    </p>
                    <p className="card-text">
                        {props.name.phone}
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    )
}
export default Card;