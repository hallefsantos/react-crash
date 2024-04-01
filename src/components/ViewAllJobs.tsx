import { Link } from "react-router-dom";

export default function AllJobs() {
  return (
    <section className="flex justify-center py-10 px-6 bg-white">
      <Link
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        View All Jobs
      </Link>
    </section>
  )
}