import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editInputs } from '../../store/visitSlice';
import s from './s.module.css';

const ReductCard = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  const addCorrect = (options) => {
    console.log(options)
    dispatch(editInputs(options));
  }

  console.log(state);

  return (
    <form className={s.wrapper}>
      <div className={s.heading}>Введите изменения</div>
      <div className={s.title}>First name
        <input value={state.firstName}
        onChange={e => addCorrect({ inputType: "firstName", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Last name
      <input value={state.lastName}
        onChange={e => addCorrect({inputType: "lastName", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>E-mail
      <input value={state.email}
        onChange={e => addCorrect({iputType: "email", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Image
        <label className={s.labelFile}>
          <input value={state.image}
        onChange={e => addCorrect({inputType: "image", value: e.target.value})} 
          type="file"  className={s.inputFile}/>
        </label>
      </div>
      <div className={s.title}>Subject
      <input value={state.subject}
        onChange={e => addCorrect({inputType: "subject", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Description
      <input value={state.description}
        onChange={e => addCorrect({inputType: "description", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Msisdn
      <input value={state.msisdn}
        onChange={e => addCorrect({inputType: "msisdn", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Msisdn additional
        <input value={state.msisdnAdditional}
        onChange={e => addCorrect({inputType: "msisdnAdditional", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to instagram
        <input value={state.linkToInstagram}
        onChange={e => addCorrect({inputType: "linkToInstagram", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to twitter
        <input value={state.linkToTwitter}
        onChange={e => addCorrect({inputType: "linkToTwitter", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to fasebook
        <input value={state.linkToFacebook}
        onChange={e => addCorrect({inputType: "linkToFacebook", value: e.target.value})}  
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to tiktok
        <input value={state.linkToTiktok}
        onChange={e => addCorrect({inputType: "linkToTiktok", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to whatsapp
        <input value={state.linkToWhatsapp}
        onChange={e => addCorrect({inputType: "linkToWhatsapp", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to youtube
        <input value={state.linkToYoutube}
        onChange={e => addCorrect({inputType: "linkToYoutube", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to linkedin
        <input value={state.linkToLinkedin}
        onChange={e => addCorrect({inputType: "linkToLinkedin", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to telegram
        <input value={state.linkToTelegram}
        onChange={e => addCorrect({inputType: "linkToTelegram", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Website
        <input value={state.website}
        onChange={e => addCorrect({inputType: "website", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to VK
        <input value={state.linkToVk}
        onChange={e => addCorrect({inputType: "linkToVk", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to map
        <input value={state.linkToMap}
        onChange={e => addCorrect({inputType: "linkToMap", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Address
        <input value={state.address}
        onChange={e => addCorrect({inputType: "address", value: e.target.value})} 
        type="text" className={s.input}/>
      </div>
      <button className={s.btn} onClick={e => {
        // e.preventDefault();
        // addCorrect()
        // console.log(state)
        }} >Сохранить изменения</button>
    </form>
  );
};

export default ReductCard;