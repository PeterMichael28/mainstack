export function filterTransactions(transactions: any, filters: any) {
    const { dateRange, transactionTypes, transactionStatus } = filters;
    
    const isDateInRange = (date: number | Date, startDate: string | number | Date, endDate: string | number | Date) => {
      return date >= new Date(startDate) && date <= new Date(endDate);
    };
    
    
    const currentDate = new Date();
    let startDate: Date | null, endDate: Date | null;
   
    if (dateRange === "Today") {
      startDate = new Date(currentDate);
      endDate = new Date(currentDate);
    } else if (dateRange === "yesterday") {
      currentDate.setDate(currentDate.getDate() - 1);
      startDate = new Date(currentDate);
      endDate = new Date(currentDate);
    } else if (dateRange === "Last 7 days") {
      currentDate.setDate(currentDate.getDate() - 7);
      startDate = new Date(currentDate);
      endDate = new Date();
    } else if (dateRange === "This Month") {
      currentDate.setMonth(currentDate.getMonth());
      startDate = new Date(currentDate);
      endDate = new Date();
    } else if (dateRange === "Last 3 Months") {
      currentDate.setMonth(currentDate.getMonth() - 3);
      startDate = new Date(currentDate);
      endDate = new Date();
    } else if (dateRange?.split('-')) {
      startDate = dateRange?.split('-')[0];
      endDate = dateRange?.split('-')[1];
    } else {
      // Handle invalid date range
      startDate = null;
      endDate = null;
    }
    
    return transactions.filter((transaction: { date: any; type: any; status: any; }) => {
      const { date, type, status } = transaction;
      
      // Check if the transaction date is within the selected date range
      if (startDate && endDate && !isDateInRange(new Date(date), startDate, endDate)) {
        return false;
      }
      
      if (transactionTypes?.length > 0 && !transactionTypes.includes(type)) {
        return false;
      }
      
      if (transactionStatus?.length > 0 && !transactionStatus.includes(status)) {
        return false;
      }
      
      return true;
    });
  }