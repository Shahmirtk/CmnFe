import { useRouter } from 'next/router'

export default function categoryPage() {
    const router = useRouter()
	const category = router.query.category

    return (<div>{category}</div>)
}