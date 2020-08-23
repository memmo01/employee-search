import React from "react"
import "./style.css"

function Card(props) {
    return (
        <div className="col-6 col-lg-3 col-sm-4 ">
            <div className="card" >
                < img src={props.name.picture.large} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name.name.first} {props.name.name.last}</h5>
                    <p className="card-text emailTxt">
                        {props.name.email}
                    </p>
                    <p className="card-text">
                        {props.name.cell}
                    </p>

                </div>
            </div >
        </div >

    )
}
export default Card;