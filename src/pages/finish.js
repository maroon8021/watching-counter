/* eslint-disable prettier/prettier */
/* eslint-disable quote-prop */
import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import { Store } from "../store"
import Layout from "../components/layout"
import axios from "axios"
//import axiosJsonpAdapter from "axios-jsonp"
import Util from "../util"
import config from "../config"
//import google from "googleapis"

//const OAuth2 = google.auth.OAuth2;
const { targetURL /*CLIENT_ID, CLIENT_SECRET*/ } = config
const Finish = () => {
  const { state, dispatch } = useContext(Store)
  // eslint-disable-next-line no-console
  console.log(`Current store ${state}`)
  useEffect(() => {
    Util.checkFlow(state)
    const axiosInstance = axios.create({
      headers: {
        Authorization:
          "Bearer ya29.Glz4Bkyz4nHOC3JTXDS-M1cmiPcJ3TyD4NLf2OcMq5z4QC44sLTnH5B6wqCavCv3MdpJMy6sKo7CCAkTIT_wJBqG7tAZKfA66QQIZ1MRIFauE_gNPJj6-1GwJkC2xA",
      },
    })

    // const auth = new OAuth2(CLIENT_ID, CLIENT_SECRET);
    // auth.setCredentials({
    //   access_token: process.env['ACCESS_TOKEN'],
    //   refresh_token: process.env['REFRESH_TOKEN']
    // });

    // const options = {
    //   //method: "post",
    //   //url: targetURL,
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   //adapter: axiosJsonpAdapter,
    //   proxyHeaders: false,
    //   credentials: false,
    //   // params: {
    //   //   uuid: Util.makeUuid(),
    //   //   targetSheet: "2019-04-28-minatokita",
    //   //   watchYoutube: state.youtubeCount,
    //   //   watchTV: state.answeredCount,
    //   // },
    // }
    const options = new URLSearchParams()
    const header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
    header["Authorization"] =
      "Bearer ya29.Glz4BoPJnFVo4qWiaxYcb1AoZjh_5sIfFITZmSbKIc7rt21ql9SqfF714HmyLrsP-Xg-hvjLgM90BcziXWKxoB3pFZGVl3KhitVxicc6h5FfK0Nq0o4YCIkNQoV90g"
    options.append("headers", header)
    // options.append("headers", {
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    //   Authorization:
    //     "Bearer ya29.Glz4BnximcwXSgGUXatPdBj3wDgWe9PXZcilkHa90KwxiWbIbYC9LBjZGOXFwNvx2JhQ9J7ys8rThcj53C6F5TWt6tDfQ9weOS6Ex_SUY6l-ouYp4mqiDHJNmmBj0Q",
    // })

    // options["headers"] = {
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    // }
    // const params = {
    //   uuid: Util.makeUuid(),
    //   targetSheet: "2019-04-28-minatokita",
    //   watchYoutube: state.youtubeCount,
    //   watchTV: state.answeredCount,
    // }
    const params = new URLSearchParams()
    params.append("function", "doPost")
    params.append(
      "parameters",
      JSON.stringify({
        postData: {
          contents: {
            uuid: "hugahugahugaaaa",
            watchYoutube: 1,
            watchTV: 1,
            targetSheet: "2019-04-28-minatokita",
          },
        },
      })
    )
    params.append("devMode", true)
    params.append("scriptId", "1mYFNGklj4iWp9qYqkOqiUmLkO3JnZQ7mqE23dhCMDLU")

    // params.append("uuid", Util.makeUuid())
    // params.append("targetSheet", "2019-04-28-minatokita")
    // params.append("watchYoutube", state.youtubeCount)
    // params.append("watchTV", state.answeredCount)
    // params["uuid"] = Util.makeUuid()
    // params["targetSheet"] = "2019-04-28-minatokita"
    // params["watchYoutube"] = state.youtubeCount
    // params["watchTV"] = state.answeredCount

    // eslint-disable-next-line no-console
    console.log(options)
    axiosInstance
      .post(targetURL, params, options)
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res)
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))

    // return したらunmount時に実行
  }, [])
  //dispatch({ type: "ADD_ALL_CPUNT" })
  return (
    <Layout>
      <div className="container">
        <section className="section answer">
          <div className="card">
            <h2 className="subtitle is-4">登録が完了しました</h2>
            <div className="columns">
              <div className="column">
                <Link to="/">
                  <button
                    className="button default"
                    onClick={() => {
                      dispatch({ type: "ADD_YOUTUBE_COUNT" })
                    }}
                  >
                    <span>Go Back TopPage</span>
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
