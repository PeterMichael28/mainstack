import React from 'react';
import {
 Avatar,
 AvatarFallback,
 AvatarImage,
} from '@/components/ui/avatar';
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from '@/components/ui/popover';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { Button } from '../ui/button';
import { GoHome } from 'react-icons/go';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoReceiptOutline } from 'react-icons/io5';
import {
 MdCardGiftcard,
 MdOutlineWidgets,
 MdOutlineSwitchAccount,
} from 'react-icons/md';
import { BsBug } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { getUser } from '@/actions/transactions';

type Props = {};

export default async function UserDialogBox( props: Props ) {
    const userData = await getUser()
    

 return (
  <Popover>
   <PopoverTrigger asChild>
    <div className="bg-[#EFF1F6] rounded-[4rem] p-1 flex justify-center items-center gap-x-3 cursor-pointer">
     <Avatar className="avatar text-white w-7 h-7 bg-[linear-gradient(139deg,_#5C6670_2.33%,_#131316_96.28%)] bg-black p-1">
      <AvatarFallback className="bg-[linear-gradient(139deg,_#5C6670_2.33%,_#131316_96.28%)]">
       {`${userData.first_name[0]}${userData.last_name[0]}`}
      </AvatarFallback>
     </Avatar>

     <RxHamburgerMenu className="text-[#56616B] text-lg" />
    </div>
   </PopoverTrigger>
   <PopoverContent className="w-[260px] px-2 py-5 mr-4">
    <div className="flex justify-start items-center gap-2">
     <Avatar className="avatar text-white w-10 h-10 bg-[linear-gradient(139deg,_#5C6670_2.33%,_#131316_96.28%)] bg-black p-1">
      <AvatarFallback className="bg-[linear-gradient(139deg,_#5C6670_2.33%,_#131316_96.28%)]">
      {`${userData.first_name[0]}${userData.last_name[0]}`}
      </AvatarFallback>
     </Avatar>

     <div className="text-left">
      <h2 className="font-bold text-lg">{`${userData.first_name} ${userData.last_name}`}</h2>
      <p className="text-sm">{`${userData.email}`}</p>
     </div>
    </div>

    <div className="flex flex-col justify-between items-start gap-y-3 mt-4  text-[1.1rem]">
     <Button
      variant="ghost"
      className="gap-3 text-lg  w-full justify-start"
     >
      <AiOutlineSetting className="text-lg" />
      <Link href="/">Settings</Link>
     </Button>

     <Button
      variant="ghost"
      className="gap-3 text-lg  w-full justify-start"
     >
      <IoReceiptOutline className="text-lg" />
      <Link href="/">Purchase History</Link>
     </Button>

     <Button
      variant="ghost"
      className="gap-3 text-lg  w-full justify-start"
     >
      <MdCardGiftcard className="text-lg" />
      <Link href="/">Refer and Earn</Link>
     </Button>

     <Button
      variant="ghost"
      className="gap-3 text-lg  w-full justify-start"
     >
      <MdOutlineWidgets className="text-lg" />
      <Link href="/">Integrations</Link>
     </Button>

     <Button
      variant="ghost"
      className="gap-3 text-lg  w-full justify-start"
     >
      <BsBug className="text-lg" />
      <Link href="/">Report Bug</Link>
     </Button>

     <Button
      variant="ghost"
      className="gap-3 text-lg  w-full justify-start"
     >
      <MdOutlineSwitchAccount className="text-lg" />
      <Link href="/">Switch Account</Link>
     </Button>

     <Button
      variant="ghost"
      className="gap-3 text-lg  w-full justify-start"
     >
      <FiLogOut className="text-lg" />
      <Link href="/">Sign Out</Link>
     </Button>
    </div>
   </PopoverContent>
  </Popover>
 );
};


