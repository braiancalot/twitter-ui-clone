import { Divisor } from "../../components/Divisor/Divisor";
import { Header } from "../../components/Header/Header";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Status.css"

import TextAreaAutoSize from "react-textarea-autosize";
import { FormEvent, useState, KeyboardEvent } from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";

const answers = [
  "Bem legal!",
  "Concordo",
  "Pode ser!!!"
]

export function Status() {
  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    "Bem legal!",
    "Concordo",
    "Pode ser!!!"
  ]);


  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer("")
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer("")
    }
  }

  return (
    <main className="status">
      <Header title="Status" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit et corrupti quia neque voluptate rerum? Omnis voluptates perferendis quae corporis soluta provident aspernatur consequatur architecto debitis aliquam, obcaecati enim." />

      <Divisor />

      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img src="https://github.com/braiancalot.png" alt="Braian Calot" />

          <TextAreaAutoSize
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            onKeyDown={handleHotkeySubmit}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Tweet</span>
        </button>
      </form>

      {answers.map(answer => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}