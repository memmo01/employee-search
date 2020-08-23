import React from "react"
import "./style.css"

function Search(props) {
    return (
        <form>
            <label htmlFor="search" >Find Employee</label><br />
            <input type="text" name="search" id="search" required onChange={props.handleChange} />

            <fieldset>
                <legend>Search By</legend>

                <input type="radio" name="searchtype" id="name" value="name" onChange={props.handleRadio} checked={props.nameCheck} />
                <label htmlFor="name">Name</label>

                <input type="radio" name="searchtype" id="email" value="email" onChange={props.handleRadio} checked={props.emailCheck} />
                <label htmlFor="email">Email</label>

                <br></br>
            </fieldset>
        </form>
    )
}
export default Search;