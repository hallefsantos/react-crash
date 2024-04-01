import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Home, NotFound } from '@pages'
import { JobsIndex, JobsCreate, JobsEdit, JobsShow } from './pages/Jobs'
import { action as createJobAction } from './pages/Jobs/Create'
import { action as editJobAction } from './pages/Jobs/Edit'
import { loader as jobLoader } from './pages/Jobs/Show'
import { action as deleteJobAction } from '@/pages/Jobs/Destroy'

import MainLayout from '@/layouts/MainLayout'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout />}
        errorElement={<NotFound />}
      >
        <Route index element={<Home />} />
        <Route path="/jobs">
          <Route index element={<JobsIndex />} />
          <Route path='create' element={<JobsCreate />} action={createJobAction} />
          <Route path=':jobId' element={<JobsShow />} loader={jobLoader} />
          <Route path=':jobId/edit' element={<JobsEdit />} loader={jobLoader} action={editJobAction} />
          <Route path=':jobId/destroy' action={deleteJobAction} />
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
