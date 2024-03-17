import { Dropdown } from "components/Dropdown";

export default function HomePage() {
    return (
        <div className="p-12 flex flex-col items-center text-center">
            <h1 className="text-5xl font-semibold mb-8">Meses registrados</h1>
            <Dropdown />
        </div>
    );
}