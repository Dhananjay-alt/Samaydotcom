import HeroCreatorCard from "./Herocreatorcard";

type Creator = {
  name: string;
  role: string;
  price: string;
  img: string;
};

export default function LoopedColumn({
  creators,
}: {
  creators: Creator[];
}) {
  return (
    <div className="overflow-hidden h-[520px] w-[260px]">
      <div className="marquee flex flex-col gap-6">
        {[...creators, ...creators].map((c, i) => (
          <HeroCreatorCard
            key={i}
            name={c.name}
            role={c.role}
            price={c.price}
            img={c.img}
          />
        ))}
      </div>
    </div>
  );
}
