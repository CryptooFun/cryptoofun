import Lobbie from '@/components/Lobbie';
import DefaultLayout from '@/components/layouts/DefaultLayout';

function Lobbies() {
  return <DefaultLayout>
    <h1 className="mt-8 mb-2 text-turkuaz font-bold text-3xl">Trading Lobbies</h1>
    <div className=' w-50 h-0.5 bg-turkuaz rounded-3xl '></div>


    <div className=' grid grid-cols-4 mt-8 gap-12'>
      <Lobbie></Lobbie>
      <Lobbie></Lobbie>
      <Lobbie></Lobbie>
      <Lobbie></Lobbie>
      <Lobbie></Lobbie>
      <Lobbie></Lobbie>
      <Lobbie></Lobbie>
      <Lobbie></Lobbie>
    </div>

  </DefaultLayout>;
}

export default Lobbies;
