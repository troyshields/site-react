import data from "../data/links.json"
import "../styles/FeatureLinks.css"

export default function FeatureLinks() {

  return (
  <>

    <div className="feature-links-container">
      <h2>On the internet</h2>
      <div className="feature-links">
        
        {data.links.map((item, index) => (
          <div key={item.id} className="feature-link-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.title} />
            </a>
          </div>
        ))}

      </div>
    </div>
  </>
  )
}