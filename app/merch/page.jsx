import React from "react";
import merchcss from "./merch.module.css";
import Image from "next/image";
import tshirt from "/public/tshirt.jpeg";

export default function merch() {
  return (
    <main className={merchcss.main}>
      <div className={merchcss.container}>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={tshirt} />
          $60
        </div>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={tshirt} />
          $60
        </div>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={tshirt} />
          $60
        </div>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={tshirt} />
          $60
        </div>
        <div className={merchcss.box}>
          <Image className={merchcss.image} src={tshirt} />
          $60
        </div>
      </div>
    </main>
  );
}
