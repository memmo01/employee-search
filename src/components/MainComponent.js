import React from "react"
import Header from "./Header"
import Search from "./Search"
import Card from "./Card"
import API from "../utils/API"

class MainComponent extends React.Component {
    state = {
        results: [],
        search: "",
        category: ""
    }


    componentDidMount = () => {
        API.getUsers().then(results => {
            this.setState({
                results: results.data.results
            })
        })

    }

    render() {
        return (
            <div>
                <Header />

                <main className="row">
                    <aside className="col-4">
                        <Search />
                    </aside>
                    <section className="col-8">
                        <div className="row">
                            {this.state.results.map(item => {
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