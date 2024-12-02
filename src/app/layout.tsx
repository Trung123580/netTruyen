import React from 'react'
import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.scss'
import AuthContext from '@/context/AuthContext'
import ProviderRedux from '@/context/ProviderRedux'
import NextUIContextProvider from '@/context/NextUIContextProvider'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Sidebar from '@/layout/Sidebar'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})
export const metadata: Metadata = {
  // metadataBase: new URL("https://netmovie-irac.vercel.app"),
  title: 'Net Truyen',
  // description: "Net Movie - Website xem phim online miễn phí với hàng ngàn bộ phim HD, Full HD chất lượng cao. Cập nhật phim mới liên tục, đa dạng thể loại từ hành động, lãng mạn, kinh dị đến khoa học viễn tưởng. Xem phim mọi lúc, mọi nơi trên điện thoại, máy tính bảng và PC, không quảng cáo làm phiền.",
  icons: {
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png'],
  },
  manifest: '/favicon/site.webmanifest',
  // openGraph: {
  //   title: "Net Movie",
  //   description:
  //     "Net Movie - Website xem phim online miễn phí với hàng ngàn bộ phim HD, Full HD chất lượng cao. Cập nhật phim mới liên tục, đa dạng thể loại từ hành động, lãng mạn, kinh dị đến khoa học viễn tưởng. Xem phim mọi lúc, mọi nơi trên điện thoại, máy tính bảng và PC, không quảng cáo làm phiền.",
  //   images: "images/logo-netmovie.jpg",
  // },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
}


export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${roboto.variable} font-roboto antialiased`}>
    <ProviderRedux>
      <AuthContext>
        <NextUIContextProvider>
          <Header/>
          <Sidebar/>
          {children}
          <Footer/>
        </NextUIContextProvider>
      </AuthContext>
    </ProviderRedux>
    </body>
    </html>
  )
}
