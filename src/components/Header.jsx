import NavBar from "./NavBar";
import "./Header.css"

export default function Header() {

  return (
  <>
    <header>
      <div className="skip-content-container">
      <a href="#main" className="skip-to-content sr-only">
          Skip to main content
        </a>
      </div>
      <div className="inner">
        <NavBar/>
      </div>
    </header>
  </>
  )
}