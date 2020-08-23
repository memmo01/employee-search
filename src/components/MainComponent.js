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
        category: ""
    }


    componentDidMount = () => {
        API.getUsers().then(results => {
            this.setState({
                results: results.data.results,
                employeesMatch: results.data.results
            })
        })

    }

    handleChange = (e) => {
        let value = e.target.value.toLowerCase()

        let employees = this.state.results.filter(item => {
            let firstName = item.name.first.toLowerCase()
            let lastName = item.name.last.toLowerCase()
            let name = `${firstName} ${lastName}`
            if (name.indexOf(value) !== -1) {
                return item
            }
        })
        this.setState({
            employeesMatch: employees
        })
    }

    render() {
        return (
            <div>
                <Header />

                <main className="row">
                    <aside className="col-4">
                        <Search handleChange={this.handleChange} />
                    </aside>
                    <section className="col-8">
                        <div className="row">
                            {this.state.employeesMatch.map(item => {
                                return <Card name={item} />
                            })}
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
export default MainComponent;