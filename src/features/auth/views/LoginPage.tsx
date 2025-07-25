import { Linkedin } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CONFIG from "../../../config/app.config";
import { useAuthStore } from "../../../shared/state/auth.store";

export default function LoginPage() {
	const [form, setForm] = useState({ email: "", password: "" });
	const navigate = useNavigate();
	const login = useAuthStore((s) => s.login);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		login({ id: "1", name: "Demo User", email: form.email, role: "user" });
		navigate("/app");
	}

	return (
		<div className="relative min-h-screen flex flex-col justify-between">
			<main className="flex flex-1 items-center justify-center px-2">
				<div className="w-full max-w-[420px] flex flex-col">
					{/* Logo */}
					<div className="flex justify-center mt-6 mb-7">
						<img
							src={CONFIG.externalUrls.logo}
							alt="DelightLoop"
							className="h-10"
						/>
					</div>
					{/* Headings */}
					<div className="text-center mb-5">
						<div className="text-3xl md:text-4xl text-gray-900 mb-1">
							Welcome to DelightLoop
						</div>
						<div className="text-base text-gray-500">
							Sign in to start sending personalized AI-powered gifts
						</div>
					</div>
					{/* Login Card */}
					<form
						className="bg-white rounded-2xl shadow-lg p-8 border border-[#f2f2f5] flex flex-col gap-4"
						onSubmit={handleSubmit}
						autoComplete="off"
					>
						{/* LinkedIn */}
						<button
							type="button"
							className="w-full flex items-center justify-center gap-2 bg-primary-light text-white text-base  rounded-lg py-3 mb-4 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/30 active:bg-primary-dark transition-all"
						>
							<Linkedin size={18} /> Continue with LinkedIn
						</button>
						{/* Divider */}
						<div className="flex items-center gap-3 mb-2">
							<div className="h-px bg-gray-200 flex-1" />
							<span className="text-gray-400 text-sm">OR</span>
							<div className="h-px bg-gray-200 flex-1" />
						</div>
						{/* Email */}
						<label className="block font-medium text-gray-700" htmlFor="email">
							Email
						</label>
						<input
							id="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							type="email"
							required
							placeholder="Enter your email"
							className="w-full border border-gray-200 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
							autoComplete="off"
							spellCheck={false}
						/>
						{/* Password */}
						<label
							className="block font-medium text-gray-700"
							htmlFor="password"
						>
							Password
						</label>
						<input
							id="password"
							name="password"
							value={form.password}
							onChange={handleChange}
							type="password"
							required
							placeholder="Enter your password"
							className="w-full border border-gray-200 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
							autoComplete="off"
							spellCheck={false}
						/>
						<div className="flex justify-end mb-2">
							<Link
								to="/forgot"
								className="text-primary-light text-sm hover:underline font"
							>
								Forgot password?
							</Link>
						</div>
						<button
							type="submit"
							className="w-full bg-primary-light text-white text-[17px]  rounded-lg py-2.5 transition hover:bg-primary focus:outline-none"
						>
							Sign in
						</button>
						<div className="mt-3 text-center text-gray-500 text-[15px]">
							Don&apos;t have an account?{" "}
							<Link to="/signup" className="text-primary hover:underline font">
								Sign up
							</Link>
						</div>
					</form>
				</div>
			</main>
			{/* Footer */}
			<footer className="w-full flex-shrink-0 flex items-center justify-between px-8 py-4 text-sm text-gray-400 border-t border-[#f0f0f2]">
				<span>© 2025</span>
				<div className="flex gap-8">
					<Link to="/support" className="hover:text-primary transition">
						Support
					</Link>
					<Link to="/about" className="hover:text-primary transition">
						About us
					</Link>
					<Link to="/meeting" className="hover:text-primary transition">
						Book a meeting
					</Link>
				</div>
			</footer>
		</div>
	);
}
