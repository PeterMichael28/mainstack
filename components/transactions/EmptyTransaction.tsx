import { MdReceiptLong } from 'react-icons/md';
import { Button } from '../ui/button';

export default function EmptyTransaction() {
 return (
  <div className="max-w-[400px] flex flex-col gap-y-3 items-start text-left mx-auto my-10">
   <div className="w-[2.5rem] h-[2.5rem] rounded-[.7rem] bg-[#EFF1F6] flex justify-center items-center">
    <MdReceiptLong className="text-mainstackBlack text-s" />
   </div>

   <h2 className="text-2xl font-bold text-mainstackBlack">
    No matching transaction found for the selected filter
   </h2>
   <p className="text-pry text-sm ">
    Change your filters to see more results, or add a new product.
   </p>

   <Button className="bg-[#EFF1F6] rounded-[4rem] flex items-center justify-center text-sm text-mainstackBlack cursor-pointer">
    Clear Filter
   </Button>
  </div>
 );
}
