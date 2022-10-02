import React from 'react';
import {Link} from 'react-router-dom';
import s from './s.module.css';
import insta from '../../image/insta.svg';
import facebook from '../../image/fb.svg';
import whatsapp from '../../image/wapp.svg';
import chrome from '../../image/chrome.svg';
import { useSelector } from 'react-redux';

const Content = () => {

  // const dispatch = useDispatch();
  // const state = useSelector(state => state)
  // // console.log(edit)
  // const edit = ''
  // console.log(state)

  return (
    <div className={s.content}>
      <div className={s.discription}>{"edit"}</div>
      <div className={s.discription}>We are building a new world and educating a new generation</div>
      <div className={s.icon__wrapper}>
      <a href='https://www.instagram.com/gg_consul/'>
        <i className={s.iconBg}  >
          <img className={s.icon} src={insta} alt="icon" />
        </i>
      </a>
      <a href='https://www.facebook.com/stranniy'>
        <i className={s.iconBg}  >
          <img className={s.icon} src={facebook} alt="icon" />
        </i>
      </a>
      <a href='https://wa.me/996755616116/'>
        <i className={s.iconBg}  >
          <img className={s.icon} src={whatsapp} alt="icon" />
        </i>
      </a>
      <a href='https://surveyheart.com/form/5fbf8cca3012881cd9cdb643#welcome'>
        <i className={s.iconBg} >
          <img className={s.icon} src={chrome} alt="icon" />
        </i>
      </a>
      </div>
      <button id={s.btnTel}>
        <a className={s.btn} href='tel: +996755616116'>+996755616116</a>
      </button>
      <button className={s.btnContact}>
        <a className={s.btn} href='http://vipcrd.ru/user/14/download'>Сохранить контакты</a>
      </button>
      <Link to="/reduct"  className={s.linkContact}>
        <button type="button" className={s.btnContact}  >
          Редактировать
        </button>
      </Link>
    </div>
  );
};

export default Content;