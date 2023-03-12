
import "./global.css"

import { Sidebar } from "./components/Sidebar/Sidebar"
import { Header } from "./components/Header/Header";
import { Divisor } from "./components/Divisor/Divisor";
import { Tweet } from "./components/Tweet/Tweet";

function App() {
  return (
    <div className="App">
      <div className="layout">

        <Sidebar />

        <div className="content">
          <main className="timeline">
            <Header title="Home" />

            <form className="new-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/braiancalot.png" alt="Braian Calot" />

                <textarea id="tweet" placeholder="What's happening?" />
              </label>

              <button type="submit">Tweet</button>
            </form>

            <Divisor />

            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
