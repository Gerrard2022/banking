import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = { firstName: 'Gerard' }

  return (
    <section className='home '>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage ypur account and transactions efficiently.'
          />

          <TotalBalanceBox 
            accounts={[  ]}
            totalBanks={1}
            totalCurrentBalance={10000.70}
          />
        </header>
      </div>
    </section>
  )
}

export default Home