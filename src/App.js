import React, { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState("");
  const [index, setIndex] = useState("0");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const url = "https://api.coinpaprika.com/v1/tickers";
    fetch(url).then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);

  const changeDollars = (event) => setDollars(event.target.value);
  const changeIndex = (event) => {
    setIndex(event.target.value);
    setPrice(coins[event.target.value - 1].quotes.USD.price);
  };

  return (
    <>
      {loading ? (
        <span>get loading...</span>
      ) : (
        <div>
          <h1>Total Coins: {coins.length}</h1>
          <select value={index} onChange={changeIndex}>
            <option value={"0"}>### SELECT YOUR COIN ###</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.rank}>
                {coin.name} ({coin.symbol}):{" "}
                {Math.round(coin.quotes.USD.price * 10) / 10}$
              </option>
            ))}
          </select>
          {index != 0 && (
            <div>
              <hr />
              <form>
                <label htmlFor="dollars-input">
                  How many dollars you have?
                </label>
                <input
                  id="dollars-input"
                  type="number"
                  placeholder="Enter here..."
                  min={0}
                  value={dollars}
                  onChange={changeDollars}
                />
              </form>
              {dollars !== "" && dollars !== "0" && (
                <div>
                  <div>
                    현재 <strong>{dollars}$</strong> 보유 중입니다.
                  </div>
                  <div>
                    이 코인의 가격은 <strong>{price}$</strong> 입니다.
                  </div>
                  <div>
                    당신은 <strong>{dollars / price}개</strong> 살 수 있습니다.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default App;
