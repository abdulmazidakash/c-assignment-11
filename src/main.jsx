import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position='top-center' reverseOrder={false} />
      </AuthProvider>
      </HelmetProvider>
  </React.StrictMode>
)
