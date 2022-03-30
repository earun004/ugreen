import * as api from "../api/index";
import { COUNT_VISITORS } from "./type";

export const AddVisitors = () => async (dispatch) => {
  const AddVisitors = await api.AddVisitors();
  try {
    dispatch({
      type: COUNT_VISITORS,
      payload: AddVisitors.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchVisitors = () => async (dispatch) => {
  const fetchVisitors = await api.fetchVisitors();
  try {
    dispatch({
      type: COUNT_VISITORS,
      payload: fetchVisitors.data,
    });
  } catch (error) {
    console.log(error);
  }
};
