'use client';

import { Checkbox } from '../ui/checkbox';
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from '../ui/popover';
import { BiChevronDown } from 'react-icons/bi';

type TransactionStatusProps = {
 data: string[];
 setData: (data: any) => void;
};

export default function TransactionStatus({
 data,
 setData,
}: Readonly<TransactionStatusProps>) {
 //  const [data, setData] = useState<string[]>([]);

 const transactionArray = ['Successful', 'Pending', 'Failed'];

 return (
  <Popover>
   <PopoverTrigger asChild>
    <div className="bg-[#EFF1F6] group rounded-lg w-full focus:ring-2 data-[state=open]:ring-mainstackBlack focus:ring-mainstackBlack focus:bg-white  py-3 px-4 data-[state=open]:ring-2 text-sm relative">
     {data.length > 0 && data.toString()}
     {data.length === 0 && 'No transaction Type'}
     <BiChevronDown className="absolute text-lg right-3 top-1/2 -translate-y-1/2 group-data-[state=open]:rotate-180" />
    </div>
   </PopoverTrigger>
   <PopoverContent className="w-full sm:!w-[390px]  p-3 bg-white shadow-md rounded-xl">
    <div className="flex flex-col gap-y-5 items-start py-3">
     {transactionArray.map((item) => (
      <div
       className="flex items-center space-x-3"
       key={item}
      >
       <Checkbox
        name={item}
        id={item}
        checked={data?.includes(item.toLowerCase())}
        onCheckedChange={(checked) => {
         return checked
          ? setData([...data, item.toLowerCase()])
          : setData(
             data?.filter(
              (value) => value.toLowerCase() !== item.toLowerCase(),
             ),
            );
        }}
        className="data-[state=checked]:bg-mainstackBlack data-[state=checked]:text-white h-[16px] w-[16px] focus-visible:ring-black/10 "
       />
       <label
        htmlFor={item}
        className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-mainstackBlack font-semibold text-sm"
       >
        {item}
       </label>
      </div>
     ))}
    </div>
   </PopoverContent>
  </Popover>
 );
}
