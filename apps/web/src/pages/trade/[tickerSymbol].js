import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import TVCandlesticks from '@/components/tradingview/TVCandlesticks';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';
import { toast } from 'react-toastify';

function TradingPage() {
  const router = useRouter();

  const { data: symbolsData } = useQuery({
    queryKey: ['allowed-symbols'],
    queryFn: async () => {
      const response = await axios.get('/api/market/symbols');
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: ({ intent, amount }) =>
      axios.post(`/api/trade/market/${intent}`, {
        ticker: router.query.tickerSymbol,
        amount,
      }),
    onSuccess: () => {
      toast.success(
        `Successfully created order for ${router.query.tickerSymbol}!`
      );
    },
    onError: () => {
      toast.error(`Failed to create order for ${router.query.tickerSymbol}!`);
    },
  });

  const [symbol, setSymbol] = useState();
  const [listQuery, setListQuery] = useState('');

  const [buyAmount, setBuyAmount] = useState(1.0);
  const [sellAmount, setSellAmount] = useState(1.0);

  useEffect(() => {
    if (router.query.tickerSymbol) {
      const pair0 = router.query.tickerSymbol.split(/[-_\s]/)[0];
      setSymbol(pair0);
    }
  }, [router.query.tickerSymbol, setSymbol]);

  return (
    <DefaultLayout>
      <br />
      <div className="flex">
        {symbol ? <TVCandlesticks symbol={symbol}></TVCandlesticks> : <></>}
        <div className="ml-2 flex  overflow-x-hidden flex-col text-lg font-semibold ring-2 ring-gri rounded-xl w-45 max-h-[430px] mb-2 mr-1">
          <div>
            <div className="flex flex-row">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[2px] min-w-0 flex-auto rounded-l border border-solid border-gri opacity-80 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none   "
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
                onChange={e => setListQuery(e.target.value)}
                value={listQuery}
              />
            </div>
          </div>
          <div className="flex sticky rounded-t-xl justify-center bg-turkuaz text-dark opacity-90 p-1">
            Coin List
          </div>
          <div className="overflow-y-scroll cursor-pointer">
            {symbolsData &&
              symbolsData
                .filter(symbol => {
                  if (listQuery == '') {
                    return true;
                  }
                  return symbol.toLowerCase().includes(listQuery.toLowerCase());
                })
                .map((symbol, i) => {
                  const pair0 = symbol.split('_USDT')[0];

                  return (
                    <div
                      className="hover:bg-gri flex"
                      key={i}
                      onClick={() => router.push(`/trade/${pair0}_USDT`)}
                    >
                      <td className="flex font-normal items-center  justify-center">
                        <Image
                          className=" mr-2 inline-block"
                          src={`/currency/${pair0.toLowerCase()}.svg`}
                          alt={pair0}
                          width={24}
                          height={24}
                        />
                        <span className="text-sm flex">
                          <b className="mr-2">{pair0}</b>
                        </span>
                      </td>
                    </div>
                  );
                })}
          </div>
        </div>
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
