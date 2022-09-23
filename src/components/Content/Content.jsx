import React from 'react';
import s from './s.module.css';
import insta from '../../image/insta.svg';
import facebook from '../../image/fb.svg';
import whatsapp from '../../image/wapp.svg';
import chrome from '../../image/chrome.svg';

const Content = () => {

  return (
    <div className={s.content}>
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
      <button className={s.btnTel}>
        <a className={s.btn} href='tel: +996755616116'>+996755616116</a>
      </button>
      <button className={s.btnContact}>
        <a className={s.btn} href='http://vipcrd.ru/user/14/download'>Сохранить контакты</a>
      </button>
    </div>
  );
};

export default Content;