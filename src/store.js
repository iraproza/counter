import { createStore } from "redux";

import RootRedux from "./Reducers/RootReducer";

const store = createStore(RootRedux);
export default store;