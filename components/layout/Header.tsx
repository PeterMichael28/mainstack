import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { GoHome } from 'react-icons/go';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsChatLeftText } from 'react-icons/bs';
import { MdOutlineAnalytics, MdOutlineWidgets } from 'react-icons/md';
import { HiOutlineCash } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import UserDialogBox from './UserDialogBox';

type Props = {};

const Header = (props: Props) => {
 return (
  <header className="flex justify-between items-center px-3 mt-3 h-[60px] w-[calc(100%-30px)] mx-auto rounded-[6rem] text-pry">
   {/* logo */}
   <Link href="/">
    <Image
     src="/mainstack-logo.png"
     width={70}
     height={70}
     alt="logo"
     className="object-contain w-9 h-9"
    />
   </Link>

   {/* navs */}
   <nav className="hidden md:flex justify-center items-center flex-1 gap-2 ">
    <Button
     variant="ghost"
     className="gap-1"
    >
     <GoHome className="text-lg" />
     <Link href="/">Home</Link>
    </Button>

    <Button
     variant="ghost"
     className="gap-1"
    >
     <MdOutlineAnalytics className="text-lg" />
     <Link href="/">Analytics</Link>
    </Button>

    <Button className="bg-[#131316] px-4 text-white rounded-[4rem] gap-[5px]">
     <HiOutlineCash className="text-lg" />
     <Link href="/">Revenue</Link>
    </Button>

    <Button
     variant="ghost"
     className="gap-1"
    >
     <FiUsers className="text-lg" />
     <Link href="/">CRM</Link>
    </Button>

    <Button
     variant="ghost"
     className="gap-1"
    >
     <MdOutlineWidgets className="text-lg" />
     <Link href="/">Apps</Link>
    </Button>
   </nav>

   <div className="flex justify-center items-center gap-6">
    <IoIosNotificationsOutline className="text-lg" />
    <BsChatLeftText className="text-lg" />

    <UserDialogBox />
   </div>
  </header>
 );
};

export default Header;
