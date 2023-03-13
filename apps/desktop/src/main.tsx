import React from 'react'
import ReactDOM from 'react-dom/client'
import { tw } from 'typewind'

import Test from './app/test'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className={'bg-red-50'}>Hi</div>
    <div className={tw.bg_cyan_50.p_2}>Hi</div>
    <Test></Test>
  </React.StrictMode>
)

// import { getRoutes } from '@vault/desktop/router'
// const loopthru = async (routes: ReturnType<typeof getRoutes>) => {
//   for (const route in routes) {
//     const r = routes[route]
//     if (typeof r === 'object') await loopthru(r as ReturnType<typeof getRoutes>)
//     else if (typeof r === 'function') {
//       const b = await r()
//       console.log(b)
//     }
//   }
// }

// void (async function () {
//   loopthru(getRoutes())
// })()
