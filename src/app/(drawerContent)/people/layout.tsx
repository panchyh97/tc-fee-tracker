export default function PeopleLayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <h1>People</h1>
            {
                children
            }
        </>
    );
}