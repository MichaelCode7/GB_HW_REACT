import { useState } from "react";
import style from "./Message.module.css"

export const Message = (props) => {
	
	return (
				<>
				<div className={style.wrapper}>
				<div className={style.logoContainer}>
						<div className={style.logo}></div>
						<h3 className={style.userName}>Michael</h3>
					</div>
					<div className={style.message_wrapper}>
						<p className={style.par}>{props.text}</p>
					</div>
				</div>
				</>
	);
}