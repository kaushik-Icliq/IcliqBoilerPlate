import {UserSliceAction} from '../reducers/userReducer';

export const login = (email, password) => {
  return async dispatch => {
    const data = {
      email: email,
      password: password,
    };
    dispatch(UserSliceAction.setLoading(true));
    setTimeout(() => {
      dispatch(UserSliceAction.setLoading(false));
      dispatch(UserSliceAction.setUserData(data));
    }, 2000);

    // const response = await services.login(data);
    // if (response.status === true) {
    //   dispatch(
    //     getLoggedInUser(
    //       response.data.email,
    //       response.data.accessToken,
    //       response.data.tokenType,
    //     ),
    //   );
    // } else {
    //   dispatch(UserSliceAction.setLoading(false));
    //   dispatch(
    //     PopupSliceAction.show({
    //       type: 'error',
    //       position: 'top',
    //       text1: `${response.message}`,
    //     }),
    //   );
    //   console.log('error ==> ', response.message);
    // }
  };
};

export const logout = () => {
  return async dispatch => {
    dispatch(UserSliceAction.setLoading(true));
    setTimeout(() => {
      dispatch(UserSliceAction.setLoading(false));
      dispatch(UserSliceAction.logout());
    }, 2000);
  };
};
