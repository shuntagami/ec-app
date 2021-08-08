import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PrimaryButton, TextInput } from "../components/UIkit";
import { signUp } from '../reducks/users/operations'
import { push } from 'connected-react-router'

const SignUp = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const iunputUserName = useCallback((e) => {
    setUsername(e.target.value)
  }, [setUsername]);

  const iunputEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [setEmail]);

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [setPassword]);

  const iunputConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value)
  }, [setConfirmPassword]);


  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={iunputUserName}
      />
      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={iunputEmail}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード（再確認）"}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={"password"}
        onChange={iunputConfirmPassword}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton
          label = { "アカウントを登録する"　}
          onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
        />
        <div className="module-spacer--medium" />
        <p onClick={() => dispatch(push("/signin"))}>アカウントをお持ちの方はこちら</p>
      </div>
    </div>
  )
}

export default SignUp