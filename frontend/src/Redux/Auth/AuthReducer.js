import * as types from "./actionTypes";
const initialState = {
  isAuth: JSON.parse(localStorage.getItem("fashionClub_userData"))?true:false,
  isLoading: false,
  userData: JSON.parse(localStorage.getItem("fashionClub_userData")) || {},
  isError:false,
};
const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST: {
      return { ...state, isLoading: true, isAuth: false };
    }
    case types.SIGNUP_SUCCESS: {
      return { ...state, isLoading: false ,isError:false};
    }
    case types.SIGNUP_FAILURE: {
      return { ...state, isLoading: false, isAuth: false ,isError:true};
    }
    case types.SIGNIN_REQUEST: {
      return { ...state, isLoading: true, isAuth: false };
    }
    case types.SIGNIN_SUCCESS: {
        localStorage.setItem("fashionClub_userData",JSON.stringify(payload))
      return { ...state, isLoading: false, isAuth: true, userData: payload,isError:false };
    }
    case types.SIGNIN_FAILURE: {
      return { ...state, isLoading: false, isAuth: false,isError:true };
    }
    case types.USER_LOGOUT:{
        localStorage.clear("fashionClub_userData")
        return {...state,isAuth:false}
    }
    default:
      return state;
  }
};

export { AuthReducer };
