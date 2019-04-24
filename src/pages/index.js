import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <section className="section answer">
        <div className="card">
          <h2 className="subtitle is-4">回答してもらえましたか？</h2>
          <div className="columns">
            <div className="column">
              <Link to="/page-2/">
                <button className="button yes" onClick={}>
                  <span>Yes</span>
                </button>
              </Link>
            </div>
            <div className="column">
              <Link to="/page-2/">
                <button className="button no">
                  <span>No</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
