import { cn } from '@/lib/utils';

function Skeleton({
 className,
 ...props
}: React.HTMLAttributes<HTMLDivElement>) {
 return (
  <div
   className={cn('animate-pulse rounded-md bg-[#EFF1F6]', className)}
   {...props}
  />
 );
}

export { Skeleton };
