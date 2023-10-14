import React from 'react';
import Image from 'next/image';
import { dataSocialNetworks } from '@/data/DataSocialNetworks';
import Link from 'next/link';

const Overview = () => {
	return (
		<div
			id='overview'
			className='p-5 mt-3 md:px-24 md:py-52 bg-cover bg-gradient-to-r from-purple-900 to-fuchsia-900'
		>
			<div className='items-center md:grid md:grid-cols-2'>
				<div>
					<h1 className='text-4xl font-bold text-white md:leadding-snug md:text-5xl'>
						Desarrolla tus skills <br />
						para el Futuro
					</h1>

					<p className='mt-5 text-white'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus distinctio amet doloribus accusantium obcaecati itaque
						possimus quis debitis ullam ducimus, libero, tempora error optio
						magni aspernatur temporibus aliquam ex architecto.
					</p>

					<div className='flex justify-start gap-4 my-10 text-slate-500'>
						{dataSocialNetworks.map(({ id, icon, name, link }) => (
							<Link href={link} key={id} target='_blank' rel='noreferrer'>
								<Image
									src={`/svg/${icon}.svg`}
									alt={name}
									width={40}
									height={40}
								/>
							</Link>
						))}
					</div>
					<div className='flex justify-between'>
						<button className='px-8 py-3 mr-10 bg-pink-500 rounded-2xl hover:scale-105 duration-200 hover:bg-pink-600'>
							Empieza ya!
						</button>
						<button className='px-8 py-3 mr-10 text-white border-2 rounded-2xl hover:scale-105 duration-200'>
							Tengo un Cupon
						</button>
					</div>
				</div>
				<div>
					<Image
						src='/assets/overview.png'
						alt='Overview S'
						width={350}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
};

export default Overview;
