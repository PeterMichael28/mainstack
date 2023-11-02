
import { Suspense } from 'react';
import TopSection from '@/components/layout/TopSection';
import Transactions from '@/components/transactions/Transactions';
import TransactionsSkeleton from '@/components/transactions/TransactionsSkeleton';
import { getTransactions, getWallet } from '@/actions/transactions';

export default async function Home() {
 const transactionData = await getTransactions();
 const walletData = await getWallet();
 return (
  <main>
   <TopSection walletData={walletData}/>
   <Suspense fallback={<TransactionsSkeleton />}>
    <Transactions transactionData={transactionData} />
   </Suspense>
  </main>
 );
}
