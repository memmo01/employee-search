import React from "react"
import Header from "./Header"
import Search from "./Search"

function MainComponent() {
    return (
        <div>
            <Header />

            <main className="row">
                <aside className="col-4">
                    <Search />
                </aside>
                <section className="col-8"> users displayed section</section>
            </main>
        </div>
    )
}
export default MainComponent;