const featuredCases = {
	'crypto-trader': {
		title: 'Trading API',
		description:
			'An automated trading system build to switch between 8 different trading strategies based on our developed algorithms.',
		imgUrl: 'blockchain.json',
		details: {
			title: 'Seemless Trading',
			introduction:
				"We love making money as much as the next guy. Losing money however, that's a different ballgame. During the initial cryptocurrency trading craze, a lot of people from Ichi Studios felt that they were missing the boat, so they started trading with their emotions. With very little success",
			challenge: 'How can we take all of the emotions away from trading and always apply the best strategy.',
			solution: 'We sat down with two professional traders and translated 9 of their trading strategies into code. Subsequently, we created a trading bot that applies the correct strategies depending on the current state of the market. The application is linked to multiple trading platforms to decide on the most profitable trade currently available.',
			client: 'Inhouse',
			categories: [ 'Algorithm', 'Development', 'Fintech' ],
			duration: '5 months',
			howItWorks: {
				imgUrlOne: 'https://api.jsonbin.io/b/5e107c7c2c56914977975f4d',
				imgHeaderOne: 'Step One',
				textOne: 'The application constantly grabs updated information to get the most up-to-date information.',
				imgUrlTwo: 'https://api.jsonbin.io/b/5e087ef132536c77d677d5c5',
				imgHeaderTwo: 'Step Two',
				textTwo: 'Algorithms decide on the best trading strategy.'
			},
			images: [
				{
					imgUrl: 'https://i.imgur.com/KymmHYG.png',
					title: 'Dashboard showing the top traders',
					content: 'We have also started building a small web interface to get a better look at the results.'
				},
				{
					imgUrl: 'https://i.imgur.com/OTyix29.png',
					title: 'Utalizing other trading platforms',
					content: "We get most of the trend data from Coinmarketcap's API and use platforms like Coinbase Pro & Bitfinex for trading."
				},
			]
		}
	},
	tablevibe: {
		title: 'Tablevibe',
		description:
			'How can restaurants utilize customer feedback to create a better customer experience & grow their business?',
		imgUrl: 'drinks.json',
		details: {
			title: 'Feedback as a Valuable Data Metric',
			introduction:
				"Our opinions are everywhere. Didn't like a restaurant? I'll just give you 2 stars on Tripadvisor. Had a great hotel stay? I'll be sure to leave a raving review on Booking.com. This reletively new way of customer-to-customer feedback has really been a game-changer, in a good way. Customer's no longer have to chance on plaaces they've never visited and businesses are being held responsible for their actions. However, Tablevibe identified and aims to solve a crucial missing piece from this new way of leaving feedback.",
			client: 'Tablevibe',
			categories: [ 'Design', 'Development', 'Stategy' ],
			duration: '3 months',
			challenge:
				'How can restaurants utilize customer feedback to create a better customer experience & grow their business?',
			howItWorks: {
				imgUrlOne: 'https://api.jsonbin.io/b/5e107f3fbca05a678a977fec',
				textOne: 'Customers leave feedback',
				imgUrlTwo: 'https://api.jsonbin.io/b/5e10800cfadb735054fd0aa3',
				textTwo: 'Feedback gets analysed and presented in graphs.'
			},
			solution:
				"For version one the main focus lied on restaurants, as there were already customers in this vertical. We created a fun & playful customer-facing app where people can leave their feedback before they leave the restaurant. The key here was to make the experience as fun as possible, as we want this to be a fun experience for the customers. To realise this, we made an animation-heavy application and went with colors that are easy on the eyes. In the end, the true value of this product is the feedback. Thus, we really tried to focus on presenting that data is the most clear and concise way possible. That's why we created a detailed dashboard where restaurant owners can filter the feedback based on things like venue, waiter, rating & time. All the data is stored and shared between the transmitted through an API",
			images: [
				{
					imgUrl: 'https://i.imgur.com/hVLgLdx.png',
					title: 'The dashboard for restaurant owners.',
					content: 'A data driven dashboard for restaurant owners where the business owner can analyze data metrics to accurately asses the needs of their business.'
				},
				{
					imgUrl: 'https://i.imgur.com/lkoAaWs.png',
					title: 'The review interface for restaurant guests.',
					content: 'Gamified review application with bright colors and minimal text.'
				}
			]
		}
	}
};

export default featuredCases;
