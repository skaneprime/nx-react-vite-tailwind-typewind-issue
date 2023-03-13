import { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import './App.css'
import { tw } from 'typewind'
// import { UiBase } from '@vault/ui/base'

function App() {
  const [greetMsg, setGreetMsg] = useState('')
  const [name, setName] = useState('')

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }))
  }
  return (
    <div className={tw.justify_center.text_center.items_center}>
      {/* <UiBase /> */}
      <h1>Welcome to Tauri! 6</h1>
      <input
        id="greet-input"
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Enter a name..."
      />
      <button type="button" onClick={() => greet()}>
        Greet
      </button>
      <p>{greetMsg}</p>
    </div>
  )
}

export default App
