import About from '@/components/About/About';
import Features from '@/components/Features/Features';
import Navbar from '@/components/Navbar/Navbar';
import Overview from '@/components/Overview/Overview';
import Plans from '@/components/Plans/Plans';
import Practice from '@/components/Practice/Practice';

export default function Home() {
	return (
		<main className='px-3 lg:px-10'>
			<Navbar />
			<Overview />
			<Features />
			<div className='max-w-5xl mx-auto'>
				<About />
			</div>
			<Practice />
			<Plans />
		</main>
	);
}
