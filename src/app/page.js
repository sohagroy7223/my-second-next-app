import CounterPage from "@/components/count/page";
import Header from "@/components/header/page";
import Image from "next/image";

export default function Home() {
  console.log("hello next.js");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center  bg-white dark:bg-black ">
        <Header></Header>
        <h2 className="text-4xl font-black">Hello Next.js</h2>
        <CounterPage></CounterPage>
      </main>
    </div>
  );
}
