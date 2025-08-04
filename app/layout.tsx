import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import { ReduxProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'E-Commerce Store',
    description: 'An e-commerce store built with Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider >
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-grow container mx-auto px-4 py-8">
                            {children}
                        </main>
                        <footer className="bg-gray-800 text-white py-6">
                            <div className="container mx-auto px-4 text-center">
                                <p>© {new Date().getFullYear()} E-Commerce Store</p>
                            </div>
                        </footer>
                    </div>
                </ReduxProvider >
            </body>
        </html>
    );
}