import React from 'react';
import s from './s.module.css';
import {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveToLocalStorage } from '../../store/authSlice';


const Authorization = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailDirty,setEmailDirty] = useState(false);
    const [passwordDirty,setPasswordDirty] = useState(false);
    const [emailError,setEmailError] = useState("Email cannot be empty");
    const [passwordError,setPasswordError] = useState("Password cannot be empty");
    const [formValid, setFormValid] = useState (true);
    const [type, setType ] = useState(true);
    const [styleClass, setStyleClass ] = useState(true);


    const dispatch = useDispatch();


        useEffect ( () => {
            if (emailError || passwordError) {
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Incorrect email")
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
            if (e.target.value.length < 8 ||e.target.value.length > 16) {
                setPasswordError("Password must be longer than 8 or less than 16")
                if(!e.target.value) {
                    setPasswordError("Password cannot be empty")
                }
            }else{
                setPasswordError("")
            }      
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setEmailDirty(true)
                break
            case "password":
                setPasswordDirty(true)
                break
        }
    }

    function removeType() {
        setType(current => !current);

        setStyleClass(prev => !prev);
    }

    function onSubmit(e) {
        e.preventDefault();

        dispatch(saveToLocalStorage([{value: email, title: "email"}, {value: password, title: "password"}]))
        
    }
    
    return (
        <div className={s.Authorization}>
            <h1 className=  {s.Authorization__title}>Login to your profile</h1>
            <form onSubmit={onSubmit}>
            <div className=  {s.Authorization__input}>
                <h3>Email</h3>
                
                <input onChange={e => emailHandler(e)} value={email} onBlur = {e => blurHandler(e)} name="email" type="text" />
                <div className={s.Authorization__btn}>
                {(emailDirty && emailError) && <div style={{color:"red", position:"absolute"}}>{emailError}</div>}
                </div>
                <h3>Password</h3>
                <input type={type ? "password" : "text"} onChange={e => passwordHandler(e)} value={password} onBlur = {e => blurHandler(e)}  name="password" />
                <div className={s.Authorization__btn__2}>
                {(passwordError && passwordDirty) && <div style={{color:"red", position:"absolute",}}>{passwordError}</div>}
                </div>
                <button type='button' className={styleClass ? s.setType_input_btn : s.active} onClick={removeType}>
                        <img width={"20px"} height={"20px"} src="https://www.svgrepo.com/show/12044/eye.svg" alt="" />
                </button>
            </div>
            <div className=  {s.Authorization__come}>
                <div className=  {s.btn__come}>
                    <button disabled={!formValid} type='submit'>To come in</button>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Authorization;