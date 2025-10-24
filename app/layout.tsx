import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "UN Global Pulse Africa Hub",
    description: "Fostering data discovery and access for social good across Africa. Supporting governments and organizations in developing data strategies and implementing data-driven solutions for sustainable development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
