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
        <a className={s.link} href='tel:+996505552234'>
          +996505552234
        </a>
      </div>
      <div>
        <span className={s.uniKod}>Все права защищены © 2021</span>
        <a className={s.link} href='http://vipcrd.ru/'>
          VIP-CARD.KG
        </a>
      </div>
    </div>
  );
};

export default Footer;