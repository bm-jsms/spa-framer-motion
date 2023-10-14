import React from 'react';
import { dataFeatures } from './Features.data';
import Image from 'next/image';
import { MotionT } from '../MotionT/MotionT';

const Features = () => {
	return (
		<div
			id='features'
			className='grid grid-cols-2 gap-16 my-20 md:grid-cols-4 md:py-56'
		>
			<div>
				<h2 className='mb-4 text-4xl font-bold'>
					{' '}
					Porque somos <br />
					<span className='text-pink-400'> mejores que otros</span>
				</h2>
			</div>
			<div className='flex flex-direction-column gap-10'>
				{dataFeatures.map(({ id, image, text, additionalClass }) => (
					<MotionT key={id}>
						<div key={id}>
							<div
								className={`rounded-3xl shadow-md p-6 shadow-pink-500 ${additionalClass} w-56 px-auto`}
							>
								<Image
									src={`/assets/${image}.png`}
									alt={`Imagen ${text}`}
									width='100'
									height='100'
								/>
								<h3 className='mt-3 mr-20 text-lg font-bold text-center'>
									{text}
								</h3>
							</div>
						</div>
					</MotionT>
				))}
			</div>
		</div>
	);
};

export default Features;
