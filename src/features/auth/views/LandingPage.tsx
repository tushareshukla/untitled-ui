export default function LandingPage() {
	return (
		<div className="text-center py-24">
			<h1 className="text-4xl font-bold mb-6">Welcome to MyApp</h1>
			<a className="text-blue-600 underline mr-4" href="/login">
				Login
			</a>
			<a className="text-blue-600 underline" href="/signup">
				Sign Up
			</a>
		</div>
	);
}
