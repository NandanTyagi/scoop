import React from "react";

const LargeCard = ({ image, title, text }) => {
  return (
    <div className="large-card">
      <div className="large-pic-container">
          <img src="/img/image.jpg" alt="" srcset="" />
        <div className="overlay"></div>
      </div>
      <div className="large-text-container">
          <h3 className="title">Title</h3>
          <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ratione recusandae eaque quo atque nulla dolorum corrupti provident aliquam, alias vel, at error vitae. Culpa, voluptatem deleniti. Possimus officiis explicabo incidunt fuga nihil ab, rerum non accusantium harum nesciunt praesentium quaerat excepturi fugit id aperiam. Necessitatibus, laboriosam. Quidem, quam vero!</p>
      </div>
    </div>
  );
};

export default LargeCard;
