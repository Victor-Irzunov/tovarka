"use client"
import { sendOrderTelegram } from '@/http/telegramAPI';
import { useState } from 'react';
import InputMask from 'react-input-mask'

const FormOrder = ({ zvonok, product }) => {
	const [isActive, setIsActive] = useState(false)
	const [tel, setTel] = useState('')
	const [formData, setFormData] = useState({
		phone: '',
	});


	const handleSubmit = (e) => {
		e.preventDefault();

		const telWithoutSpaces = tel.replace(/\s/g, '');

		let messageForm = `<b>Клиент с сайта Холдинг ${zvonok ? 'Просит перезвонить' : 'Хочет купить'}:</b>\n`;
		messageForm += `<b>${product || ''}</b>\n`;
		messageForm += `<b>--------------- </b>\n`;
		messageForm += `<b>Телефон:</b> <a href="tel:${telWithoutSpaces}">${tel}</a>\n`;
		messageForm += `<b>--------------- </b>\n`;



		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					setTel('');
					document.getElementById("my_modal_1").close();
					document.getElementById('my_modal_3').showModal()
					setTimeout(() => {
						document.getElementById('my_modal_3').close()
					}, 3000)
				}
			});
	};



	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}

	return (
		<>
			{
				isActive ?
					<div role="alert" className="alert alert-warning">
						<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
						<span>
							Введите пожалуйста корректный номер телефона!
						</span>
					</div>
					:
					null
			}
			<div className="w-full">
				<form className="" onSubmit={handleSubmit}>
					<div className="join">
						<div className="form-control">
							{/* <label className="label">
								<span className="label-text">Телефон</span>
								<span className="label-text-alt">Обязательное поле</span>
							</label> */}
							<InputMask
								placeholder="Введите ваш телефон"
								mask="8\0\ 99 9999999"
								maskChar={'-'}
								className="input input-bordered join-item sd:w-80 xz:w-auto xy:w-60 text-sm"
								beforeMaskedValueChange={beforeMaskedValueChange}
								value={tel}
								onChange={(e) => setTel(e.target.value)}
								required
							/>
						</div>
						<div className="form-control">
							<button className="btn join-item bg-transparent border-slate-800" type="submit">
								{zvonok ? 'Заказать звонок' : 'Купить'}
							</button>
						</div>
					</div>
				</form>
			</div>


			<dialog id="my_modal_3" className="modal">
				<div className="modal-box">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<h3 className="font-bold text-lg">Ваш запрос принят</h3>
					<p className="py-4">Мы вам перезвоним в ближайшее время.</p>
				</div>
			</dialog>
		</>
	);
};

export default FormOrder;
