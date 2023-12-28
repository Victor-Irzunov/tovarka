import FormOrder from "@/components/Form/FormOrder";
import BtnComp from "@/components/btn/BtnComp";
import Catalog from "@/components/catalog/Catalog";
import Garantiya from "@/components/garantiya/Garantiya";
import ObratnyjZvonok from "@/components/obratnyjZvonok/ObratnyjZvonok";
import SliderComp from "@/components/sliderComp/SliderComp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="" id='main'>
      <section className="hero min-h-[90vh]" style={{ backgroundImage: 'url("/fon.webp")' }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="sd:max-w-lg">
            <h1 className="mb-5 text-white sd:text-5xl xz:text-3xl font-bold">
              Мягкая мебель от премиального произодителя <span className="block pt-2">ZIARA</span>
            </h1>
            <p className="mb-5">
              Выберите комфорт и стиль с мягкой мебелью от ZIARA. Наши изысканные диваны и кресла созданы с любовью к деталям и обеспечивают высший уровень уюта. Независимо от того, ищете ли вы классический дизайн или современные тренды, мы предлагаем широкий ассортимент, чтобы удовлетворить ваши потребности.
            </p>

            <BtnComp />
          </div>

        </div>
      </section>

      <div className='container mx-auto'>

        <section className='bg-slate-600 rounded-tr-2xl rounded-sm flex sd:justify-between xz:justify-center sd:flex-row xz:flex-col sd:p-10 xz:p-5 mt-16'>
          <div className='sd:mb-0 xz:mb-7 mx-auto w-auto sd:hidden xz:block'>
            <Image src='/img.webp' alt='Продажа техники' width={320} height={320} className="rounded-tr-xl rounded-bl-xl" />
          </div>

          <div className=''>
            <p className="text-white sd:text-2xl xz:text-xl font-semibold">
              Вы сделали правильный выбор в пользу мебели, которая сочетает в себе элегантность и комфорт. Наши изделия не только украсят ваш интерьер, но и обеспечат уютное пространство для вашей жизни. Откройте для себя уникальный стиль и качество с мягкой мебелью от ZIARA.
            </p>


          
          </div>
          <div className='w-auto xz:hidden sd:block rounded-tr-xl rounded-bl-xl ml-4'>
            <Image src='/img.webp'
              alt='Продажа техники' width={1409} height={800}
              className="rounded-tr-xl rounded-bl-xl"
            />
          </div>
        </section>


        <SliderComp />

      </div>

      <div className='bg-gradient-to-r from-slate-800 to-slate-400 py-10 relative'>
        <p className='text-center text-white uppercase text-4xl font-extrabold sd:w-[30%] xz:w-full mx-auto xz:px-5 sd:px-0 shadow-text'>
          Получите подарк при покупке нашей мебели
        </p>

        {/* <Image src='/gift.webp'
          alt='Получи 2 подарка' width={130} height={130}
          className="absolute top-1/2 left-16 -translate-y-1/2 sd:block xz:hidden"
        />
        <Image src='/gift.webp'
          alt='Получи 2 подарка' width={130} height={130}
          className="absolute top-1/2 right-16 -translate-y-1/2 sd:block xz:hidden"
        /> */}
      </div>


      <Catalog />

      <Garantiya />

      <ObratnyjZvonok />



      <dialog id="my_modal_1" className="modal">
        <div className="modal-box overflow-x-hidden">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Заказать звонок</h3>
          <p className="py-4 text-sm text-gray-400">Пожалуйста введите свой номер телефона и мы вам перезвоним в ближайшее время</p>

          <div className="modal-action">
            <FormOrder zvonok />
          </div>
        </div>
      </dialog>

    </main>
  )
}
