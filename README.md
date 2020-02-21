  <h1>Coinbets</h1>

  <img src="/public/images/Coinbets.png">

##Intro

Coinbets is a personal project developed with React. It allows you to get real-time prices of different crypto-currencies and stocks from the NYSE. The app runs on the client, it's a frontend development. It uses React and React Router.

The UI is inspired in a post on Dribble: https://dribbble.com/shots/6569785-Crypto-Dashboard-Design
We use https://www.worldtradingdata.com/ (250 request per day) and https://coincap.io/ as API providers.

It's still on development so it has some [issues](#issues), which most of them are explained in the Issues section.

##Table of contents

- [Getting Started](#start)
- [Issues](#issues)
- [Licence](#licence)

<a name='start'></a>
###Getting Started

```
git clone sadsaasd
cd crypto-currency
npm install
npm start
```

<a name='issues'></a>
###Issues

Issues are not listed in a particular order.

- Fetch on StockContainer has to be improved.
- Some cyrpto's svg do not match the real symbol.
- Sidebar has no functionality.
- Currency Component is under maintenance.
- Missing Home Component.
- Improvements for a better clean code.
- Limit of 250 request to https://www.worldtradingdata.com/ due to free plan.

<a name='licence'></a>
###Licence

MIT
