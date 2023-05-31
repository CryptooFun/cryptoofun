import LobbyCard from '@/components/LobbyCard';
import AftermathCard from '@/components/AftermathCard';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import MyCurrentLobbyCard from '@/components/MyCurrentLobbyCard';
import { useDebounce } from 'use-debounce';

function Lobbies() {
  const [activeTab, setActiveTab] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword] = useDebounce(keyword, 350);

  const { data } = useQuery({
    queryKey: [`lobbies-${activeTab}`, debouncedKeyword],
    queryFn: async () => {
      let res;
      switch (activeTab) {
        case 0:
          res = await axios.get('/api/lobby/all', {
            params: { keyword: debouncedKeyword },
          });
          break;
        case 1:
          res = await axios.get('/api/lobby/aftermath');
          break;
        case 2:
          res = await axios.get('/api/lobby/current');
          break;
      }
      return res.data;
    },
  });

  const highlightedTabClass = 'bg-turkuaz font-semibold opacity-100';
  const defaultTabClass = 'bg-gri';

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-2 text-turkuaz font-bold text-3xl">
        Trading Lobbies
      </h1>
      <div className="mt-8 justify-between flex gap-8">
        <button
          className={`flex-auto rounded-t w-44 border opacity-80 bg-gri bg-clip-padding px-3 py-[0.25rem] leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none ${
            activeTab == 0 ? highlightedTabClass : defaultTabClass
          }`}
          onClick={() => setActiveTab(0)}
        >
          Open Lobbies
        </button>
        <button
          className={`flex-auto rounded-t w-44 border opacity-80 bg-clip-padding px-3 py-[0.25rem] leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none ${
            activeTab == 1 ? highlightedTabClass : defaultTabClass
          }`}
          onClick={() => setActiveTab(1)}
        >
          Past Lobbies
        </button>
        <button
          className={`flex-auto rounded-t w-44 border opacity-80 bg-clip-padding px-3 py-[0.25rem] leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none ${
            activeTab == 2 ? highlightedTabClass : defaultTabClass
          }`}
          onClick={() => setActiveTab(2)}
        >
          My Current Lobby
        </button>
      </div>
      <div className=" w-50 h-0.5 bg-turkuaz rounded-3xl "></div>

      <input
        type="search"
        id="lobby-search-box"
        className="relative mt-2 block w-48 flex-auto rounded border border-solid border-turkuaz bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none   "
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search lobbies"
        onChange={e => setKeyword(e.target.value)}
        value={keyword}
      />

      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 mt-8 gap-12">
        {activeTab == 0 ? (
          <>
            {data?.map((lobbyInfo, i) => (
              <LobbyCard key={i} {...lobbyInfo} />
            ))}
          </>
        ) : (
          <>
            {activeTab == 1 ? (
              <>
                {data?.map((aftermathInfo, i) => (
                  <AftermathCard key={i} {...aftermathInfo} />
                ))}
              </>
            ) : (
              <>
                <MyCurrentLobbyCard {...data} />
              </>
            )}
          </>
        )}
      </div>
    </DefaultLayout>
  );
}

export default Lobbies;
