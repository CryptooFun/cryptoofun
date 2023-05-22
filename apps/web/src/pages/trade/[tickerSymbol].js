import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import TVCandlesticks from '@/components/tradingview/TVCandlesticks';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';

function TradingPage() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: ({ intent, amount }) =>
      axios.post(`/api/trade/market/${intent}`, {
        ticker: router.query.tickerSymbol,
        amount,
      }),
  });
  const data = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
  ];

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
    <DefaultLayout>
      <br />
      <div className="flex">
        {/* TODO: 4 hours window */}
        {symbol ? <TVCandlesticks symbol={symbol}></TVCandlesticks> : <></>}
        <div className="ml-2 flex  overflow-x-hidden flex-col text-lg font-semibold ring-2 ring-gri rounded-xl max-w-40 max-h-[430px] mb-2 mr-1">
          <tr className="flex sticky rounded-t-xl justify-center bg-turkuaz text-dark opacity-90 p-1">
            Favourite Coins
          </tr>
          <div className="overflow-y-scroll cursor-pointer">
            {data.map(({ symbol, name }, i) => (
              <tr className="hover:bg-gri flex" key={i} onClick={''}>
                <td className="flex font-normal items-center  justify-center">
                  {/* TODO: Change image src with ${symbol}.svg */}
                  <Image
                    className=" mr-2 inline-block"
                    src={'/favicon.ico'}
                    alt={name}
                    width={24}
                    height={24}
                  />
                  <span className="text-sm flex">
                    <b className="mr-2">{symbol}</b> {name}
                  </span>
                </td>
              </tr>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex bg-green items-center justify-center px-4">
        {mutation.isSuccess && <div>Success!</div>}
      </div>
      <div className="h-8 font-bold text-lg bg-gradient-to-r flex justify-center from-gri to-turkuaz">
        <div className="flex items-center justify-center flex-1">
          <p className="">{router.query.tickerSymbol}</p>
        </div>
      </div>

      <br />
      <div className=" flex justify-center ">
        <div className="flex flex-col w-60 mr-4">
          <input
            className="text-black rounded-md p-1"
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
            className=" bg-turkuaz text-dark font-bold rounded-xl p-2 mt-4 "
            id="buy-btn"
            onClick={() => {
              mutation.mutate({ intent: 'buy', amount: buyAmount });
            }}
          >
            BUY
          </button>
        </div>
        <br />
        <br />
        <div className="flex flex-col w-60 ml-4">
          <input
            className="text-black rounded-md p-1"
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
            className=" bg-gri text-turkuaz font-bold rounded-xl p-2 mt-4"
            id="sell-btn"
            onClick={() => {
              mutation.mutate({ intent: 'sell', amount: sellAmount });
            }}
          >
            SELL
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default TradingPage;
