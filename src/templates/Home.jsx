import React from "react";
import { useSelector } from "react-redux";
import { getUserId } from "../reducks/users/selectors";
import { getUserName } from "../reducks/users/selectors";

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector)
  const userName = getUserName(selector)
  return (
    <div>
      <h2>Home</h2>
      <p>ユーザーID: { uid }</p>
      <p>ユーザー名: { userName }</p>
    </div>
  )
}
export default Home;
