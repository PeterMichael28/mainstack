import React from 'react';
import LineChartContainer from './LineChart';
import AsideNav from './AsideNav';
import { Button } from '../ui/button';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { getWallet } from '@/actions/transactions';

export type Props = {
  walletData: {
    balance: number;
    total_payout: number;
    total_revenue: number;
    pending_payout: number;
    ledger_balance: number;
  }
};

export default function TopSection({walletData}: Readonly<Props>) {
 const {
  balance,
  total_payout,
  total_revenue,
  pending_payout,
  ledger_balance,
 } = walletData;
 
  
 return (
  <section className="w-full flex flex-col lg:flex-row justify-between items-center py-16 relative max-md:px-4">
   <AsideNav />
   {/* line chart */}
   <div className="w-full md:w-8/12">
    <div className="flex items-center justify-between md:justify-center   mb-9">
     <div className="mr-auto">
      <span className="text-[.7rem] font-light text-pry">
       Available Balance
      </span>
      <h2 className="text-3xl font-extrabold">USD {balance || 0}</h2>
     </div>

     <Button className="bg-[#131316] px-12 md:px-16 py-2 text-white rounded-[4rem] gap-[5px] text-[.9rem]">
      Withdraw
     </Button>
    </div>
    <div className="w-full h-full ">
     <LineChartContainer />
    </div>
   </div>

   {/* balance section */}
   <div className="w-full md:w-3/12 flex gap-y-6 flex-col">
    {/* single balance */}
    <div>
     <div className="flex items-center justify-between">
      <p className="text-pry text-[.65rem] font-light">
       Ledger Balance
      </p>
      <AiOutlineInfoCircle className="text-pry" />
     </div>
     <h2 className="text-2xl font-extrabold mt-2">
      USD {ledger_balance || 0}
     </h2>
    </div>

    <div>
     <div className="flex items-center justify-between">
      <p className="text-pry text-[.65rem] font-light">
       Total Payout
      </p>
      <AiOutlineInfoCircle className="text-pry" />
     </div>
     <h2 className="text-2xl font-extrabold mt-2">
      USD {total_payout || 0}
     </h2>
    </div>

    <div>
     <div className="flex items-center justify-between">
      <p className="text-pry text-[.65rem] font-light">
       Total Revenue
      </p>
      <AiOutlineInfoCircle className="text-pry" />
     </div>
     <h2 className="text-2xl font-extrabold mt-2">
      USD {total_revenue || 0}
     </h2>
    </div>

    <div>
     <div className="flex items-center justify-between">
      <p className="text-pry text-[.65rem] font-light">
       Pending Payout
      </p>
      <AiOutlineInfoCircle className="text-pry" />
     </div>
     <h2 className="text-2xl font-extrabold mt-2">
      USD {pending_payout || 0}
     </h2>
    </div>
   </div>
  </section>
 );
}
