import React from 'react'
import { formatNumberToCLP } from '@utils';
import { Button } from '@components'

interface IAmount {
  title: string;
  amount: number;
  formatAmount?: boolean;
}

export const MonthCard = () => {
  const Amount = ({ title, amount, formatAmount = false }: IAmount) => {
    return (
      <>
        <h5 className="mb-2 block text-xl text-gray-600 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="bg-white rounded-2xl text-3xl font-semibold px-4">
          {formatAmount ? formatNumberToCLP(amount) : amount}
        </p>
      </>)
  }

  return (
    <div className="relative flex flex-col rounded-xl bg-gray-100 bg-clip-border shadow-md p-7 min-w-96">
      <div className="relative flex flex-col items-start pb-4 font-semibold">
        <p className='text-gray-400 text-2xl'>2024</p>
        <p className='text-5xl text-gray-900'>Marzo</p>
      </div>
      <div className="">
        <Amount title="💵 Monto total" amount={1234546} formatAmount />
      </div>
      <div className="flex flex-row my-8 w-full">
        <div className='mr-4 w-full'>
          <Amount title="🛍️ Compras" amount={43} />
        </div>
        <div className='w-full'>
          <Amount title="👥 Personas" amount={2} />
        </div>
      </div>
      <Button title='Detalle del mes' />
    </div>)
}
