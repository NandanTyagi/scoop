import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {useRouter} from 'next/router'



const LargeCard = ({id, title, body, img}) => {
  const [target, setTarget] = useState("");
  
  const router = useRouter()

  return (
    <>
      <Link href={"/article/[id]"} as={`/article/${id}`}>
      <div className="large-card">
        <div id={id} className="large-pic-container">
          <img src="/img/image.jpg" alt="" />
          <div className="overlay"></div>
        </div>
        <div className="large-text-container">
          <h3 className="title">{title}</h3>
          <p className="text">
           {body}
          </p>
          <div className="truth-meter-container"></div>
        </div>
      </div>
      </Link>
     
    </>
  );
};

export default LargeCard;