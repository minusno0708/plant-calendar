'use client';
import { useSession } from 'next-auth/react';
import Login from './components/Login';
import Logout from './components/Logout';

export default function Home() {
  const { data: session, status } = useSession();
  const accessToken = session?.accessToken;

  console.log(accessToken);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Plant Calendar</h1>
        <p className="text-lg mt-4">植物の管理をサポートするアプリ</p>
      </div>

      <div>
        {status === 'authenticated' ? (
          <div>
            <p>ようこそ {session.user?.email} さん</p>
            
            <div>
              <p>カレンダー</p>
              <p>{session.user?.name}</p>
            </div>
            <div>
              <Logout />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </main>
  );
}
