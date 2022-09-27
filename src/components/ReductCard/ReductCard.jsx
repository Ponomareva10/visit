import React from 'react';
import s from './s.module.css'

const ReductCard = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>First name
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Last name
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>E-mail
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Image
        <input type="file"  className={s.input}/>
      </div>
      <div className={s.title}>Subject
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Description
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Msisdn
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Msisdn additional
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to instagram
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to twitter
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to fasebook
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to tiktok
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to whatsapp
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to youtube
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to linkedin
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to telegram
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Website
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to VK
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to map
        <input type="text" className={s.input}/>
      </div>
      <div className={s.title}>Address
        <input type="text" className={s.input}/>
      </div>
    </div>
  );
};

export default ReductCard;