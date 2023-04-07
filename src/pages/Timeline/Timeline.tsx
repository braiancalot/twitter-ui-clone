import { Divisor } from "../../components/Divisor/Divisor";
import { Header } from "../../components/Header/Header";
import { Tweet } from "../../components/Tweet/Tweet";

const tweets = [
  "Meu primeiro tweet",
  "Teste",
  "Deu certo"
]

export function Timeline() {
  return (
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

      {tweets.map(tweet => (
        <Tweet key={tweet} content={tweet} />
      ))}



    </main>
  );
}