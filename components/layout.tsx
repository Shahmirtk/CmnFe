import Navbar from '../components/navbar'

export default function Layout({ children }) {
	return (
		<div className="dark:bg-secondary">
			<Navbar />
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-2"></div>
				<div className="col-span-8">{children}</div>
				<div className="col-span-2"></div>
			</div>
		</div>
	)
}
