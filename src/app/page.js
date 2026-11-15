import CounterPage from "@/components/count/page";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <h2 className="text-4xl font-black">Hello Next.js</h2>
      <CounterPage></CounterPage>
    </div>
  );
}
