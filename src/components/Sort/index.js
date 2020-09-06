import React from "react"

function Sort(props) {
    return (
        <div>
            <h1>sort</h1>
            <p onClick={() => { props.handleSortClick("desending") }}>A-Z</p>
            <p onClick={() => { props.handleSortClick("ascending") }}>Z-A</p>
        </div >
    )
}

export default Sort;