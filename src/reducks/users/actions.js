export const SIGN_IN = 'SIGN_IN';
export const signInAction = (userstate) => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      role: userstate.role,
      uid: userstate.uid,
      username: userstate.username
    }
  }
};

export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = () => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      uid: '',
      username: ''
    }
  }
};
