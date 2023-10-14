import React from 'react';
import { MotionT } from '../MotionT/MotionT';
import Image from 'next/image';

const About = () => {
	return (
		<div
			id='about'
			className='grid imtes-center py-28 md:grid-cols-2 lg:py-56 '
		>
			<MotionT>
				<Image src='/assets/about.png' alt='about S' width={500} height={400} />
			</MotionT>
			<div className='md:pr-20'>
				<h2 className='mb-10 text-4xl font-extrabold'>
					Hemos estado <br />
					<span className='text-blue-500'>mejorando nuestro producto</span>
					<br />
					durante años.
				</h2>
				<p className='mb-10 '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
					placeat neque quo quos id possimus nam repudiandae, rem nesciunt.
					Veritatis aliquam quam ipsa, nulla ratione deleniti aliquid nobis
					impedit dignissimos.
				</p>
				<button className='px-8 py-3 bg-pink-500 rounded-2 xl hover:scale-105 duration-200 hover:bg-pink-700'>
					Empieza ya!
				</button>
			</div>
		</div>
	);
};

export default About;
