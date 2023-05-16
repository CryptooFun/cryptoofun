import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import TVCandlesticks from '@/components/tradingview/TVCandlesticks';
import dayjs from 'dayjs';

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

  const [buyAmount, setBuyAmount] = useState(1.0);
  const [sellAmount, setSellAmount] = useState(1.0);

  const data = [
    {
      time: dayjs('2018-10-19').unix(),
      open: 54.62,
      high: 55.5,
      low: 54.52,
      close: 54.9,
    },
    {
      time: dayjs('2018-10-22').unix(),
      open: 55.08,
      high: 55.27,
      low: 54.61,
      close: 54.98,
    },
    {
      time: dayjs('2018-10-23').unix(),
      open: 56.09,
      high: 57.47,
      low: 56.09,
      close: 57.21,
    },
    {
      time: dayjs('2018-10-24').unix(),
      open: 57.0,
      high: 58.44,
      low: 56.41,
      close: 57.42,
    },
    {
      time: dayjs('2018-10-25').unix(),
      open: 57.46,
      high: 57.63,
      low: 56.17,
      close: 56.43,
    },
    {
      time: dayjs('2018-10-26').unix(),
      open: 56.26,
      high: 56.62,
      low: 55.19,
      close: 55.51,
    },
    {
      time: dayjs('2018-10-29').unix(),
      open: 55.81,
      high: 57.15,
      low: 55.72,
      close: 56.48,
    },
    {
      time: dayjs('2018-10-30').unix(),
      open: 56.92,
      high: 58.8,
      low: 56.92,
      close: 58.18,
    },
    {
      time: dayjs('2018-10-31').unix(),
      open: 58.32,
      high: 58.32,
      low: 56.76,
      close: 57.09,
    },
    {
      time: dayjs('2018-11-01').unix(),
      open: 56.98,
      high: 57.28,
      low: 55.55,
      close: 56.05,
    },
    {
      time: dayjs('2018-11-02').unix(),
      open: 56.34,
      high: 57.08,
      low: 55.92,
      close: 56.63,
    },
    {
      time: dayjs('2018-11-05').unix(),
      open: 56.51,
      high: 57.45,
      low: 56.51,
      close: 57.21,
    },
    {
      time: dayjs('2018-11-06').unix(),
      open: 57.02,
      high: 57.35,
      low: 56.65,
      close: 57.21,
    },
  ];

  const [lastBusinessDay, setLastBusinessDay] = useState(dayjs('2018-11-07'));
  const [addData, setAddData] = useState({
    time: lastBusinessDay.unix(),
    open: 57.02 - Math.random() * 2,
    high: 57.35 - Math.random() * 2 + Math.random() * 2,
    low: 56.65 - Math.random() * 2 + Math.random() * 2,
    close: 55 + Math.random() * 2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAddData({
        time: lastBusinessDay.unix(),
        open: 57.02 - Math.random() * 2,
        high: 57.35 - Math.random() * 2 + Math.random() * 2,
        low: 56.65 - Math.random() * 2 + Math.random() * 2,
        close: 55 + Math.random() * 2,
      });

      const nextBusinessDay = lastBusinessDay.add(1, 'day');
      setLastBusinessDay(nextBusinessDay);
    }, 500);
    return () => clearInterval(interval);
  }, [lastBusinessDay]);

  return (
    <>
      <br />
      <TVCandlesticks initData={data} addData={addData}></TVCandlesticks>

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
