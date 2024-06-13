export default function RootLayout({ children }) {
    return (
        <html>

            <body>
                <h1>head</h1>
                {children}
                <h1>boter</h1>
            </body>
        </html>
    )
}
