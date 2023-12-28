"use client"
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='py-10 mx-7 '>
			<div className='container mx-auto'>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={false}
					className="w-full"
				>

					<div className="carousel-item sd:p-5 xz:p-0 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/1.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Деркач Сергей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Невероятно комфортный диван! Мы купили его несколько недель назад, и с тех пор каждый вечер проводим на нем время в уюте и комфорте. Качество материалов на высоте, дизайн современный, а цвет идеально вписался в наш интерьер. Очень довольны покупкой!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/2.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Крюков Матвей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Офисный диван, который мы приобрели для нашего рабочего пространства, превзошел все наши ожидания. Удобство в сочетании с современным дизайном создают идеальное рабочее окружение. Сотрудники выражают благодарность за возможность отдыха в таком комфорте. Спасибо за отличный продукт!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/3.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Люторевич Анатолий
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Мягкая мебель, которую мы выбрали, стала настоящим украшением нашей гостиной. Каждый элемент тщательно продуман, материалы высочайшего качества. Гости часто замечают, насколько уютно у нас, и мы с удовольствием рекомендуем вашу мебель всем, кто ценит комфорт и стиль.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/4.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Ломачов Виталий
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Диван просто восхитителен! Мы долго искали что-то, что удовлетворило бы все наши требования к дизайну и комфорту, и ваш продукт оказался идеальным выбором. Сидение удивительно мягкое, и каждый раз, когда мы садимся на него, мы находим новые аспекты удовольствия. Благодарим за отличное качество!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/5.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Сацук Станислав
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-slate-700" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Кресло для отдыха просто великолепно! Оно не только привлекательно смотрится в нашей гостиной, но и стало моим любимым местом для чтения и релакса. Качество изготовления на высоком уровне, и я чувствую себя настоящим счастливчиком, имея такой предмет мебели в своем доме. Большое спасибо за ваш профессионализм!
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp