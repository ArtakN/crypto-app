const API_URL = `https://api.coingeco.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`

// async fetch function to get data
async function fetchData(url) {
   try {
      const response = await fetch(url)
      const data = await response.json()
      return data
   } catch (error) {
      console.error(error)
   }
}

export const fetchedData = await fetchData(API_URL)

export const articles = [
   {
      id: 1,
      img: './img/article_1.png',
      title: 'All about Investing in NFTs and related risks',
      sub: 'Cryptocurrencies are basically digital assets. It is secured by cryptography..'
   },
   {
      id: 2,
      img: './img/article_2.png',
      title: 'What is cryptocurrency? all you need to know',
      sub: 'Cryptocurrencies are basically digital assets. It is secured by cryptography..'
   },
   {
      id: 3,
      img: './img/article_3.png',
      title: 'Can crypto really replace your bank account?',
      sub: 'From direct deposit to earning yield, key ways crypto can help you take control..'
   },
   {
      id: 4,
      img: './img/article_4.png',
      title: 'How to setup crypto wallet in your account',
      sub: 'A crypto wallet is a place where you can securely keep your crypto..  '
   },
   {
      id: 5,
      img: './img/article_5.png',
      title: 'The fact about bitcoin must you know',
      sub: 'Bitcoin is the world\'s first widely adopted cryptocurrency, it allows for secure..'
   },
   {
      id: 6,
      img: './img/article_6.png',
      title: 'When is the best time to invest in crypto?',
      sub: 'When prices are fluctuating, how do you know when to buy?'
   },
   {
      id: 7,
      img: './img/article_7.png',
      title: 'What Is DeFi? Inside the Wild West of Cryptocurrency.',
      sub: 'Welcome to decentralized finance or DeFi, the new frontier of crypto that will..'
   }
]