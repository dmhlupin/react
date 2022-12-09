import React from "react";
import { useDispatch, useSelector } from "react-redux";



export const UserProfile = () => {
    const dispatch = useDispatch();
    const checked = useSelector((store) => store.profile).checkbox_1;
    console.log(checked)

    const changeCheckbox = (event) => {
      console.log(event.target.name, ', ', checked);
      dispatch({ type: 'SWITCH_CHECKBOX', payload: {[event.target.name]: event.target.checked}})
    }
    return (
      <div>
        <h3>Профиль пользователя</h3>
          <input type="checkbox" name="checkbox_1" id="checkbox_1" checked={checked} onChange={changeCheckbox} />
          <label htmlFor="checkbox_1">{checked.toString()}</label>


      </div>
    )
  }