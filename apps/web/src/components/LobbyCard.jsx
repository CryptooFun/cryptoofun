import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const Lobby = ({
  id,
  title,
  requiredCashBalance,
  cashAward,
  challenge,
  _count,
  opensAt,
  closesAt,
}) => {
  const joinMutation = useMutation({
    mutationFn: () => axios.post('/api/lobby/join', { id }),
    onSuccess: () => {
      toast.success('Joined the lobby successfully!');
    },
    onError: () => {
      toast.error('Unable to join the lobby!');
    },
  });

  return (
    <div className="flex flex-col justify-center shadow-default">
      <div className="py-8 px-4 flex bg-gri w-60 h-14 justify-center items-center opacity-80 rounded-t-2xl">
        <h1 className="font-bold">{title}</h1>
      </div>

      <div className="w-60 h-full text-dark bg-white opacity-90 rounded-b-2xl my-auto p-4">
        <div className="flex-col flex">
          <p className="capitalize">
            <b>Challenge:</b> {challenge.replace('_', ' ').toLowerCase()}
          </p>
          <p>
            <b>Award:</b> Profit + ${cashAward}
          </p>

          <div className="my-4">
            <strong className="text-lg mr-2 self-baseline">
              {_count.users}
            </strong>
            <Image
              className="inline-block"
              src={'/icons/players.png'}
              width={24}
              height={24}
              alt="Players"
            />
          </div>
        </div>

        <hr />

        <div className="my-2">
          Takes <strong>{dayjs(closesAt).diff(opensAt, 'days')} days</strong>
          <Image
            className="inline-block"
            src={'/icons/hourglass.png'}
            width={24}
            height={24}
            alt="Hourglass"
          />
          <p className="mt-2 text-sm">
            {dayjs(opensAt).format('DD MMMM YYYY')} -{' '}
            {dayjs(closesAt).format('DD MMMM YYYY')}
          </p>
        </div>

        <hr />

        {requiredCashBalance ? (
          <p className="my-2">
            Requires <b>${requiredCashBalance}</b> to join
          </p>
        ) : (
          <p className="my-2">
            <b>No</b> requirement
          </p>
        )}

        <hr />

        <button
          className="self-baseline justify-center items-center text-white bg-dark hover:font-bold hover:text-dark hover:bg-turkuaz opacity-80 py-1 px-6 mt-4 rounded-2xl"
          onClick={() => {
            joinMutation.mutate();
          }}
        >
          JOIN
        </button>
      </div>
    </div>
  );
};

export default Lobby;
