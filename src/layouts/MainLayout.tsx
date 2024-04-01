import { Navbar } from '@components'
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        pauseOnFocusLoss={false}
      />
    </>
  )
}