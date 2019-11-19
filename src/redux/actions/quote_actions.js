import { RANDOM_QUOTE } from "../constants/reduxTypes";

export const randomQuote = () => async dispatch => {
  return dispatch({
    type: RANDOM_QUOTE
  });
};
