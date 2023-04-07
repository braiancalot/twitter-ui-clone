import { Divisor } from "../../components/Divisor/Divisor";
import { Header } from "../../components/Header/Header";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Status.css"

import TextAreaAutoSize from "react-textarea-autosize";

const answers = [
  "Bem legal!",
  "Concordo",
  "Pode ser!!!"
]

export function Status() {
  return (
    <main className="status">
      <Header title="Status" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit et corrupti quia neque voluptate rerum? Omnis voluptates perferendis quae corporis soluta provident aspernatur consequatur architecto debitis aliquam, obcaecati enim." />

      <Divisor />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/braiancalot.png" alt="Braian Calot" />

          <TextAreaAutoSize id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Tweet</button>
      </form>

      {answers.map(answer => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}