import {
  Hero,
  HomeCards,
  JobListings,
  ViewAllJobs
} from '@components'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}