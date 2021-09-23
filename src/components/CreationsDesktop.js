import React from 'react'
import data from '../dataDesktop.js'

const CreationsDesktop  = () => {

    const [cards, setCards] = React.useState(data)
    return (
        <section className="creations-desktop">
            <div className="title">
            <h2>Our creations</h2>
         
            <div className="btn-container">
                <button className="btn">See All</button>
                </div>
              </div>
           
            <section>
                {cards.map((cards) => {
                    const {id,image,title} = cards
                    return (
                        <article key={id}>
                            <div>
                                <img src={image} alt="creations card" />
                            </div>
                            <h3>{title}</h3>
                        </article>
                    )
                })}
            </section> 
        </section>
    )
}

export default CreationsDesktop