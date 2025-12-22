import Image from "next/image";
import { EvervaultCard } from "@/ui/evervault-card";
//import HeroCreatorCard from "@/components/Herocreatorcard";
import LoopedColumn from "@/components/LoopedColumn";
import { createWorkStore } from "next/dist/server/async-storage/work-store";

const creators = [
  { name: "Narendra Modi", role: "PM of India", price: "$0.21", img: "/creators/modi.png" },
  { name: "Lionel Messi", role: "Footballer", price: "$1.2", img: "/creators/messi.png" },
  { name: "Shah Rukh Khan", role: "Indian Actor", price: "$0.81", img: "/creators/srk.png" },
  { name: "Elon Musk", role: "Founder@SpaceX", price: "$18.0", img: "/creators/elon.png" },
  { name: "Ninja", role: "Gamer", price: "$15.0", img: "/creators/ninja.png" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-white to-accent">
      <section className="flex min-h-screen">
        <div className="w-1/2 md:w-1/2 flex items-center">
          <div className=" max-w-md ml-24 flex flex-col gap-5">
          <h1 className="text-5xl leading-tight text-lightgray font-bold">Time is Money </h1>
          <p className="text- basee opacity-60">Get instant acces to your favourite creators and experts.</p>
          <button className="mt-4 w-fit px-6 py-3 bg-lightgray text-white rounded-lg">Explore creators</button>
        </div>
        </div>

        {/*right side*/}
        <div className="hiddebn md:flex md:w-1/2 item-center justify-center gap-8">
          <LoopedColumn creators={creators} />
          <LoopedColumn creators={[...creators].reverse()} />
        </div>

      </section>
    </main>
  );
}
