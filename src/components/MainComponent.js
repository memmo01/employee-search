import React from "react"
import Header from "./Header"
import Search from "./Search"
import Card from "./Card"

function MainComponent() {
    const names = [{ name: "unknown", email: "anon@gmail.com", phone: "234-532-5678" }, { name: "unknown", email: "anon@gmail.com", phone: "234-532-5678" }, { name: "unknown", email: "anon@gmail.com", phone: "234-532-5678" }, { name: "unknown", email: "anon@gmail.com", phone: "234-532-5678" }, { name: "unknown", email: "anon@gmail.com", phone: "234-532-5678" }, { name: "unknown", email: "anon@gmail.com", phone: "234-532-5678" }, { name: "unknown", email: "anon@gmail.com", phone: "234-532-5678" }]
    return (
        <div>
            <Header />

            <main className="row">
                <aside className="col-4">
                    <Search />
                </aside>
                <section className="col-8">
                    <div className="row">
                        {names.map(item => {
                            return <Card name={item} />
                        })}
                    </div>
                </section>
            </main>
        </div>
    )
}
export default MainComponent;