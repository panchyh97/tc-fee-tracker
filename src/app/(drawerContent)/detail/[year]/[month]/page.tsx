import { Button } from "@components";
import { Months, capitalizeFirstLetter, formatNumberToCLP } from "@utils";

interface ICard {
  title: string;
  amount: number;
  showIcon?: boolean;
  editBtn?: boolean;
}

export default function MonthPage({ params }: { params: { year: string, month: string } }) {
  const { year, month } = params;

  const transformMonth: string = Months[month]

  const Card = ({ title, amount, showIcon = false, editBtn = false }: ICard) => {
    return <div className="flex flex-row bg-gray-200 px-8 py-5 rounded-2xl">
      {showIcon && <div className="w-3/12">Imagen</div>}
      <div className="flex flex-col text-xs">
        <div>
          {title} {editBtn && 'Editar'}
        </div>
        <div className="text-3xl font-semibold">
          {formatNumberToCLP(amount)}
        </div>
      </div>
    </div>
  }

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="font-semibold uppercase text-4xl mb-8">{transformMonth} {year}</h1>
      <div className="w-full flex flex-row justify-between mb-8">
        <div className="w-2/5">
          <Card title={`Total a pagar en ${capitalizeFirstLetter(transformMonth)}`} amount={432} showIcon />
        </div>
        <div className="w-3/12">
          <Card title="Monto facturado" amount={432} editBtn />
        </div>
        <div className="w-3/12">
          <Card title="Diferencia" amount={432} />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Button title="Registrar compra" />
        <div className="w-full mx-4">
          <Button title="Agregar persona" />
        </div>
        <Button title="Agregar pago de tarjeta" />
      </div>
      <div></div>
    </div>
  );
}