import { Link } from "react-router-dom";

export default function NotFoundPage() {

  return (
    <>
      <div className="page404">
        <h1>404 Page Not found</h1>
      
        <p>Insert clever page not found message.</p>
      
        <p><Link to="/">Return to the homepage</Link>.</p>
      </div>
    </>
  )
}