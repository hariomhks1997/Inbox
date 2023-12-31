import axios from "axios";
import { uiActions } from "./ui-slice";
import { authActions } from "./auth-slice";
import { idsave } from "./id-actions";

export const Signup = (email1, password1) => {
  console.log(email1, password1);

  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "SignUpIn...",
        message: "SignUp data pending!",
      })
    );
    const signup = async () => {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
        {
          email: email1,
          password: password1,
          returnSecureToken: true,
        }
      );

      return response;
    };

    try {
      await signup();

      dispatch(
        uiActions.showNotification({
          status: "sucess",
          title: "sucess...",
          message: "SignUp data sucessfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `SignUp data failed! ${error.response.data.error.message}`,
        })
      );
    }
  };
};

export const SignIn = (email1, password1) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Logging...",
        message: "Logging data pending!",
      })
    );
    const signin = async () => {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
        {
          email: email1,
          password: password1,
          returnSecureToken: true,
        }
      );

      return response;
    };

    try {
      const data = await signin();
      dispatch(authActions.login(data.data.idToken));
      dispatch(authActions.emaillogin(data.data.email));
      setTimeout(() => {
        dispatch(idsave());
      }, 2000);
      console.log(data);
      dispatch(
        uiActions.showNotification({
          status: "sucess",
          title: "sucess...",
          message: "Logging data sucessfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `Logging data failed! ${error.response.data.error.message}`,
        })
      );
    }
  };
};

export const Forgetpassword = (email) => {
  console.log(email);

  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "email link...",
        message: "Email Link Sending pending!",
      })
    );
    const forget = async () => {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
        {
          requestType: "PASSWORD_RESET",
          email: email,
        }
      );

      return response;
    };

    try {
      await forget();

      dispatch(
        uiActions.showNotification({
          status: "sucess",
          title: "sucess...",
          message: "Email Link Send Sucessfully",
        })
      );
      dispatch(authActions.forget(true));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `Eamil Link Send failed! ${error.response.data.error.message}`,
        })
      );
    }
  };
};

export const verifyemail = () => {
  const token = sessionStorage.getItem("token");

  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "verifying email...",
        message: "verify Email pending!",
      })
    );
    const verify = async () => {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4",
        {
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }
      );

      return response;
    };

    try {
      await verify();

      dispatch(
        uiActions.showNotification({
          status: "sucess",
          title: "sucess...",
          message: "verify Email Sucessfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `verify email failed! ${error.response.data.error.message}`,
        })
      );
      //dispatch(authActions.logout())
    }
  };
};
