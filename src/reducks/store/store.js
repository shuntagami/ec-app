import { connectRouter, routerMiddleware } from "connected-react-router";
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";

//import reducers
import { UsersReducer } from "../users/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    // 1.分割したReducersをまとめる
    // 2.stateのカテゴリ別
    // 3.オブジェクトをreturnする(stateのデータ構造)
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
}
