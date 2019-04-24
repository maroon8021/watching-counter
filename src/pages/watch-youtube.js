import React, { useContext } from "react"
import { Link } from "gatsby"
import { Store } from "./store"
import Layout from "../components/layout"
import AllCount from "../components/all-count"

const WatchYoutube = () => {
  const { dispatch } = useContext(Store)
  return (
    <Layout>
      <div className="container">
        <section className="section answer">
          <div className="card">
            <h2 className="subtitle is-4">Youtube動画を見ていましたか？</h2>
            <div className="columns">
              <div className="column">
                <Link to="/page-2/">
                  <button
                    className="button yes"
                    onClick={dispatch({ type: "ADD_YOUTUBE_COUNT" })}
                  >
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
        <AllCount />
      </div>
    </Layout>
  )
}

export default WatchYoutube
