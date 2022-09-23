import React, { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const url = "https://api.coinpaprika.com/v1/tickers";
    fetch(url).then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);

  return (
    <>
      {loading ? (
        <span>get loading...</span>
      ) : (
        <div>
          <h1>The Coins: {coins.length}</h1>
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol}):{" "}
                {Math.round(coin.quotes.USD.price * 10) / 10}$
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default App;
