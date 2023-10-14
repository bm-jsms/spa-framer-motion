import React from 'react';
import { MotionT } from '../MotionT';
import Image from 'next/image';

const Discount = () => {
	return (
		<MotionT>
			<div className='h-screen grid items-center px-5 py-10 md:grid-cols-2 md:p-20 rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-700'>
				<div>
					<h2 className='text-3xl font-bold md:text-5xl'>
						Puedes practicar en cualquier momento
					</h2>
					<p className='my-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
						iste, quia numquam expedita natus repellat neque, dignissimos iusto
						sunt voluptatibus tempore, molestias rem. Eius labore eos.
					</p>
					<button className='px-8 py-3 bg-pink-500 rounded-2xl hover:scale-105 duration-200 hover:bg-pink-700'>
						Tengo un Cupon
					</button>
				</div>
				<Image
					src='/assets/discount.png'
					alt='Discount Image'
					width={350}
					height={350}
					className='mx-auto'
				/>
			</div>
		</MotionT>
	);
};

export default Discount;
