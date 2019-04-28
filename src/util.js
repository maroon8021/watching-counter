import { navigate } from "gatsby"

export default class Util {
  static makeUuid() {
    const idLength = 6
    const chars = "abcdefghijklmnopqrstuvwxyz"
    const cl = chars.length
    let newId = ""
    for (let index = 0; index < idLength; index++) {
      newId += chars[Math.floor(Math.random() * cl)]
    }
    const date = new Date()
    return (newId += String(date.getHours()) + String(date.getMinutes()))
  }
  static checkFlow(state) {
    if (!state.isStarted) {
      navigate("/")
      return
    }
  }
}
