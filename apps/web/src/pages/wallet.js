import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';
import Link from 'next/link';

function Wallet() {

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
  ]

  return <DefaultLayout>
    <h1 className="mt-8 mb-3 text-turkuaz font-bold text-3xl">Wallet Balance</h1>
    <div className=' w-50 h-0.5 bg-turkuaz rounded-3xl '></div>
    <div className='text-turkuaz font-extrabold rounded-2xl p-3 opacity-70 w-36 items-center justify-center bg-gri text-2xl mt-4'>
      <span> ≈ </span>
      <span > $9737 </span>
    </div>

    <table className="w-full  mt-4 text-left">
      <tr className='bg-gri  text-white opacity-80 '>
        <th>Coin</th>
        <th>Available Amount</th>
        <th>Value</th>
        <th></th>
      </tr>

      {data.map(({ name, symbol }, i) => (
        <tr className='hover:bg-gri' key={i} onClick={""}>

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
          <td>0.245</td>
          <td>$4165</td>
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
}

export default Wallet;
