import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { editInputs, editUser } from '../../store/visitSlice';
import s from './s.module.css';

const ReductCard = () => {
  const state = {};
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    mode: 'onChange'
  });  

  const addCorrect = (options) => {
    dispatch(editUser())
  }

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(addCorrect)}>
      <div className={s.heading}>Введите изменения</div>
      <div className={s.title}>First name
        <input value={state.firstName}
          {...register('firstName')}
          type="text" className={s.input}/>
      </div>
      <div className={s.title}>Last name
      <input value={state.lastName}
          {...register('lastName')}
          type="text" className={s.input}/>
      </div>
      <div className={s.title}>E-mail
      <input value={state.email}
          {...register('email')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Image
        <label className={s.labelFile}>
          <input value={state.image}
          {...register('image')}
          type="file"  className={s.inputFile}/>
        </label>
      </div>
      <div className={s.title}>Subject
      <input value={state.subject}
          {...register('subject')}
          type="text" className={s.input}/>
      </div>
      <div className={s.title}>Description
      <input value={state.description}
          {...register('description')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Msisdn
      <input value={state.msisdn}
          {...register('msisdn')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Msisdn additional
        <input value={state.msisdnAdditional}
          {...register('msisdnAdditional')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to instagram
        <input value={state.linkToInstagram}
          {...register('linkToInstagram')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to twitter
        <input value={state.linkToTwitter}
          {...register('linkToTwitter')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to fasebook
        <input value={state.linkToFacebook}
                  {...register('linkToFacebook')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to tiktok
        <input value={state.linkToTiktok}
                  {...register('linkToTiktok')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to whatsapp
        <input value={state.linkToWhatsapp}
          {...register('linkToWhatsapp')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to youtube
        <input value={state.linkToYoutube}
          {...register('linkToYoutube')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to linkedin
        <input value={state.linkToLinkedin}
          {...register('linkToLinkedin')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to telegram
        <input value={state.linkToTelegram}
                  {...register('linkToTelegram')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Website
        <input value={state.website}
                  {...register('website')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to VK
        <input value={state.linkToVk}
                  {...register('linkToVk')}
        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Link to map
        <input value={state.linkToMap}
                          {...register('linkToMap')}

        type="text" className={s.input}/>
      </div>
      <div className={s.title}>Address
        <input value={state.address}
                          {...register('address')}
        type="text" className={s.input}/>
      </div>
      <button className={s.btn} type="submit">Сохранить изменения</button>
    </form>
  );
};

export default ReductCard;