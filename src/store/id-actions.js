import axios from "axios";
import { uiActions } from "./ui-slice";
import { authActions } from "./auth-slice";

export const idsave = () => {
  const email = sessionStorage
    .getItem("emailtoken")
    .replace(".", "")
    .replace("@", "")
    .replace("g", "");
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  const time = sessionStorage.getItem("time");
  const add = {
    email: email,
    token: token,
    id: id,
    time: time,
  };

  return async (dispatch) => {
    // dispatch(
    //         uiActions.showNotification({
    //           status: 'pending',
    //           title: 'Sending...',
    //           message: 'id mail pending!',
    //         })
    //      );
    const sent = async () => {
      const response = await axios.put(
        `https://react-hariom-default-rtdb.firebaseio.com/${email}.json`,
        add
      );

      return response;
    };

    try {
      await sent();

      // dispatch(
      //   uiActions.showNotification({
      //     status: 'sucess',
      //     title: 'sucess...',
      //     message: 'id mail sucessfully',
      //   })
      // );
    } catch (error) {
      console.log(error);
      // dispatch(
      //   uiActions.showNotification({
      //     status: 'error',
      //     title: 'Error!',
      //     message: `id mail failed! ${error.response.data.error.message}`,
      //   })
      // );
    }
  };
};

export const idget = () => {
  const token = sessionStorage.getItem("token");

  const id = sessionStorage.getItem("id");

  const email = sessionStorage
    .getItem("emailtoken")
    .replace(".", "")
    .replace("@", "")
    .replace("g", "");

  const time = sessionStorage.getItem("time");

  return async (dispatch) => {
    // dispatch(
    //         uiActions.showNotification({
    //           status: 'pending',
    //           title: 'Sending...',
    //           message: 'id mail pending!',
    //         })
    //       );
    const sent = async () => {
      const response = await axios.get(
        `https://react-hariom-default-rtdb.firebaseio.com/${email}.json`
      );

      const data = await response.data;
      return data;
    };

    try {
      const data = await sent();

      if (data === null) {
      } else if (
        data.email === email &&
        data.id === id &&
        data.token === token &&
        data.time === time
      ) {
      } else {
        dispatch(authActions.logout());
      }

      // dispatch(
      //   uiActions.showNotification({
      //     status: 'sucess',
      //     title: 'sucess...',
      //     message: 'id mail sucessfully',
      //   })
      // );
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `id mail failed!`,
        })
      );
    }
  };
};
