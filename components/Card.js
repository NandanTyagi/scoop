import React from 'react'

const Card = ({image, title, text}) => {
    return (
        <div className="side-container">
          <div className="card">
            <div className="pic-container">
                
                <img src="./img/image.jpg" />
               
                <div className="overlay"></div>
            </div>
            <div className="text-container">
                <h3 className="title">Title</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, ducimus?</p>
            </div>
          </div>
        </div>
    )
}

export default Card
