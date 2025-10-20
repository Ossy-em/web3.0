import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TransactionsProvider } from "./context/TransactionContext";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </TransactionsProvider>
)
