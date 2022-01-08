import React from 'react'

const Card = ({image, title, body, id}) => {
  const handelClick = (e) => {
    console.log(e.target)
    
  }
    return (
        <div className="side-container">
          <div id={id} className="card" onClick={(handelClick)}>
            <div className="pic-container">
                
                <img src="./img/image.jpg" />
               
                <div className="overlay"></div>
            </div>
            <div className="text-container">
                <h3 className="title">{title}</h3>
                <p className="text">{body}</p>
            </div>
          </div>
        </div>
    )
}

export default Card
