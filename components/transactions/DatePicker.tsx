'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { BiChevronDown } from 'react-icons/bi';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from '@/components/ui/popover';

type DatePickerProps = {
 text: string;
 value: any;
 setValue: (data: any) => void;
};

export default function DatePicker({
 text,
 value,
 setValue,
}: Readonly<DatePickerProps>) {
 const footer = value ? (
  <p className="text-[.7rem] text-mainstackBlack">
   You selected {format(value, 'PPP')}.
  </p>
 ) : (
  <p className="text-[.7rem] text-mainstackBlack">
   Please pick a day.
  </p>
 );
 //  const [date, setDate] = React.useState<Date>();

 return (
  <Popover>
   <PopoverTrigger asChild>
    <Button
     variant={'outline'}
     className={cn(
      'w-full justify-start items-center text-left text-sm font-normal rounded-[.75rem] bg-[#eff1f6] text-mainstackBlack relative group',
      !value && 'text-muted-foreground',
     )}
    >
     <CalendarIcon className="mr-2 h-4 w-4" />
     {value ? format(value, 'PPP') : <span>{text}</span>}

     <BiChevronDown className="absolute text-lg right-3 top-1/2 -translate-y-1/2 group-data-[state=open]:rotate-180" />
    </Button>
   </PopoverTrigger>
   <PopoverContent className="w-ful p-0 shadow-md rounded-lg">
    <Calendar
     mode="single"
     selected={value}
     onSelect={setValue}
     initialFocus
     className="text-sm w-full"
     footer={footer}
     captionLayout="dropdown"
    />
   </PopoverContent>
  </Popover>
 );
}
