import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Мебель в Минске - каталог мебели | Цены',
  description: 'Купить мебель в Минске с доставкой. ✓ Продажа качественной и недорогой мебели в Минске. ✓ Заказать мебель в Минске. Большой выбор.',
  alternates: {
		canonical: ''
	}
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
       
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
