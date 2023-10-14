import React from 'react';
import { MotionT } from '../MotionT';

const Practice = () => {
	return (
		<MotionT>
			<div
				id='practice'
				className='grid items-center py-20 md:grid-cols-2 md:py-56'
			>
				<div className='md:pr-20'>
					<h2 className='mb-10 text-4xl font-bold'>
						Puedes practicar a<br />
						cualquier hora
						<span className='text-pink-400'> que se adpate a ti.</span>
					</h2>
					<p className='mb-10 '>
						{' '}
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut totam
						id et tempora aspernatur blanditiis. Veniam culpa eveniet veritatis
						impedit porro dolore nemo rem! Laboriosam, et. Quia fugit quo
						accusantium?
					</p>

					<button className='px-8 py-3 rounded-2xl bg-pink-500 rounded-2 xl hover:scale-105 duration-200 hover:bg-pink-700'>
						Empiza ya!
					</button>
				</div>
				<video width={750} height={500} autoPlay muted loop>
					<source src='/assets/business.mp4' type='video/mp4' />
				</video>
			</div>
		</MotionT>
	);
};

export default Practice;
