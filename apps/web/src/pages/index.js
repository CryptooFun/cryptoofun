import DefaultLayout from '@/components/layouts/DefaultLayout';
import PopularCurrencyCard from '@/components/PopularCurrencyCard';
import CryptooFun from '../assets/cryptoofun.svg';
import Line from '../assets/line.svg';
import Text1 from '../assets/text.svg';
import Title from '../assets/title2.svg';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Home() {
  const { data } = useQuery({
    queryKey: ['populars'],
    queryFn: async () => {
      const response = await axios.get('/api/market/populars');
      return response.data;
    },
    refetchInterval: 1000,
  });

  return (
    <DefaultLayout>
      <div className="my-10 flex flex-col items-center">
        <Image
          className="mb-4"
          src={CryptooFun}
          alt="Name"
          width={350}
          height={120}
        />
        <Image
          className="mb-5"
          src={Line}
          alt="line"
          width={700}
          height={120}
        />
        <Image
          className=" mb-8"
          src={Text1}
          alt="Text 1"
          width={700}
          height={120}
        />
        <Image className=" " src={Title} alt="Title" width={500} height={120} />
        <Image
          className="mt-4"
          src={Line}
          alt="Line"
          width={700}
          height={120}
        />

        <div className="grid grid-cols-4 mt-8 gap-6">
          {data &&
            data.map((data, i) => <PopularCurrencyCard key={i} {...data} />)}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
