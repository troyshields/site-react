import data from "../data/links.json"
import "./FeatureLinks.css"

export default function FeatureLinks() {

  return (
  <>

    <div className="feature-links-container">
      <h2>Find me on the internet</h2>
      <div className="feature-links">
        
        {data.links.map((item, index) => (
          <div key={item.id} className="feature-link-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.title} />
              <h3>{item.title}</h3>
            </a>
          </div>
        ))}

      </div>
    </div>
  </>
  )
}