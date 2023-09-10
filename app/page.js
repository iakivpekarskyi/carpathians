import Image from "next/image";
import logo from "/public/logo.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        hello world
      </div>
      <Image
        src={logo}
        alt="Logo"
        width={40} // Adjust the width as needed
        height={40} // Adjust the height as needed
      />
      <p className="ml-2 text-xl font-semibold">Carp Tavel</p>
    </main>
  );
}
