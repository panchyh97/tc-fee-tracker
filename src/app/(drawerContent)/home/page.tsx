import { Dropdown, MonthCard } from "@components";

export default function HomePage() {
    return (
        <div className="p-12 flex flex-col items-center text-center">
            <h1 className="text-5xl font-semibold">Meses registrados</h1>
            <div className="w-full flex justify-center my-8">
                <Dropdown />
            </div>
            <MonthCard />
        </div>
    );
}