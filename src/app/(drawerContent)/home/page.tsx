'use client'

import { useRouter } from 'next/navigation'
import { Dropdown, MonthCard } from "@components";
import { GET } from './api/route'
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

interface IMonthSummary {
    year: number;
    month: string;
    totalAmount: number;
    purchases: number;
    people: number;
}

export default function HomePage() {
    const router = useRouter()

    const [selectedYear, setSelectedYear] = useState<number>(2024);

    const handleDropdownChange = (selectedValue: number) => {
        setSelectedYear(selectedValue);
    };

    const [monthList, setMonthList] = useState<IMonthSummary[]>([]);

    const getMonthsSummary = () => GET(selectedYear as unknown as number).then(
        res => {
            return setMonthList(res.body as unknown as IMonthSummary[]);
        })

    useEffect(() => {
        getMonthsSummary();
    }, [selectedYear])

    return (
        <div className="p-12 flex flex-col items-center text-center">
            <h1 className="text-5xl font-semibold">Meses registrados</h1>
            <div className="w-full flex justify-center my-8">
                <Dropdown onChange={handleDropdownChange} initialValue={selectedYear as unknown as string} />
            </div>
            <div className="w-full max-w-4xl flex flex-row overflow-x-auto">
                <div className="invisible w-60">
                    <MonthCard month="" people={0} purchases={0} totalAmount={0} year={0} key={0} onClick={() => null} />
                </div>
                {monthList.map((month, index) => {
                    return <MonthCard key={index} {...month} onClick={() => router.push(`/detail/${selectedYear}/${month.month
                        }`)} />
                })}
            </div>
        </div>
    );
}