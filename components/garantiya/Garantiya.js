

const Garantiya = () => {
	return (
		<section className="mb-16" id="garantiya">
			<div className='container mx-auto'>
				<div className='border-b-4 border-emerald-600 pb-4'>
					<h4 className='text-4xl text-emerald-700 '>
						Гарантия качества
					</h4>
				</div>

				<div className='mt-10'>
					<h5 className='text-slate-700 font-semibold text-2xl'>
						При покупке нашей мебели мы предоставляем:
					</h5>

					<ul className='mt-4 sd:pl-5 xz:pl-1'>
						<li className='mb-2'>
							• Чек
						</li>
						<li className='mb-2'>
							• Гарантийный талон
						</li>
						<li className='mb-2'>
							• Эксплуатационно-технический паспорт
						</li>
						
						<li className='mb-2'>
							• Консультирование по любым вопросам
						</li>
					</ul>

					<div className='mt-7'>
						<p className='font-bold'>
							Производство:
						</p>
						<p className=''>
							Россия, 606104 Нижегородская обл.
						</p>
					</div>
					{/* <div className='mt-4'>
						<p className='font-bold'>
							Сервисный центр:
						</p>
						<p className=''>
							Республика Беларусь,  г.Минск, пр.Жукова
						</p>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default Garantiya