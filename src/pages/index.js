import React, { useContext } from "react"
import { Link } from "gatsby"
import { Store } from "../store"
import Layout from "../components/layout"
import AllCount from "../components/all-count"

const IndexPage = () => {
  const { dispatch } = useContext(Store)
  return (
    <Layout>
      <div className="container">
        <section className="section answer">
          <div className="card">
            <h2 className="subtitle is-4">1. 回答してもらえましたか？</h2>
            <div className="columns">
              <div className="column">
                <Link to="/watch-youtube/">
                  <button
                    className="button yes"
                    onClick={() => {
                      dispatch({ type: "START_QUESTIONNAIRE" })
                      dispatch({ type: "ADD_ANSWER_COUNT" })
                    }}
                  >
                    <span>Yes</span>
                  </button>
                </Link>
              </div>
              <div className="column">
                <Link to="/page-2/">
                  <button
                    className="button no"
                    onClick={() => {
                      dispatch({ type: "START_QUESTIONNAIRE" })
                    }}
                  >
                    <span>No</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <AllCount />
      </div>
    </Layout>
  )
}

export default IndexPage
