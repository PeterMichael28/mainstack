import { Button } from '@/components/ui/button';


type TimeFrameProps = {
    handleSelect: ( item: string ) => void;
    selectedTime: string
}

export default function TimeFrame({handleSelect, selectedTime}: TimeFrameProps ) {

    const time = [
        'Today',
        'Last 7 days',
        'This Month',
        'Last 3 Months'
    ]

    return (
        <div className="flex items-center justify-center gap-2 mt-9">
            { time.map( item => (
                <Button
                variant="outline"
                className={`border-[#eff1f6] text-[.8rem] text-mainstackBlack rounded-[6rem] flex justify-center items-center flex-1 w-full ${selectedTime === item && 'border-mainstackBlack'}`}
                key={item}
                onClick={() => handleSelect(item)}
               >
                {item}
               </Button>
            ))}
        
  
      
       </div>
    )
}