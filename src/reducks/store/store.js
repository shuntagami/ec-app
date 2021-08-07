import {
  createStore as reduxCreateStore,
  combineReducers,
} from "redux";

//import reducers
import { UsersReducer } from "../users/reducers";

export default function createStore() {
  return reduxCreateStore(
    // 1.分割したReducersをまとめる
    // 2.stateのカテゴリ別
    // 3.オブジェクトをreturnする(stateのデータ構造)
    combineReducers({
      users: UsersReducer,
    }),
  );
}
