import ThemeProvider from '@/components/molecules/ThemeProvider/index.js'
import MainPage from '@/components/pages/Main/index.js'
import '@/lib/i18n.js'

export default function Application() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  )
}
