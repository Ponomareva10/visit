import React from 'react';
import s from './s.module.css';
import whatsappTomato from '../../image/wapptomato.svg';
import instaTomato from '../../image/instatomato.svg';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerLink}>
        <a href='https://wa.me/996505552234/'>
            <img className={s.icon} src={whatsappTomato} alt="icon" />
        </a>
        <a href='https://instagram.com/vipcard.kg/'>
            <img className={s.icon} src={instaTomato} alt="icon" />
        </a>
        <a href='tel:+996505552234'>
          <i className={s.link}  >
            +996505552234
          </i>
        </a>
      </div>
      <div>
        <span className={s.uniKod}>Все права защищены © 2021</span>
        <a href='http://vipcrd.ru/'>
          <i className={s.link}  >
            VIP-CARD.KG
          </i>
        </a>
      </div>
    </div>
  );
};

export default Footer;