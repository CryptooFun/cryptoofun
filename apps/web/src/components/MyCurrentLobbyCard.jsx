import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

const MyCurrentLobbyCard = props => {
  if (!props.Lobby) {
    return <></>;
  }

  const {
    initialCashBalance,
    Lobby: {
      title,
      requiredCashBalance,
      isAwardDistributed,
      cashAward,
      challenge,
      opensAt,
      closesAt,
    },
  } = props;

  return (
    <div className="flex flex-col justify-center shadow-default">
      <div className="py-8 px-4 flex bg-gri w-60 h-14 justify-center items-center opacity-80 rounded-t-2xl bg-gradient-to-r from-turkuaz to-gri">
        <h1 className="font-bold">{title}</h1>
      </div>

      <div className="w-60 h-full text-dark bg-white opacity-90 rounded-b-2xl my-auto p-4">
        <div className="flex-col flex">
          <p className="capitalize">
            <b>Challenge:</b> {challenge.replace('_', ' ').toLowerCase()}
          </p>
          <p className="mb-2">
            <b>Award:</b> Profit + ${cashAward}
          </p>
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
        <p className="my-2">
          <b>Initial Cash Balance:</b> ${initialCashBalance}
        </p>

        {isAwardDistributed ? (
          <>
            <hr />
            <p className="mt-2">Awards are distributed!</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MyCurrentLobbyCard;
