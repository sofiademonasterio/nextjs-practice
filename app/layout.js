import './styles/globals.css'
import { font } from './font'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'Next.js Practice',
  description: 'Training app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
