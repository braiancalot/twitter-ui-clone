import { ChatCircle, ArrowsClockwise, Heart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./Tweet.css"

interface TweetProps {
  content: String;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/braiancalot.png" alt="Braian Calot" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Braian Calot</strong>
          <span>@braiancalot</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
} 