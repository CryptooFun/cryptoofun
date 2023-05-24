import { useState, useEffect } from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';
import Edit from '../assets/edit.svg';
import Muscle from '../assets/muscle.png';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useUser } from '@auth0/nextjs-auth0/client';

function Profile() {
  const { user } = useUser();

  const avatarOptions = [
    '/avatars/avatar1.jpg',
    '/avatars/avatar2.jpg',
    '/avatars/avatar3.jpg',
    '/avatars/avatar4.jpg',
    '/avatars/avatar5.jpg',
    '/avatars/avatar6.jpg',
    '/avatars/avatar7.jpg',
    '/avatars/avatar8.jpg',
    '/avatars/avatar9.jpg',
    '/avatars/avatar10.jpg',
    '/avatars/avatar11.jpg',
    '/avatars/avatar12.jpg',
  ];
  const [username, setUsername] = useState('Emrecan Erbay');
  const [email, setEmail] = useState('emrerbay@');
  const [password, setPassword] = useState('******');
  const [isEditing, setIsEditing] = useState(false);

  const { data: balance } = useQuery({
    queryKey: ['user-wallet-balance'],
    queryFn: async () => {
      const res = await axios.get('/api/assets/wallet/');
      return res.data;
    },
  });

  const { data: progression } = useQuery({
    queryKey: ['user-progression'],
    queryFn: async () => {
      const res = await axios.get('/api/progression/');
      return res.data;
    },
  });

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleUpdateProfile = () => {
    setIsEditing(false);
    // Burada güncellenmiş verileri saklamak için gerekli işlemleri yapabilirsiniz
  };
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);

  useEffect(() => {
    const lastSelectedAvatar = localStorage.getItem('selectedAvatar');
    if (lastSelectedAvatar) {
      setSelectedAvatar(lastSelectedAvatar);
    } else {
      setSelectedAvatar(avatarOptions[0]);
    }
  }, [avatarOptions]);

  const handleEditAvatar = () => {
    setShowAvatarOptions(!showAvatarOptions);
  };

  const handleSelectAvatar = avatar => {
    setSelectedAvatar(avatar);
    setShowAvatarOptions(false);
    localStorage.setItem('selectedAvatar', avatar);
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col">
        <div className="flex mt-6 justify-center items-center">
          <div className="flex flex-col justify-center">
            {selectedAvatar && (
              <div className="flex justify-center items-center mx-8">
                <div className="w-44 h-44">
                  <Image
                    src={selectedAvatar}
                    alt="Selected Avatar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
              </div>
            )}
            <button
              className="rounded-b-2xl bg-gri cursor-pointer font-thin text-sm justify-center flex mx-8 p-3"
              onClick={handleEditAvatar}
            >
              <div className="hover:scale-110 flex">
                <Image
                  className="mr-1"
                  src={Edit}
                  alt="edit"
                  width={20}
                  height={20}
                />
                <span> Edit Profile Avatar</span>
              </div>
            </button>
          </div>

          {showAvatarOptions && (
            <div className="grid grid-cols-4 justify-center mt-4">
              {avatarOptions.map((avatar, index) => (
                <div
                  key={index}
                  className={`w-16 h-16 m-2 cursor-pointer hover:scale-110 ${
                    selectedAvatar === avatar
                      ? 'border-4 rounded-xl border-turkuaz'
                      : ''
                  }`}
                  onClick={() => handleSelectAvatar(avatar)}
                >
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={200}
                    height={200}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-xl p-4 w-full rounded-2xl bg-gri opacity-70 mt-4">
          <div className="flex flex-col items-left justify-center mt-2">
            <div className="mb-4 flex justify-between">
              <span className="bg-dark px-3 rounded-xl py-1 w-44">Level</span>
              <span className="ml-2 self-end">{progression?.level}</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="bg-dark px-3 rounded-xl py-1 w-44">XP</span>
              <span className="ml-2 self-end">{progression?.xp}</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span className="bg-dark px-3 rounded-xl py-1 self-start w-44">
                Username:
              </span>
              {isEditing ? (
                <input
                  type="text"
                  value={user?.nickname}
                  onChange={e => setUsername(e.target.value)}
                  className="ml-2 rounded-lg p-1 text-dark focus:outline-none self-end"
                />
              ) : (
                <span className="ml-2 self-end">{user?.nickname}</span>
              )}
            </div>
            <div className="mb-4 flex justify-between">
              <span className="bg-dark px-3 rounded-xl py-1 self-start w-44">
                E-mail:
              </span>
              {isEditing ? (
                <input
                  type="text"
                  value={user?.email}
                  onChange={e => setEmail(e.target.value)}
                  className="ml-2 rounded-lg p-1 text-dark focus:outline-none self-end"
                />
              ) : (
                <span className="ml-2 self-end">{user?.email}</span>
              )}
            </div>
            <div className="mb-4 flex justify-between">
              <span className="bg-dark px-3 rounded-xl py-1 self-start w-44">
                Password:
              </span>
              {isEditing ? (
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="ml-2 rounded-lg p-1 text-dark focus:outline-none self-end"
                />
              ) : (
                <span className="ml-2 self-end">{password}</span>
              )}
            </div>
            <div className="mb-4 flex justify-between">
              <span className="bg-dark px-3 rounded-xl py-1 self-start w-44">
                Balance:
              </span>
              <span className="ml-2 self-end">${balance}</span>
            </div>
            {isEditing ? (
              <button
                onClick={handleUpdateProfile}
                className="bg-dark hover:bg-turkuaz text-white font-bold py-2 px-4 rounded-2xl"
              >
                Update
              </button>
            ) : (
              <button
                onClick={handleEditProfile}
                className="bg-dark hover:bg-turkuaz text-white font-bold py-2 px-4 rounded-2xl"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
        <p className="h-8 w-296 justify-center items-center font-bold text-lg bg-gradient-to-r flex mx-2 px-2 mt-2 rounded-xl from-white to-turkuaz text-dark">
          {' '}
          Cool profile! Keep trading
          <Image
            className="mx-2 inline-block"
            src={Muscle}
            alt="muscle"
            width={24}
            height={24}
          />{' '}
        </p>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
