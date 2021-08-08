import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../reducks/users/operations";
import { getUserId } from "../reducks/users/selectors";
import { getUserName } from "../reducks/users/selectors";

const Home = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state);
  const uid = getUserId(selector)
  const userName = getUserName(selector)

  return (
    <div>
      <h2>Home</h2>
      <p>ユーザーID: { uid }</p>
      <p>ユーザー名: { userName }</p>
      <button onClick = {() => dispatch(signOut())}>SIGN OUT</button>
    </div>
  )
}
export default Home;
