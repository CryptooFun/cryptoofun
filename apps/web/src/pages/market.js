import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';

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
      change: -12.518,
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
      <h1 className="my-8 text-turkuaz font-bold text-3xl">Market</h1>
      <table className="w-full text-left">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>24h Volume</th>
          <th>Market Cap</th>
          <th></th>
        </tr>

        {data.map(({ symbol, name, price, change, volume, marketCap }, i) => (
          <tr key={i}>
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
