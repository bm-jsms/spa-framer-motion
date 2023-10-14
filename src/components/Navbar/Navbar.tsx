import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

function Navbar() {
	return (
		<div className='grid items-center justify-between lg:grid-cols-2 gap-4 lg:gap-20 md:px-20'>
			<div className='text-5xl text-blue-500 font-semibold'>Logo</div>
			<div className={`${inter.className} flex gap-4 text-center`}>
				<Link href='#overview'>Overview</Link>
				<Link href='#features'>Features</Link>
				<Link href='#about'>About</Link>
				<Link href='#practice'>Practice</Link>
				<Link href='#pricing'>Pricing</Link>
			</div>
		</div>
	);
}

export default Navbar;
