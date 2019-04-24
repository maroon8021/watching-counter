import React, { useReducer } from "react"
import reducer from "./reducer"

const initialState = {
  allCount: 0,
  answeredCount: 0,
  youtubeCount: 0,
  TVCount: 0,
}
// allCount can be come from GSS data

const Store = React.createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

export { Store, Provider }
