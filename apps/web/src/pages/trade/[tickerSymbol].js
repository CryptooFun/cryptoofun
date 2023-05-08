import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import ReactEChart from '@/components/echarts/ReactEChart';

function TradingPage() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: ({ intent, amount }) =>
      axios.post(`/api/trade/market/${intent}`, {
        ticker: router.query.tickerSymbol,
        amount,
      }),
  });

  const [buyAmount, setBuyAmount] = useState(1.0);
  const [sellAmount, setSellAmount] = useState(1.0);

  const [dateData, setDateData] = useState([
    '2017-10-24',
    '2017-10-25',
    '2017-10-26',
    '2017-10-27',
  ]);
  const [seriesData, setData] = useState([
    [20, 34, 10, 38],
    [40, 35, 30, 50],
    [31, 38, 33, 44],
    [38, 15, 5, 42],
  ]);

  return (
    <>
      <ReactEChart
        option={{
          xAxis: {
            data: dateData,
          },
          yAxis: {},
          series: [
            {
              type: 'candlestick',
              data: seriesData,
            },
          ],
        }}
      />
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
