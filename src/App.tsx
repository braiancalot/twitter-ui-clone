import twitterLogo from "./assets/logo-twitter.svg"
import "./global.css"
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple, FileText, User, DotsThreeCircle, Sparkle } from "@phosphor-icons/react";
import { Tweet } from "./components/Tweet";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <aside className="sidebar">
          <img src={twitterLogo} alt="Logo" className="logo" />

          <nav className="main-navigation">
            <a className="active" href="#">
              <House weight="fill" />
              Home
            </a>
            <a href="#">
              <Hash />
              Explore
            </a>
            <a href="#">
              <Bell />
              Notifications
            </a>
            <a href="#">
              <EnvelopeSimple />
              Messages
            </a>
            <a href="#">
              <BookmarkSimple />
              Bookmarks
            </a>
            <a href="#">
              <FileText />
              Lists
            </a>
            <a href="#">
              <User />
              Profile
            </a>
            <a href="#">
              <DotsThreeCircle />
              More
            </a>
          </nav>

          <button className="new-tweet" type="button">Tweet</button>
        </aside>

        <div className="content">
          <main className="timeline">
            <div className="timeline-header">
              Home
              <Sparkle />
            </div>

            <form className="new-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/braiancalot.png" alt="Braian Calot" />

                <textarea id="tweet" placeholder="What's happening?" />
              </label>

              <button type="submit">Tweet</button>
            </form>

            <div className="divisor" />

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
