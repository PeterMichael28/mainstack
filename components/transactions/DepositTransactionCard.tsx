import { BsArrowDownLeft } from 'react-icons/bs';
import { format } from 'date-fns';
import { Skeleton } from '../ui/skeleton';
import { Transaction } from '@/actions/static';

type DepositProps = {
 transaction: Transaction;
 loading: boolean;
};
export default function DepositTransactionCard({
 transaction,
 loading,
}: Readonly<DepositProps>) {
 return (
  <div className="flex justify-between items-center w-full">
   {/* // transaction details */}
   <div className="flex gap-3 items-center">
    {loading ? (
     <Skeleton className="w-[2.8rem] md:w-[3.4rem] h-[2.8rem] md:h-[3.4rem] rounded-full" />
    ) : (
     <div className="flex items-center justify-center bg-[#E3FCF2] w-[2.8rem] md:w-[3.4rem] h-[2.8rem] md:h-[3.4rem] rounded-full">
      <BsArrowDownLeft className=" text-[#075132] text-lg md:text-xl" />
     </div>
    )}
    <div>
     <h3 className="text-mainstackBlack font-bold text-lg md:text-xl">
      {loading ? (
       <Skeleton className=" w-[180px] h-[28px] my-2" />
      ) : (
       transaction?.metadata?.product_name ||
       transaction?.metadata?.name
      )}
     </h3>
     <p className="text-sm font-semibold text-pry ">
      {loading ? (
       <Skeleton className="w-[100px] h-[15px]" />
      ) : (
       transaction?.metadata?.name
      )}
     </p>
    </div>
   </div>

   {/* price and date */}
   <div className="text-right">
    <h3 className="text-mainstackBlack font-bold text-lg md:text-xl ">
     {loading ? (
      <Skeleton className=" w-[55px] h-[20px]" />
     ) : (
      'USD ' + transaction?.amount
     )}
    </h3>
    <p className="text-pry font-semibold text-[.8rem] md:text-sm">
     {loading ? (
      <Skeleton className=" w-[70px] h-[15px] my-2" />
     ) : (
      format(new Date(transaction?.date), 'PPP')
     )}
    </p>
   </div>
  </div>
 );
}
