import { useState } from "react"
import { Link } from "react-router-dom"

import { resources, tags } from "../../data"
import { SecondaryBtn } from "../../components/Buttons"

import "./homepage.css"

import { FaExternalLinkAlt } from "react-icons/fa";

function Homepage() {

  const [resourcesArray, setResourcesArray] = useState(resources)
  const [activeTag, setActiveTag] = useState("All")

  function filterResourceArray(e) {
    const tag = e.target.textContent
    if (tag === "All") {
      setResourcesArray(resources)
    } else {
      const filteredResources = resources.filter(resource => resource.tags.includes(tag))
      setResourcesArray(filteredResources)
    }
    setActiveTag(tag)
  }

  return (
    <main id="main" className="homepage container flex-container">
      <section className="homepage__hero flex-container">
        <h1 className="hero__title">
          Some Cool and Useful Resources for <span>Developers</span>
        </h1>
      </section>
      <section className="resources">
        <div className="resources__tags">
          <SecondaryBtn type="button" text="All" className={`tag ${activeTag === "All" ? "active-tag" : ""}`}  onClick={filterResourceArray} />
          {
            tags.map(tag => (
              <SecondaryBtn 
                type="button" 
                text={tag} 
                className={`tag ${activeTag === tag ? "active-tag" : ""}`} 
                key={tag} onClick={filterResourceArray} />
            ))
          }
        </div>
        <div className="resources__container">
          {
            resourcesArray.map(resource => (
              <div className="resource" key={resource.title}>
                <h2 className="resource__title">{ resource.title }</h2>
                <p className="resource__desc">{ resource.description }</p>
                <Link target="_blank" className="flex-container link-btn" to={resource.url}>
                  <span>Try now</span>
                  <FaExternalLinkAlt />
                </Link>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Homepage
