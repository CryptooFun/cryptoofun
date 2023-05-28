import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

function TradeHistory() {
  const { data } = useQuery({
    queryKey: ['trade-orders-history'],
    queryFn: async () => {
      const response = await axios.get('/api/trade/history');
      return response.data;
    },
  });

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-3 text-turkuaz font-bold text-3xl">
        Trade Orders (Last 7 days)
      </h1>
      <div className=" w-50 h-0.5 bg-turkuaz rounded-3xl "></div>

      <table className="w-full mt-14 text-left">
        <thead className="bg-gri text-white opacity-80">
          <tr>
            <th>#</th>
            <th>Ticker</th>
            <th>Intent</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Successful</th>
            <th>Cancelled</th>
            <th>Date (Created)</th>
            <th>Date (Processed)</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((order, i) => {
              const pair0 = order?.ticker.split('_USDT')[0];

              return (
                <tr className="h-14 hover:bg-gri" key={i}>
                  <td className="bg-gri">{i + 1}.</td>
                  <td>
                    <Image
                      className="mr-2 inline-block"
                      src={`/currency/${pair0.toLowerCase()}.svg`}
                      alt={pair0}
                      width={24}
                      height={24}
                    />
                    <b>{order?.ticker}</b>
                  </td>
                  <td>{order?.intent}</td>
                  <td>{order?.amount}</td>
                  <td>${order?.actualizationPrice}</td>
                  <td className="text-center">
                    {order?.processed === true ? (
                      <span>✔</span>
                    ) : (
                      <span>✖</span>
                    )}
                  </td>
                  <td className="text-center">
                    {order?.cancelled === true ? (
                      <span>✔</span>
                    ) : (
                      <span>✖</span>
                    )}
                  </td>
                  <td>
                    {dayjs(order.createdAt).format('DD MMMM YYYY HH:mm:ss')}
                  </td>
                  <td>
                    {order.updatedAt ? (
                      dayjs(order.updatedAt).format('DD MMMM YYYY HH:mm:ss')
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                  <td>
                    <Link
                      className="text-turkuaz font-bold"
                      href={`/trade/${order.ticker}`}
                    >
                      Trade Again
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </DefaultLayout>
  );
}

export default TradeHistory;
