import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='absolute p-5 mt-10 border-t-2 border-gray-200 bg-gray-950 md:px-20 md:py-10'>
			<div className='grid sm:grid-cols-2 md:grid-cols-4 md:gap-10'>
				<div>
					<Link href='#' className='text-4xl font-bold text-fuchsia-600'>
						Logo
					</Link>
					<p className='mt-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
						ipsam maiores molestias quisquam voluptatibus odit voluptate.
					</p>
				</div>

				<div className='my-3'>
					<h4 className='text-2xl font-bold mb-3'>Plataforma</h4>
					<div className='flex flex-col'>
						<Link
							href='#overview'
							passHref
							className='hover:text-pink-500 hover:scale-105 duration-150 mb-3'
						>
							Overview
						</Link>

						<Link
							href='#features'
							passHref
							className='hover:text-pink-500 hover:scale-105 duration-150 mb-3'
						>
							Features
						</Link>

						<Link
							href='#about'
							passHref
							className='hover:text-pink-500 hover:scale-105 duration-150 mb-3'
						>
							About
						</Link>

						<Link
							href='#pricing'
							passHref
							className='hover:text-pink-500 hover:scale-105 duration-150'
						>
							Pricing
						</Link>
					</div>
				</div>

				<div className='my-3'>
					<h4 className='text-2xl font-bold'>Help</h4>
					<ul className='my-4'>
						<li className='hover:text-pink-500 cursor-pointer hover:scale-100 duration-100 mb-3'>
							How we work?
						</li>
						<li className='hover:text-pink-500 cursor-pointer hover:scale-100 duration-100 mb-3'>
							Where are the questions?
						</li>
						<li className='hover:text-pink-500 cursor-pointer hover:scale-100 duration-100 mb-3'>
							How to pay?
						</li>
						<li className='hover:text-pink-500 cursor-pointer hover:scale-100 duration-100'>
							What we need for this?
						</li>
					</ul>
				</div>

				<div className='my-3'>
					<h4 className='text-2xl font-bold'>Contacts</h4>
					<ul className='my-4'>
						<li>(+34) 662 662 662</li>
						<li>118 Lorem ipsum</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
