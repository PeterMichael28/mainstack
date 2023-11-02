// TransactionsSkeleton

import { TfiExport } from 'react-icons/tfi';
import { Button } from '../ui/button';
import DepositTransactionCard from './DepositTransactionCard';
type Props = {};

const trans = {
    amount: 500,
    metadata: {
      name: "John Doe",
      type: "digital_product",
      email: "johndoe@example.com",
      quantity: 1,
      country: "Nigeria",
      product_name: "Rich Dad Poor Dad"
    },
    payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
    status: "successful",
    type: "deposit",
    date: "2022-03-03"
  },

const TransactionsSkeleton = (props: Props) => {
 return (
  <section className="py-8 ">
   {/* heading */}
   <div className="flex justify-between items-center mb-10">
    <div className="">
     <h3 className="font-bold text-lg text-mainstackBlack">
      <span></span>
      <span> Transactions</span>
     </h3>
     <p className="text-pry text-sm ">Your transactions</p>
    </div>

    {/* filter btn and export list */}
    <div className="flex justify-center items-center gap-2 ">
     {/* <Filter /> */}

     <Button className="bg-[#EFF1F6] rounded-[4rem] py-2 px-4 flex justify-center items-center gap-2 text-mainstackBlack hover:text-white">
      Export List <TfiExport className="text-sm" />
     </Button>
    </div>
   </div>

   {/* list container */}
   <div className="flex flex-col  gap-y-5">
    {[1, 2, 3, 4, 5].map((transaction) => {
     return (
      <DepositTransactionCard
       key={transaction}
       loading={true}
       transaction={trans}
      />
     );
    })}
   </div>
  </section>
 );
};

export default TransactionsSkeleton;
