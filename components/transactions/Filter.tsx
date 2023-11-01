'use client';

import {  useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
 Sheet,
 SheetContent,
 SheetFooter,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from '@/components/ui/sheet';
import { BiChevronDown } from 'react-icons/bi';
import DatePicker from './DatePicker';
import TransactionType from './TransactionType';
import TransactionStatus from './TransactionStatus';
import TimeFrame from './TimeFrame';
import {
 useSearchParams,
 useRouter,
 usePathname,
} from 'next/navigation';
import qs from 'query-string';

type Props = {};

const Filter = (props: Props) => {
 const searchParams = useSearchParams();
 const router = useRouter();
 const pathname = usePathname();

 const [filterModalOpen, setFilterModalOpen] = useState(false);

 const [defaultTimeframe, setDefaultTimeframe] = useState('');

 const [customDate, setCustomDate] = useState({
  startDate: '',
  endDate: '',
 });

 const [transactionStatus, setTransactionStatus] = useState<string[]>(
  [],
 );

 const [transactionType, setTransactionType] = useState<string[]>([]);

 const totalFilter = useMemo(() => {
  return Array.from(searchParams.keys()).length;
 }, [searchParams]);

 //  console.log(customDate);
 const handleSetTimeframe = useCallback(
  (item: string) => {
   setDefaultTimeframe((prevTimeframe) =>
    prevTimeframe === item ? '' : item,
   );
  },
  [setDefaultTimeframe],
 );

 //  applying filter handler, takes all the field and attach them to the searchParams
 const handleApplyFilter = () => {
  const url = qs.stringifyUrl(
   {
    url: pathname,
    query: {
     time: defaultTimeframe
      ? defaultTimeframe
      : customDate.startDate &&
        `${customDate.startDate}-${customDate.endDate}`,
     status: transactionStatus.toString(),
     type: transactionType.toString(),
    },
   },
   { skipEmptyString: true, skipNull: true },
  );

  router.push(url);
  setFilterModalOpen(false);
 };

 //  useEffect(() => {}, [searchParams, transactions])

 return (
  <Sheet
   open={filterModalOpen}
   onOpenChange={setFilterModalOpen}
  >
   <SheetTrigger asChild>
    <Button className="bg-[#EFF1F6] rounded-[4rem] py-2 px-4 flex justify-center items-center gap-1 text-mainstackBlack hover:text-white">
     Filter
     {totalFilter > 0 && (
      <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-white text-[.75rem] bg-mainstackBlack">
       {totalFilter}
      </span>
     )}
     <BiChevronDown />
    </Button>
   </SheetTrigger>
   <SheetContent className="flex flex-col w-full sm:!max-w-[420px] px-3">
    <SheetHeader>
     <SheetTitle className="text-2xl font-bold">Filter</SheetTitle>
    </SheetHeader>

    <div className="flex-grow flex-1">
     {/* tabs */}
     <TimeFrame
      handleSelect={handleSetTimeframe}
      selectedTime={defaultTimeframe}
     />

     {/* select date */}
     <div className="w-full mt-5">
      <p className="font-bold text-lg mb-2">Date Range</p>

      <div className="grid grid-cols-2 place-items-center gap-3">
       <DatePicker
        text="Start Date"
        value={customDate.startDate}
        setValue={(data) =>
         setCustomDate({ ...customDate, startDate: data })
        }
       />
       <DatePicker
        text="End Date"
        value={customDate.endDate}
        setValue={(data) =>
         setCustomDate({ ...customDate, endDate: data })
        }
       />
      </div>
     </div>

     {/* transaction type */}
     <div className="w-full mt-5">
      <p className="font-bold text-lg mb-2">Transaction Type</p>

      <TransactionType
       data={transactionType}
       setData={setTransactionType}
      />
     </div>

     {/* transaction status */}
     <div className="w-full mt-5">
      <p className="font-bold text-lg mb-2">Transaction Status</p>

      <TransactionStatus
       data={transactionStatus}
       setData={setTransactionStatus}
      />
     </div>
    </div>

    <SheetFooter className="grid grid-cols-2 place-items-center mt-auto">
     {/* <SheetClose asChild> */}
     <Button
      type="submit"
      className="border-[#eff1f6] rounded-[6rem] py-3 text-mainstackBlack flex justify-center items-center w-full"
      variant="outline"
      onClick={() => {
       router.push(pathname);
       setFilterModalOpen(false);
      }}
     >
      Clear
     </Button>
     {/* </SheetClose> */}

     {/* <SheetClose asChild> */}
     <Button
      type="submit"
      className=" rounded-[6rem] py-3 text-sm text-white bg-mainstackBlack disabled:bg-[#dbdee5] flex justify-center items-center w-full"
      //    disabled
      onClick={handleApplyFilter}
     >
      Apply
     </Button>
     {/* </SheetClose> */}
    </SheetFooter>
   </SheetContent>
  </Sheet>
 );
};

export default Filter;
