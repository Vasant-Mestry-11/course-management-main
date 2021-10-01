import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import categoryReducers from "./categoryReducers";
import courseReducers from "./courseReducers";

export default combineReducers({
  errors: errorReducer,
  categories: categoryReducers,
  courses: courseReducers
});
