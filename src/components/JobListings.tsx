import ClipLoader from "react-spinners/ClipLoader"
import { JobListing } from '@components'
import { useEffect, useState } from 'react'
import { Job } from '@/types/job'

interface JobListingsProps {
  isHome?: boolean
}

export default function JobListings({ isHome = false }: JobListingsProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const jobListings = isHome ? jobs.slice(0, 3) : jobs
  const POSTS_HOME_LIMIT = 3

  useEffect(() => {
    (async function () {
      try {
        setLoading(true)
        const response = await fetch(`api/jobs?_limit=${isHome ? POSTS_HOME_LIMIT : ''}`)
        const data = await response.json()
        setJobs(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [isHome])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="flex justify-center">
          <ClipLoader
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListings.map(job => (
            <JobListing job={job} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  )
}