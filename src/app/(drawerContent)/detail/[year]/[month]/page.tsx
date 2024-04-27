'use client'

import { Button, Dropdown, Input, Modal, Table } from "@components";
import { Months, capitalizeFirstLetter, formatNumberToCLP } from "@utils";
import { useEffect, useState } from "react";
import { GET } from "./api/route";

interface ICard {
  title: string;
  amount: number;
  showIcon?: boolean;
  editBtn?: boolean;
  children?: JSX.Element;
}

interface IPurchases {
  purchaseNumber: number;
  purchaseDate: string;
  purchaseDetail: string;
  purchaseFee: number;
  purchaseTotalFees: number;
  feeValue: number;
  asignedPerson: string;
}

interface IMonthResponse {
  invoicedAmount: number,
  purchases: IPurchases[]
}

interface MonthPageProps {
  params: { year: string; month: string };
}

export default function MonthPage({ params }: MonthPageProps) {
  const { year, month } = params;

  const [monthDetail, setMonthDetail] = useState<IMonthResponse>();
  const [openRegisterPurchaseModal, setOpenRegisterPurchaseModal] = useState(false);

  const handleOpenModal = () => {
    setOpenRegisterPurchaseModal(true);
  };

  const handleCloseModal = () => {
    setOpenRegisterPurchaseModal(false);
  };

  const getMonthsSummary = () => GET(year, month).then(
    res => {
      return setMonthDetail(res.body);
    })


  useEffect(() => {
    getMonthsSummary();
  }, [year, month]);

  const transformMonth: string = Months[month]

  const calculateMonthTotal = (): number => {
    if (monthDetail) {
      const totalAmount = monthDetail.purchases.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.feeValue;
      }, 0);

      return totalAmount;
    }
    return 0;
  }

  const people = Array.from(new Set(monthDetail?.purchases.map(p => p.asignedPerson).filter((p) => p !== "")));

  const Card = ({ title, amount, showIcon = false, editBtn = false, children }: ICard) => {
    return <div className="flex flex-row bg-gray-200 px-8 py-5 rounded-2xl">
      {showIcon && <div className="w-3/12">Imagen</div>}
      <div className="flex flex-col text-xs">
        <div>
          {title} {editBtn && 'Editar'}
        </div>
        <div className="text-3xl font-semibold">
          {children ? children : formatNumberToCLP(amount)}
        </div>
      </div>
    </div>
  }

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="font-semibold uppercase text-4xl mb-8">{transformMonth} {year}</h1>
      <div className="w-full flex flex-row justify-between mb-8">
        <div className="w-2/5">
          <Card title={`Total a pagar en ${capitalizeFirstLetter(transformMonth)}`} amount={calculateMonthTotal()} showIcon />
        </div>
        <div className="w-3/12">
          {monthDetail?.invoicedAmount === 0 ?
            <Card title="Monto facturado" amount={monthDetail?.invoicedAmount as number} editBtn={
              monthDetail?.invoicedAmount > 0 ? true : false
            }>
              <Button title="+ Agregar facturación" className="text-sm" outline />
            </Card>
            : <Card title="Monto facturado" amount={monthDetail?.invoicedAmount as number} editBtn />
          }
        </div>
        <div className="w-3/12">
          <Card title="Diferencia" amount={monthDetail?.invoicedAmount as number - calculateMonthTotal()} />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Button title="Registrar compra" onClick={handleOpenModal} />
        <Modal isOpen={openRegisterPurchaseModal} onClose={handleCloseModal}>
          <>
            <h1 className="font-semibold">Agregar compra</h1>
            <div><Input placeholder="Detalle de la compra" /></div>
            <div className="flex flex-row my-8">
              <Input placeholder="Cantidad de cuotas" />
              <Input placeholder="Valor de cada cuota" />
            </div>
            <div>
              <Dropdown />
            </div>
            <div></div>
            <div><Button title="Agregar" /> </div>
          </>
        </Modal>
        <div className="w-full mx-4">
          <Button title="Agregar persona" />
        </div>
        <Button title="Agregar pago de tarjeta" />
      </div>
      <div className="w-full my-8">
        {monthDetail?.purchases && <Table purchases={monthDetail?.purchases.filter(purchase => purchase.asignedPerson === "")} />}
      </div>
      <div className="w-full grid grid-cols-2">
        {
          people.map((p, index) => {
            return monthDetail?.purchases && <Table key={index} purchases={monthDetail?.purchases.filter(purchase => purchase.asignedPerson === p)} />
          })
        }
      </div>
    </div>
  );
}