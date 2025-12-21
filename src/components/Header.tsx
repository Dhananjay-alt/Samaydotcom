import Image from "next/image";

export default function Header() {
  return (
    <header className="h-20 bg-primary text-white flex items-center px-6 font-oswald gap-8">
        <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Logo" width={40} height={40}></Image>
        <h1 className="text-2xl">
          Samay<span className="text-accent">.</span><span className="text-accent">fun</span>
        </h1>
        </div>
        <input 
          type="search"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg text-white flex items-center outline-none focus:ring-2 focus:ring-accent"
        />
        <button className="px-6 py-2 rounded-lg bg-lightgray hover:shadow-[0_0_20px_rgba(0,173,181,1)] transition-all border-2 border-accent ml-auto">
        Get Started
        </button>
    </header>
  );
}
