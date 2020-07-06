import { useReducer } from 'react'

const initialRating = {
  totalRating: 0,
  overallRating: 0,
  starsCount: [0, 0, 0, 0, 0]
}

const ratingReducer = (state, action) => {
  let totalRating = 0
  let overallRating = 0
  const starsCount = [0, 0, 0, 0, 0]

  if (Array.isArray(action)) {
    action.forEach(r => {
      totalRating += 1
      overallRating += r
      starsCount[r - 1] += 1
    })
  } else if (Number.isInteger(action)) {
    totalRating += 1
    overallRating += action
    starsCount[action - 1] += 1
  }

  return {
    ...state,
    totalRating: state.totalRating + totalRating,
    overallRating: (((state.overallRating * state.totalRating) + overallRating) /
                    (state.totalRating + totalRating) || 0).toFixed(2),
    starsCount: state.starsCount.map((s, i) => s + starsCount[i])
  }
}

const useRating = (stars = []) => {
  const [rating, dispatchRating] = useReducer(ratingReducer, ratingReducer(initialRating, stars))

  return [rating, dispatchRating]
}

export default useRating
