import DefaultLayout from '@/components/layouts/DefaultLayout';

function Leaderboard() {


  return <DefaultLayout>
    <h1 className="mt-8 mb-2 text-turkuaz font-bold text-3xl">Leaderboard</h1>
    <div className=' w-50 h-0.5 bg-turkuaz rounded-3xl '></div>

    <table className="w-full  mt-14 text-left">
      <tr className='bg-gri text-white opacity-80 '>
        <th>UserName</th>
        <th>24h Total Profit</th>
        <th>Total Wallet Balance</th>
      </tr>

      {/* {data.map(({ username, profit, balance }, i) => (
        <tr className='hover:bg-gri' key={i}>


          <td>{username}</td>

          <td>{profit}</td>
          <td>{balance}</td>

        </tr>
      ))} */}
    </table>
  </DefaultLayout>;
}

export default Leaderboard;
