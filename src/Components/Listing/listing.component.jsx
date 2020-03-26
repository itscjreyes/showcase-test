import React, { Component } from 'react';
import Card from '../Cards/cards.component';

import './listing.styles.scss';

export class Listing extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
	fetch('https://crowdriffstg.wpengine.com/wp-json/wp/v2/showcase/?')
	.then(response => response.json())
	.then(data => this.setState({data: data}))
  }

  render() {
    console.log(this.state);
    return (
      <section className="listing-wrapper">
        <div className="container">
        {
            this.state.data.map((card, i) => (
                <Card
                    key={i}
                    title={card.title.rendered}
                    description={card.acf.description}
                    image={card.acf.image}
					industry={card.acf.industry}
					link={card.acf.link}
                />
            ))
        }
        </div>
      </section>
    )
  }
}

export default Listing;