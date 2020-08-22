import React from "react"

function Card(props) {
    return (
        <div className="col-3">
            <div className="card" style={{ marginBottom: "10px", minHeight: "400px" }}>
                <img src={props.name.picture.large} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name.name.first}{props.name.name.last}</h5>
                    <p className="card-text">
                        {props.name.email}
                    </p>
                    <p className="card-text">
                        {props.name.cell}
                    </p>

                </div>
            </div>
        </div >

    )
}
export default Card;