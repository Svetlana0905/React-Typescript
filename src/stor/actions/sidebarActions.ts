import { AppDispatch } from "..";
import { sidebarSlice } from "../slices/SidebarSlice";

export const toggleSidebar = (data: boolean) => {
  return (dispatch: AppDispatch) => {
    dispatch(sidebarSlice.actions.toggleSidebar(data));
  };
};
