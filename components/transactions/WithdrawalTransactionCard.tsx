import { BsArrowDownLeft } from 'react-icons/bs';
import { format } from 'date-fns';
import { Transaction } from '@/actions/static';

type WithdrawalProps = {
 transaction: Transaction;
};

export default function WithdrawalTransactionCard({
 transaction,
}: WithdrawalProps) {
 return (
  <div className="flex justify-between items-center w-full">
   {/* // transaction details */}
   <div className="flex gap-3 items-center">
    <div className="flex items-center justify-center bg-[#F9E3E0] w-[2.8rem] md:w-[3.4rem] h-[2.8rem] md:h-[3.4rem] rounded-full">
     <BsArrowDownLeft className=" text-[#961100] text-lg md:text-xl rotate-180" />
    </div>
    <div>
     <h3 className="text-mainstackBlack font-bold text-lg md:text-xl">
      Cash Withdrawal
     </h3>
     <p
      className={`text-sm font-semibold text-pry ${
       transaction?.status === 'successful'
        ? 'text-[#0EA163]'
        : transaction?.status === 'failed'
        ? 'text-[#961100]'
        : 'text-[#A77A07]'
      }`}
     >
      {' '}
      {transaction?.status}
     </p>
    </div>
   </div>

   {/* price and date */}
   <div className="text-right">
    <h3 className="text-mainstackBlack font-bold text-lg md:text-xl ">
     USD {transaction?.amount}
    </h3>
    <p className="text-pry font-semibold text-[.8rem] md:text-sm">
     {format(new Date(transaction?.date), 'PPP')}
    </p>
   </div>
  </div>
 );
}
