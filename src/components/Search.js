import React from "react"

function Search(props) {
    return (
        <form>
            <label for="search">Search</label>
            <input type="text" name="search" id="search" required onChange={props.handleChange} />
            <p>Search by:</p>

            <input type="radio" name="searchtype" id="name" value="name" checked={true} />
            <label for="name">name</label>

            <input type="radio" name="searchtype" id="email" value="email" />
            <label for="email">email</label>

            <input type="radio" name="searchtype" id="phone" value="phone" />
            <label for="phone">phone number</label>
            <br></br>
            <button>Search</button>
        </form>
    )
}
export default Search;