export default function HomeLayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <h1>Home</h1>
            {children}
        </>
    );
}