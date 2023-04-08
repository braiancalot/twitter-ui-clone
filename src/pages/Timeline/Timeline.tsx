import { Divisor } from "../../components/Divisor/Divisor";
import { Header } from "../../components/Header/Header";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Timeline.css"

import TextAreaAutoSize from "react-textarea-autosize";
import { FormEvent, useState, KeyboardEvent } from "react";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Teste",
    "Deu certo"
  ]);


  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet("")
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet("")
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/braiancalot.png" alt="Braian Calot" />

          <TextAreaAutoSize
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onChange={(event) => setNewTweet(event.target.value)}
            onKeyDown={handleHotkeySubmit}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Divisor />

      {tweets.map(tweet => (
        <Tweet key={tweet} content={tweet} />
      ))}



    </main>
  );
}