import Link from 'next/link';
import Image from 'next/image';

export default function AsideNav() {
 return (
  <aside className="bg-white rounded-[3rem] py-4 px-2 shadow-md absolute top-1/2 -translate-y-1/2 md:-left-[40px] lg:-left-[70px] z-20 hidden md:flex flex-col justify-center items-center gap-y-4 ">
   <Link
    href="/"
    // className="w-3 h-3"
   >
    <Image
     src="/1.png"
     alt="icon"
     className="w-4 h-4 grayscale hover:grayscale-0 transition-all duration-300"
     width={10}
     height={10}
    />
   </Link>

   <Link href="/">
    <Image
     src="/2.png"
     alt="icon"
     className="w-4 h-4 grayscale hover:grayscale-0 transition-all duration-300"
     width={10}
     height={10}
    />
   </Link>

   <Link href="/">
    <Image
     src="/3.png"
     alt="icon"
     width={10}
     height={10}
     className="w-4 h-4 grayscale hover:grayscale-0 transition-all duration-300"
    />
   </Link>

   <Link href="/">
    <Image
     src="/4.png"
     alt="icon"
     className="w-4 h-4 grayscale hover:grayscale-0 transition-all duration-300"
     width={10}
     height={10}
    />
   </Link>
  </aside>
 );
}
