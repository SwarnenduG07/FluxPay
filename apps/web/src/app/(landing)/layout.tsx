

export default function landingLayout({children}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div className="h-screen bg-gradient-to-r from-30% from-purple-600 to-50% to-black">
            {children}
        </div>
    )
}