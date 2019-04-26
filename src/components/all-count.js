import React, { useContext } from "react"
import { Store } from "../store"

const AllCount = () => {
  const { state } = useContext(Store)
  return (
    <div className="container">
      <section className="section all-count">
        <div className="card">
          <h2 className="subtitle is-4">{state.AllCount}</h2>
        </div>
      </section>
    </div>
  )
}

export default AllCount
