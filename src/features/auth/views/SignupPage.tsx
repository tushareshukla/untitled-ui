import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CONFIG from "../../../config/app.config";
import { useAuthStore } from "../../../shared/state/auth.store";

export default function SignupPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const login = useAuthStore((s) => s.login);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		login({
			id: "2",
			name: form.firstName + " " + form.lastName,
			email: form.email,
			role: "user",
		});
		navigate("/app");
	}

	return (
		<div className="min-h-screen w-full flex flex-col md:flex-row">
			{/* Left: White */}
			<div className="relative flex flex-col justify-between w-full md:w-1/2 lg:w-3/5 bg-white min-h-screen">
				{/* Logo */}
				<div className="absolute top-6 left-6 z-10">
					<img
						src={CONFIG.externalUrls.logo}
						alt="DelightLoop"
						className="h-10"
					/>
				</div>
				{/* Centered Form */}
				<div className="flex flex-1 flex-col justify-center items-center px-4 py-10">
					<form
						className="w-full max-w-[500px] mx-auto"
						onSubmit={handleSubmit}
						autoComplete="off"
					>
						{/* Title and subtitle without h1/h2 */}
						<div className="text-4xl font mb-2 text-gray-900">Sign up</div>
						<div className="text-[17px] text-gray-500 mb-8">
							Start your 30-day free trial with Delightloop
						</div>
						{/* Fields */}
						<label
							htmlFor="firstName"
							className="block mb-1 font-medium text-gray-700"
						>
							First Name*
						</label>
						<input
							id="firstName"
							name="firstName"
							value={form.firstName}
							onChange={handleChange}
							required
							className="mb-4 w-full border border-gray-200 rounded-lg px-4 py-2 text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all"
							autoComplete="off"
							spellCheck={false}
						/>
						<label
							htmlFor="lastName"
							className="block mb-1 font-medium text-gray-700"
						>
							Last Name*
						</label>
						<input
							id="lastName"
							name="lastName"
							value={form.lastName}
							onChange={handleChange}
							required
							className="mb-4 w-full border border-gray-200 rounded-lg px-4 py-2 text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all"
							autoComplete="off"
							spellCheck={false}
						/>
						<label
							htmlFor="email"
							className="block mb-1 font-medium text-gray-700"
						>
							Email*
						</label>
						<input
							id="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
							type="email"
							className="mb-4 w-full border border-gray-200 rounded-lg px-4 py-2 text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all"
							autoComplete="off"
							spellCheck={false}
						/>
						<label
							htmlFor="password"
							className="block mb-1 font-medium text-gray-700"
						>
							Password*
						</label>
						<div className="relative mb-2">
							<input
								id="password"
								name="password"
								value={form.password}
								onChange={handleChange}
								required
								type={showPassword ? "text" : "password"}
								className="w-full border border-gray-200 rounded-lg px-4 py-2 text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary pr-10 transition-all"
								autoComplete="off"
								spellCheck={false}
							/>
							<button
								type="button"
								tabIndex={-1}
								onClick={() => setShowPassword((v) => !v)}
								className="absolute top-2 right-3 text-gray-400 hover:text-primary transition"
								aria-label="Toggle password visibility"
							>
								{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
							</button>
						</div>
						<div className="text-xs text-gray-400 mb-6">
							Password include letters, numbers &amp; a special character
							(!@#...).
						</div>
						<button
							type="submit"
							className="
                            w-full
                            bg-primary-light
                            text-white
                            text-[18px]
                            font-semibold
                            rounded-lg
                            py-2
                            transition-all
                            duration-200
                            hover:bg-primary
                            active:bg-primary-light
                            focus:outline-none
                          "
						>
							Create account
						</button>

						<div className="mt-6 text-center text-gray-500 text-[15px]">
							Already have an account?{" "}
							<Link to="/login" className="text-primary hover:underline">
								Sign in
							</Link>
						</div>
					</form>
				</div>
				{/* Footer */}
				<div className="absolute left-6 bottom-6 text-xs text-gray-400">
					© DelightLoop 2025
				</div>
			</div>
			{/* Right: Gradient */}
			<div className="hidden md:block w-1/2 lg:w-2/5 min-h-screen">
				<div
					className="w-full h-full"
					style={{
						background:
							"radial-gradient(ellipse at 65% 40%, #BFA6FF 30%, #FBC1B0 70%, #C2E0FF 100%)",
						minHeight: "100vh",
					}}
				/>
			</div>
		</div>
	);
}
