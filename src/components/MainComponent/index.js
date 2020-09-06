import React, { useState, useEffect } from "react"
import Header from "../Header"
import Search from "../Search"
import Card from "../Card"
import Sort from "../Sort"
import API from "../../utils/API"
import "./style.css"

function MainComponent() {
    const [results, setResults] = useState([])
    const [employeesMatch, setEmployeesMatch] = useState([])
    const [name, setName] = useState(true)
    const [email, setEmail] = useState(false)
    const [sortDirection, setSort] = useState("ascending")
    const [category, setCategory] = useState("name")

    //on load get employees
    useEffect(() => {
        API.getUsers().then(results => {
            setResults(results.data.results)
            setEmployeesMatch(results.data.results)
        }).catch(err => { console.error(err) })
    }, [])

    //when text is entered into input filter through users to find matches
    function handleInputChange(e) {

        let value = e.target.value.toLowerCase()

        let employees = results.filter(item => {
            let categoryVar;
            let firstName = item.name.first.toLowerCase()
            let lastName = item.name.last.toLowerCase()

            if (category === "name") {
                categoryVar = `${firstName} ${lastName}`
            }
            else if (category === "email") {
                categoryVar = item.email
            }
            if (categoryVar.indexOf(value) !== -1) {
                return item
            }
        })
        setEmployeesMatch(employees)
    }


    function sortEmployees() {

        employeesMatch.sort(function (a, b) {

            if (sortDirection === "ascending") {
                return (a.name.first > b.name.first) ? 1 : -1;
            }
            else if (sortDirection === "desending") {
                return (a.name.first < b.name.first) ? 1 : -1;
            }
        })
        setEmployeesMatch(employeesMatch)

    }

    //radio option for search by email or name
    function handleRadio(e) {

        setCategory(e.target.value)
        setEmail(!email)
        setName(!name)
    }

    function handleSortClick(sortType) {
        setSort(sortType)
        sortEmployees()
    }


    return (

        <main className="row">

            <aside className="col-lg-3 d-lg-block d-none">
                <Search handleChange={handleInputChange} handleRadio={handleRadio} nameCheck={name} emailCheck={email} />
                <Sort handleSortClick={handleSortClick} />
            </aside>
            <section className="col-lg-8">
                <Header />
                <div className="row">
                    <div className="col-12 d-lg-none d-block">
                        <Search handleChange={handleInputChange} handleRadio={handleRadio} nameCheck={name} emailCheck={email} />
                    </div>
                    {employeesMatch.map(item => {
                        return <Card name={item} key={item.login.uuid} />
                    })}
                </div>
            </section>
        </main>

    )
}

export default MainComponent;