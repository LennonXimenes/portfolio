import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.tsx"
import { RepoProvider } from "./providers/RepoContext.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RepoProvider>
      <App />
    </RepoProvider>
  </React.StrictMode>,
)
