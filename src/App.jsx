import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compra from './components/Compra'
import LiveCycle from './components/LiveCycle'
import FetchCard from './components/FetchCard'

function App() {


  return (
    <>
    {/* <Compra/> */}
    <h1>App</h1>
    {/* <LiveCycle name='fran' /> */}
    {/* <FetchCard/> */}
    </>
  )
}

export default App

{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    Click nro: {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}