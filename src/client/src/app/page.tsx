import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Plant Calendar</h1>
        <p className="text-lg mt-4">植物の管理をサポートするアプリ</p>
      </div>
    </main>
  );
}
