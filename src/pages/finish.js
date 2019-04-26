import React, { useContext } from "react"
import { Link, navigate } from "gatsby"
import { Store } from "../store"
import Layout from "../components/layout"

const Finish = () => {
  const { state, dispatch } = useContext(Store)
  // eslint-disable-next-line no-console
  console.log(`Current store ${state}`)
  if (state.answeredCount === 0) {
    navigate("/")
  }
  dispatch({ type: "ADD_ALL_CPUNT" })
  return (
    <Layout>
      <div className="container">
        <section className="section answer">
          <div className="card">
            <h2 className="subtitle is-4">登録が完了しました</h2>
            <div className="columns">
              <div className="column">
                <Link to="/watch-tv/">
                  <button
                    className="button yes"
                    onClick={() => {
                      dispatch({ type: "ADD_YOUTUBE_COUNT" })
                    }}
                  >
                    <span>Yes</span>
                  </button>
                </Link>
              </div>
              <div className="column">
                <Link to="/watch-tv/">
                  <button className="button no">
                    <span>No</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>Previos : {state.answeredCount}</div>
        </section>
      </div>
    </Layout>
  )
}

export default Finish