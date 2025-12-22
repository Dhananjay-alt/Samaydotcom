import Image from "next/image";

type Props = {
  name: string;
  role: string;
  price: string;
  img: string;
};

export default function HeroCreatorCard({
  name,
  role,
  price,
  img,
}: Props) {
  return (
    <div className="w-56 rounded-2xl bg-black/80 backdrop-blur 
      border border-white/10 p-4 text-white shadow-xl">
      
      <Image
        src={img}
        alt={name}
        width={48}
        height={48}
        className="rounded-full mb-3"
      />

      <p className="font-medium">{name}</p>
      <p className="text-xs opacity-70">{role}</p>

      <p className="mt-2 text-sm font-semibold">
        {price} / min
      </p>
    </div>
  );
}
