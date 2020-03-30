import React from 'react';
import Card from '../Cards/cards.component';

import './listing.styles.scss';

export const Listing = props => {
	return (
		<section className="listing-wrapper">
			<div className="container">
			{
				props.data.map((card, i) => (
					<Card
						key={i}
						title={card.title.rendered}
						description={card.acf.description}
						image={card.acf.image}
						content={card.acf.content}
						link={card.acf.link}
					/>
				))
			}
			</div>
		</section>
	)
}