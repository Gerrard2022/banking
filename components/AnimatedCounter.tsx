'use client';

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp 
        duration={2.75}
        decimals={2}
        decimal=','
        prefix='RWF'
        end={amount}
        />
    </div>
  )
}

export default AnimatedCounter