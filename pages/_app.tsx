import type { AppProps } from 'next/app'
import '@/styles/globals.scss'

import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
