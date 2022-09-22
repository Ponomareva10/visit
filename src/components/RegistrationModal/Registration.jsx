import React from 'react';
import s from './s.module.css';

const Registration = () => {
    return (
        <div className={s.Registration}>
            <h1 className={s.Registration__title}>Create your profile</h1>
            <div className={s.Registration__input_cont}>
                <h3 className={s.Registration__input_title}>Name</h3>
                <input className={s.Registration__input} type="text" />
            </div>
            <div className={s.Registration__input_cont}>
                <h3 className={s.Registration__input_title}>Email</h3>
                <input className={s.Registration__input} type="text" />
            </div>
            <div className={s.Registration__password_cont}>
                <div className={s.Registration__input_cont}>
                    <h3 className={s.Registration__input_title}>Password</h3>
                    <input className={s.Registration__input} type="text" />
                </div>
                <div className={s.Registration__input_cont}>
                    <h3 className={s.Registration__input_title}>Repeat password</h3>
                    <input className={s.Registration__input} type="text" />
                </div>
            </div>
            <button className={s.Registration__btn}>Register</button>
        </div>
    );
};

export default Registration;