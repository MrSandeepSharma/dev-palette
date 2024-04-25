import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { resources, tags } from "../../data"
import { SecondaryBtn } from "../../components/Buttons"

import "./homepage.css"

import { FaExternalLinkAlt } from "react-icons/fa";
import { Pagination } from "@mui/material"

const ITEMS_PER_PAGE = 6

function Homepage() {

  const [resourcesArray, setResourcesArray] = useState(resources)
  const [activeTag, setActiveTag] = useState("All")
  const [pageCount, setPageCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentResources = resourcesArray.slice(startIndex, endIndex);

  function filterResourceArray(e) {
    const tag = e.target.textContent
    setCurrentPage(1)
    if (tag === "All") {
      setResourcesArray(resources)
    } else {
      const filteredResources = resources.filter(resource => resource.tags.includes(tag))
      setResourcesArray(filteredResources)
    }
    setActiveTag(tag)
  }

  function handleChange(e, value) {
    setCurrentPage(value)
  }

  useEffect(()=> {
    setPageCount(Math.ceil(resourcesArray.length / ITEMS_PER_PAGE))
  }, [resourcesArray])

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
            currentResources.map((resource) => (
                <div className="resource" key={resource.title}>
                  <h2 className="resource__title">{ resource.title }</h2>
                  <p className="resource__desc">{ resource.description }</p>
                  <Link target="_blank" className="flex-container link-btn outline" to={resource.url}>
                    <span>Try now</span>
                    <FaExternalLinkAlt />
                  </Link>
                </div>
            ))
          }
        </div>
        <div className="pagination">
          <Pagination count={pageCount} page={currentPage} variant="outlined" shape="rounded" onChange={handleChange} />
        </div>
      </section>
    </main>
  )
}

export default Homepage
