import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import RightSidebar from "@/components/RightSidebar";

const Home = () => {

  const loggedIn = { firstName: 'Gerard', lastName: 'KINGS', email: 'kaberukagerard8@gmail.com' }

  return (
    <section className='home '>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />

          <TotalBalanceBox 
            accounts={[  ]}
            totalBanks={1}
            totalCurrentBalance={10000.70}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 2000 }, { currentBalance: 5000 }]}
      />
    </section>
  )
}

export default Home