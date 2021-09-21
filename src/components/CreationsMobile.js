import React from 'react'
import data from '../dataMobile.js'

const CreationsMobile = () => {

    const [cards, setCards] = React.useState(data)
    return (
        <section className="creations-mobile">
            <h2>Our creations</h2>
            <section>
                {cards.map((card) => {
                    const {id,image,title} = card
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
            <div className="btn-cotainer">
                <button className="btn">See All</button>
            </div>
        </section>
    )
}

export default CreationsMobile
