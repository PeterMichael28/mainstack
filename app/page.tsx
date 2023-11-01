
import { Suspense } from 'react';
import TopSection from '@/components/layout/TopSection';
import Transactions from '@/components/transactions/Transactions';
import TransactionsSkeleton from '@/components/transactions/TransactionsSkeleton';
import { getTransactions } from '@/actions/transactions';

export default async function Home() {
 const transactionData = await getTransactions();
 return (
  <main>
   <TopSection />
   <Suspense fallback={<TransactionsSkeleton />}>
    <Transactions transactionData={transactionData} />
   </Suspense>
  </main>
 );
}
