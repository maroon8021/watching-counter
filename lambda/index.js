/* eslint-disable quote-props */
/* eslint-disable prettier/prettier */
const { google } = require("googleapis")
console.log(google)
const OAuth2 = google.auth.OAuth2

exports.handler = (event, context) => {
  const auth = new OAuth2("", "")
  auth.setCredentials({
    access_token: process.env["ACCESS_TOKEN"],
    refresh_token: process.env["REFRESH_TOKEN"],
  })
  const script = google.script("v1")
  return new Promise((resolve, reject) => {
    script.scripts.run(
      {
        auth: auth,
        scriptId: "",
        resource: {
          function: "doPost",
          parameters: {
            parameters: [
              {
                postData: {
                  contents: {
                    uuid: "hugahugahugaaaa",
                    watchYoutube: 1,
                    watchTV: 1,
                    targetSheet: "2019-04-28-minatokita",
                  },
                },
              },
            ],
          },
          devMode: true,
        },
      },
      (err, result) => {
        if (err) {
          console.log(err)
          reject(new Error(err))
        } else {
          resolve(result)
        }
      }
    )
  })
}
