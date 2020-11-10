import { generateUser } from "../data/static-data";

export default (state = generateUser(), action) => {
  return state;
};
