import {screen, render } from '@testing-library/react'
import TopSection from '@/components/layout/TopSection'



const mockWalletData = {
    balance: 750.56,
    total_payout: 500,
    total_revenue: 1250,
    pending_payout: 0,
    ledger_balance: 700
}
// new stuff

  
describe( 'Testing Top Section', () => {

 
    
    it( 'it should display the Available balance', async () => {

    render(<TopSection walletData={mockWalletData}/>)

    expect(screen.getByRole('heading', {name: 'USD 750.56'})).toBeInTheDocument()
    
    expect(screen.getByText('Available Balance')).toBeInTheDocument()
        
    })


     
    it( 'it should display the Ledger Balance ', async () => {

        render(<TopSection walletData={mockWalletData}/>)
    
        expect(screen.getByRole('heading', {name: 'USD 700'})).toBeInTheDocument()
        
        expect(screen.getByText('Ledger Balance')).toBeInTheDocument()
            
        })

    
        it( 'it should display the Total Payout ', async () => {

            render(<TopSection walletData={mockWalletData}/>)
        
            expect(screen.getByRole('heading', {name: 'USD 500'})).toBeInTheDocument()
            
            expect(screen.getByText('Total Payout')).toBeInTheDocument()
                
        } )

        it( 'it should display the Total Revenue ', async () => {

            render(<TopSection walletData={mockWalletData}/>)
        
            expect(screen.getByRole('heading', {name: 'USD 1250'})).toBeInTheDocument()
            
            expect(screen.getByText('Total Revenue')).toBeInTheDocument()
                
            })
   
})
  
