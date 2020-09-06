import React from "react"
import "./style.css"

function Sort(props) {
    let desStyle = "inactive";
    let ascStyle = "inactive";
    if (props.sortDirection === "desending") {
        desStyle = "active"
        ascStyle = "inactive"
    }
    else if (props.sortDirection === "ascending") {
        desStyle = "inactive"
        ascStyle = "active"
    }

    return (
        <div>
            <h1>sort</h1>
            <p className={`sortBtn ${desStyle} `} onClick={() => { props.handleSortClick("desending") }}>A-Z</p>
            <p className={`sortBtn ${ascStyle} `} onClick={() => { props.handleSortClick("ascending") }}>Z-A</p>
        </div >
    )
}

export default Sort;