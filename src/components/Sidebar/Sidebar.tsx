import twitterLogo from "../../assets/logo-twitter.svg"
import { House, Hash, Bell, EnvelopeSimple, BookmarkSimple, FileText, User, DotsThreeCircle } from "@phosphor-icons/react";
import "./Sidebar.css"

export function Sidebar() {
  return (
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
  );
}