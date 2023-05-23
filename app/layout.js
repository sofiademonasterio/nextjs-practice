import './styles/globals.scss'
import { font } from './font'
import Navigation from './components/Navigation'


export const metadata = {
  title: 'Next.js Practice',
  description: 'Training app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <body class="container">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
