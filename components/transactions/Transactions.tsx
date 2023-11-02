'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { TfiExport } from 'react-icons/tfi';
import { Button } from '../ui/button';
import Filter from './Filter';
import EmptyTransaction from './EmptyTransaction';
import { filterTransactions } from '../../actions/filterMethod';
import {
 useSearchParams,
 useRouter,
 usePathname,
} from 'next/navigation';
import DepositTransactionCard from './DepositTransactionCard';
import WithdrawalTransactionCard from './WithdrawalTransactionCard';
import { Transaction } from '@/actions/static';

type Props = {};

const Transactions = ({
 transactionData,
}: {
 transactionData: Transaction[];
}) => {
 const searchParams = useSearchParams();
 const router = useRouter();
 const pathname = usePathname();

 const [allTransactions, setAllTransactions] =
  useState(transactionData);

  const time = searchParams.get('time');
  const status = searchParams.get('status');
  const type = searchParams.get( 'type' );
  
  
  useEffect( () => {
    
    const filterData = {
      dateRange: time,
      transactionTypes: type?.split(','),
      transactionStatus: status?.split(','),
    };
    const filteredTransactions = filterData.dateRange || filterData.transactionTypes || filterData.transactionStatus
  ? filterTransactions(transactionData, filterData)
  : transactionData;

// Set the allTransactions state to the filtered or unfiltered transactions, depending on whether any filter is set.
setAllTransactions(filteredTransactions)
  }, [searchParams, status, time, transactionData, type]);

 //  console.log(allTransactions);
 return (
  <section className="py-8 max-sm:px-4">
   {/* heading */}
   <div className="flex justify-between items-center mb-10">
    <div className="">
     <h3 className="font-bold text-lg text-mainstackBlack">
      <span>{allTransactions.length}</span>
      <span> Transactions</span>
     </h3>
     <p className="text-pry text-sm ">Your transactions</p>
    </div>

    {/* filter btn and export list */}
    <div className="flex justify-center items-center gap-2 ">
     <Filter />

     <Button className="bg-[#EFF1F6] rounded-[4rem] py-2 px-4 flex justify-center items-center gap-2 text-mainstackBlack hover:text-white">
      Export List <TfiExport className="text-sm" />
     </Button>
    </div>
   </div>

   {/* list container */}
   <div className="flex flex-col  gap-y-5">
    {allTransactions &&
     allTransactions?.length > 0 &&
     allTransactions?.map((transaction: Transaction) => {
      if (transaction?.type === 'deposit') {
       return (
        <DepositTransactionCard
         key={transaction?.payment_reference}
         transaction={transaction}
         loading={false}
        />
       );
      } else {
       return (
        <WithdrawalTransactionCard
         key={Math.ceil(Math.random() * 200)}
         transaction={transaction}
        />
       );
      }
     })}
   </div>

   {/* empty container */}
   {(!allTransactions || allTransactions.length === 0) && (
    <EmptyTransaction />
   )}
  </section>
 );
};

export default Transactions;
