/* eslint-disable no-undef */
const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ALL_COUNT":
      return {
        ...state,
        allCount: 1,
      }
    case "ADD_ANSWER_COUNT":
      return {
        ...state,
        answeredCount: 1,
      }
    case "ADD_YOUTUBE_COUNT":
      return {
        ...state,
        youtubeCount: 1,
      }
    case "ADD_TV_COUNT":
      return {
        ...state,
        TVCount: 1,
      }
    case "START_QUESTIONNAIRE":
      return {
        ...state,
        isStarted: true,
      }
    default:
      return state
  }
}

export default reducer
