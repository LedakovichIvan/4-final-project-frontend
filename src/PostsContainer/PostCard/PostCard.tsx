import clsx from 'clsx';
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import heartEmpty from '../../images/svg/heartEmpty.svg';
import heartFull from '../../images/svg/heartFull.svg';
import { postName } from '../../ui/styles';
import PostCardImage from './PostCardImage';

const PostCard: React.FC<{
	id: number;
	image;
	header: string;
	text: string;
	authorId: number;
	likesQuantity: number;
}> = ({ id, image, header, text, authorId, likesQuantity }) => {
	const user = useSelector((state: any) => state.user);

	const [iLikedThisPost, setILikedThisPost] = useState(
		user.likedPosts.find((element) => element === id)
	);

	return (
		<>
			<Link to={`/posts/${id}`}>
				<div
					className={clsx(
						'w-full',
						'h-[585px]',
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-black',
						'xl:h-[685px]'
					)}
				>
					<PostCardImage imgSrc={image.data} />

					<div
						className={clsx(
							'w-full',
							'h-[100px]',
							'border-y-[3px]',
							'border-solid',
							'border-black'
						)}
					>
						<div className={postName}>
							<h3
								className={clsx(
									'w-auto',
									'mx-3',
									'text-2xl',
									'mt-[4%]',
									'mb-[2%]',
									'font-bold'
								)}
							>
								{header}
							</h3>
						</div>
					</div>

					<div
						className={clsx('w-full', 'h-[170px]', 'border-solid', 'border-black')}
					>
						<p
							className={clsx(
								'w-auto',
								'mx-3',
								'text-m',
								'mt-[4%]',
								'mb-[2%]',
								'font-bold'
							)}
						>
							{text}
						</p>
					</div>

					<div className={clsx('flex', 'items-center')}>
						<img
							className={clsx('w-[22px], h-[22px]', 'ml-3')}
							src={iLikedThisPost ? heartFull : heartEmpty}
							alt="heartImage"
						/>

						<p className={clsx('text-xl', 'font-semibold', 'ml-2')}>
							{likesQuantity ? likesQuantity : '0'}
						</p>
					</div>
				</div>
			</Link>
		</>
	);
};

export default memo(PostCard);
