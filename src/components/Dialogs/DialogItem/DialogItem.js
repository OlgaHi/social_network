import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
   return(
      <div className={`${s.dialog} ${s.active}`}>
      <div className={s.item}>
      <img src='https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg'/>
      </div>
       <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
   )
}

export default DialogItem;