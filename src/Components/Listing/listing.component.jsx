import React, { Component } from 'react';
import axios from 'axios';
import Card from '../Cards/cards.component';

import './listing.styles.scss';

export class Listing extends Component {
  constructor() {
    super();

    this.state = {
      showcase: []
    }
  }

  componentDidMount() {
    axios.get('https://crowdriff.com/wp-json/wp/v2/showcase/')
      .then(res => this.setState({
        showcase: res.data
      }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state);
    return (
      <section className="listing-wrapper">
        <div className="container">
        {
            this.state.showcase.map((card, i) => (
                <Card
                    key={i}
                    title={card.title.rendered}
                    description={card.acf.description}
                    image={card.acf.card_image}
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