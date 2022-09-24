import React from "react";
import { useState } from "react";
import s from "./s.module.css";

const Visit = () => {
  const [bg, setBg] = useState("");
  const [logo, setLogo] = useState(""); 


  console.log(bg)
  const handleChange = async (file) => {
    const convertImg = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        if (!!file) {
          fileReader.readAsDataURL(file);
          fileReader.onloadend = () => {
            resolve(fileReader.result);
          };
        }
      });
    };

    const readyImg = await convertImg(file.src);
    if (file.type === "bg") {
      setBg(readyImg);
    } else {
      setLogo(readyImg);
    }
  };
  return (
    <label htmlFor="file" className={s.bgImage}>
      <input
        hidden
        id="file"
        type="file"
        placeholder="Выберите задний фон"
        onChange={(e) => handleChange({ type: "logo", src: e.target.files[0] })}
      />
      <label htmlFor="logo" className={s.logo}>
        <input
          hidden
          id="logo"
          type="file"
          placeholder="Выберите фото"
          onChange={(e) => handleChange({ type: "bg", src: e.target.files[0] })}
        />
      </label>
      <h1 className={s.name}>Ikram Abdykalykov</h1>
      <h2 className={s.title}>CEO Of LLC "Golden Generation"</h2>
    </label>
  );
};

export default Visit;
