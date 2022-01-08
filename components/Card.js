import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Card = ({ image, title, body, id }) => {
  const handelClick = (e) => {
    console.log(e.target);
  };
  const router = useRouter();
  return (
    <Link href={"/article/[id]"} as={`/article/${id}`}>
      <div className="side-container">
        <div id={id} className="card" onClick={handelClick}>
          <div className="pic-container">
            <img src="./img/image.jpg" />

            <div className="overlay"></div>
          </div>
          <div className="text-container">
            <h3 className="title">{title}</h3>
            {/* <p className="text">{body}</p> */}
            <div className="truth-meter-container"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
