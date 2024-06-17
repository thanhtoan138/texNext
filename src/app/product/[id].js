import { useRouter } from 'next/router'
 
export default function ProudctId() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}