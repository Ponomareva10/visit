import React from 'react';
import s from './s.module.css'
import { Link } from 'react-router-dom';

const Content = () => {

  return (
    <div className={s.content}>
      <div className={s.discription}>We are building a new world and educating a new generation</div>
      <div className={s.icon__wrapper}>
      <a href='https://www.instagram.com/gg_consul/'>
        <i className={s.icon} >
          <img src="https://i.pinimg.com/736x/9d/fb/49/9dfb494f082c73dfea8b9dce9950aa31.jpg" alt="icon" />
        </i>
      </a>
      <a href='https://www.facebook.com/stranniy'>
        <i className={s.icon} >
          <img src="https://jmjubilee.com/wp-content/uploads/2020/03/white-facebook-icon-png-facebook-logo-facebook-facebook-fortnite-logo-transparent-white-11562907815wcbclgonet.png" alt="icon" />
        </i>
      </a>
      <a href='https://wa.me/996755616116/'>
        <i className={s.icon} >
          <img src="https://i.pinimg.com/originals/bc/89/99/bc89996e5f994ccd61a7d4af3cb349be.png" alt="icon" />
        </i>
      </a>
      <a href='https://surveyheart.com/form/5fbf8cca3012881cd9cdb643#welcome'>
        <i className={s.icon} >
          <img src="https://e1.pngegg.com/pngimages/146/581/png-clipart-white-flat-taskbar-icons-chrome-google-logo-thumbnail.pngerdf34" alt="icon" />
        </i>
      </a>
      </div>
      <Link to='tel: +996755616116'>
        <button>+996755616116</button>
      </Link>
      <Link to='http://vipcrd.ru/user/14/download'>
        <button>Сохранить в контакты</button>
      </Link>
    </div>
  );
};

export default Content;