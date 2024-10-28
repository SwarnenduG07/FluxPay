export default function landingLayout({children}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div className=" h-screen bg-gradient-to-r from-10% from-purple-600 via-60% via-transparent to-90% to-black">
            {children}
        </div>
    )
}