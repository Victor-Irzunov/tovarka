import FormOrder from "../Form/FormOrder"


const ObratnyjZvonok = () => {
	return (
		<section className="bg-gradient-to-r from-slate-800 to-slate-400 sd:py-20 xz:py-10">
			<div className='container mx-auto sd:flex justify-between items-center xz:flex-row'>
				<div className='text-white sd:w-1/2 xz:w-full'>
					<p className='font-bold text-2xl'>
						Закажите обратный звонок
					</p>
					<p className=''>
						Закажите звонок, менеджер перезвонит вам в течение 10 минут и ответит на все вопросы, касающиеся выбора и приобретения техники и оборудования.
					</p>
				</div>

				<div className=' sd:w-1/2 xz:w-full sd:text-right xz:text-center sd:mt-0 xz:mt-7'>
					<FormOrder zvonok/>
				</div>

			</div>
		</section>
	)
}

export default ObratnyjZvonok