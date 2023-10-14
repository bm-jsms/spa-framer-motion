import Footer from '@/components/Footer/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	style: ['normal', 'italic'],
	weight: ['400', '700', '200'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'SPA Website',
	description: 'Una Spa con NextJS y Framer Motion',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es'>
			<body className={poppins.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
