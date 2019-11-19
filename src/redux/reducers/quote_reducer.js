import { RANDOM_QUOTE } from "../constants/reduxTypes";

const INITIAL_STATE = {};

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Time is gold.",
    author: "Anon"
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RANDOM_QUOTE:
      return quotes[Math.floor(Math.random() * quotes.length)];
    default:
      return state;
  }
};
