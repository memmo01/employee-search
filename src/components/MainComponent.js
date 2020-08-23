import React from "react"
import Header from "./Header"
import Search from "./Search"
import Card from "./Card"
import API from "../utils/API"

class MainComponent extends React.Component {
    state = {
        results: [],
        employeesMatch: [],
        search: "",
        category: "name",
        name: true,
        email: false

    }



    componentDidMount = () => {
        API.getUsers().then(results => {
            this.setState({
                results: results.data.results,
                employeesMatch: results.data.results
            })
        })

    }

    handleInputChange = (e) => {
        let value = e.target.value.toLowerCase()
        let employees = this.state.results.filter(item => {
            let category;
            let firstName = item.name.first.toLowerCase()
            let lastName = item.name.last.toLowerCase()
            if (this.state.category === "name") {
                category = `${firstName} ${lastName}`
            } else if (this.state.category === "email") {

                category = item.email
            }
            if (category.indexOf(value) !== -1) {
                return item
            }
        })
        this.setState({
            employeesMatch: employees
        })
    }

    handleRadio = (e) => {
        this.setState({
            category: e.target.value,
            email: !this.state.email,
            name: !this.state.name
        })
    }

    render() {
        return (
            <div>

                <main className="row">

                    <aside className="col-lg-3 d-lg-block d-none">
                        <Search handleChange={this.handleInputChange} handleRadio={this.handleRadio} nameCheck={this.state.name} emailCheck={this.state.email} />
                    </aside>
                    <section className="col-lg-8">
                        <Header />
                        <div className="row">
                            <div className="col-12 d-lg-none d-block">
                                <Search handleChange={this.handleInputChange} handleRadio={this.handleRadio} nameCheck={this.state.name} emailCheck={this.state.email} />
                            </div>
                            {this.state.employeesMatch.map(item => {
                                return <Card name={item} key={item.login.uuid} />
                            })}
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
export default MainComponent;