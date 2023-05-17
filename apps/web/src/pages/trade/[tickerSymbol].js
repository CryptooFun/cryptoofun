import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import TVCandlesticks from '@/components/tradingview/TVCandlesticks';

function TradingPage() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: ({ intent, amount }) => (
      axios.post`/api/trade/market/${intent}`,
      {
        ticker: router.query.tickerSymbol,
        amount,
      }
    ),
  });

  const [symbol, setSymbol] = useState();

  const [buyAmount, setBuyAmount] = useState(1.0);
  const [sellAmount, setSellAmount] = useState(1.0);

  useEffect(() => {
    if (router.query.tickerSymbol) {
      const pair0 = router.query.tickerSymbol.split(/[-_\s]/)[0];
      setSymbol(pair0);
    }
  }, [router.query.tickerSymbol, setSymbol]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (
  //       document.getElementById('header-toolbar-symbol-search') &&
  //       document.getElementById('header-toolbar-compare')
  //     ) {
  //       document.getElementById('header-toolbar-symbol-search').disabled = true;
  //       document.getElementById('header-toolbar-compare').remove();
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <br />

      {/* TODO: 4 hours window */}
      {symbol ? <TVCandlesticks symbol={symbol}></TVCandlesticks> : <></>}

      {mutation.isSuccess ? <div>Success!</div> : <></>}
      <p>{router.query.tickerSymbol}</p>
      <br />
      <input
        className="text-black"
        id="buy-amount"
        onChange={e => {
          const value = Number(e.target.value);
          if (!isNaN(value)) {
            setBuyAmount(value);
          }
        }}
        value={buyAmount}
      />
      <button
        id="buy-btn"
        onClick={() => {
          mutation.mutate({ intent: 'buy', amount: buyAmount });
        }}
      >
        BUY
      </button>
      <br />
      <br />
      <input
        className="text-black"
        id="sell-amount"
        onChange={e => {
          const value = Number(e.target.value);
          if (!isNaN(value)) {
            setSellAmount(value);
          }
        }}
        value={sellAmount}
      />
      <button
        id="sell-btn"
        onClick={() => {
          mutation.mutate({ intent: 'sell', amount: sellAmount });
        }}
      >
        SELL
      </button>
    </>
  );
}

export default TradingPage;
