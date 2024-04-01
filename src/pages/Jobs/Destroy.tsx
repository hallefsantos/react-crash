import { Params, redirect } from "react-router-dom"
import { toast } from "react-toastify"

export async function action({ params }: { params: Params }) {
  try {
    await fetch(`/api/jobs/${params.jobId}`, {
      method: 'DELETE',
    })
    toast.success('The job has been deleted')
    return redirect('/jobs')
  } catch(error) {
    console.error(error)
  }
}