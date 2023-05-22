import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';
import Search from '../assets/search.svg';

function Market() {
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
      change: -12.512,
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
      change: -12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
  ];

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-3 text-turkuaz font-bold text-3xl">Market</h1>
      <div className=" w-50 h-0.5 bg-turkuaz rounded-3xl "></div>
      <div class="mt-4 ml-96">
        <div class="relative ml-96 mb-4 flex w-60 flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-gri opacity-80 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none   "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          <button
            class="relative z-[2] flex items-center rounded-r bg-gri ml-0.5 opacity-80 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-turkuaz hover:shadow-lg focus:bg-turkuaz focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gri active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <Image
              className=""
              src={Search}
              alt="search"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      <table className="w-full   text-left">
        <tr className="bg-gri text-white opacity-80 ">
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>24h Volume</th>
          <th>Market Cap</th>
          <th></th>
        </tr>

        {data.map(({ symbol, name, price, change, volume, marketCap }, i) => (
          <tr className="hover:bg-gri" key={i} onClick={''}>
            <td>
              {/* TODO: Change image src with ${symbol}.svg */}
              <Image
                className="mr-2 inline-block"
                src={'/favicon.ico'}
                alt={name}
                width={24}
                height={24}
              />
              <span>
                <b>{symbol}</b> {name}
              </span>
            </td>
            <td>{price}</td>
            <td>{change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2)}%</td>
            <td>${volume}</td>
            <td>{marketCap}</td>
            <td>
              <Link
                href={`/trade/${symbol}_USDT`}
                className="text-turkuaz font-bold"
              >
                Trade
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </DefaultLayout>
  );
}

export default Market;
