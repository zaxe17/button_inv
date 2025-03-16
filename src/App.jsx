import Starbg from "./Starbg";
import { motion } from "framer-motion";
import { button } from "./var";
import {
	FaSquareInstagram,
	FaLinkedin,
	FaGithub,
	FaFacebook,
} from "react-icons/fa6";

const headline = "Join my Discord server or invite bot to your server!";
const letters = headline.split("");

const socialLinks = [
	{
		href: "https://www.instagram.com/zaxe.jm/",
		icon: <FaSquareInstagram />,
		label: "Instagram",
	},
	{
		href: "https://www.linkedin.com/in/jan-marc-jacolbia-b86a00296/",
		icon: <FaLinkedin />,
		label: "LinkedIn",
	},
	{
		href: "https://github.com/zaxe17",
		icon: <FaGithub />,
		label: "GitHub",
	},
	{
		href: "https://www.facebook.com/janmarc.soberanojacolbia.9",
		icon: <FaFacebook />,
		label: "Facebook",
	},
];

const App = () => {
	return (
		<div className="relative w-screen h-screen overflow-hidden flex items-center justify-center select-none">
			<div className="absolute top-0 left-0 w-full h-full z-0">
				<Starbg />
			</div>

			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 lg:w-7/12">
				<div className="text-center">
					{letters.map((letter, index) => (
						<motion.h1
							key={index}
							className="text-neutral-100 text-sm/10 lg:text-3xl/15 tracking-[5px] lg:tracking-[15px] uppercase text-shadow-white inline-block"
							initial={{
								filter: "blur(10px)",
								opacity: 0,
								y: 12,
							}}
							animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 * index }}>
							{letter === " " ? "\u00A0" : letter}
						</motion.h1>
					))}
				</div>

				<div className="flex items-center justify-center gap-6 lg:gap-10 mt-10 font-thin tracking-[15px]">
					{button.map((btn, index) => (
						<motion.button
							className="px-5 lg:px-15 py-2 lg:py-3 rounded-md relative radial-gradient cursor-pointer"
							initial={{ "--x": "100%", scale: 1 }}
							animate={{ "--x": "-100%" }}
							whileTap={{ scale: 0.97 }}
							transition={{
								repeat: Infinity,
								repeatType: "loop",
								repeatDelay: 1,
								type: "spring",
								stiffness: 20,
								damping: 15,
								mass: 2,
								scale: {
									type: "spring",
									stiffness: 10,
									damping: 5,
									mass: 0.1,
								},
							}}
							onClick={() => (window.location.href = btn.link)}>
							<span className="text-neutral-100 font-light h-full w-full block relative -right-[6px] linear-mask text-[10px] lg:text-2xl uppercase text-shadow-white">
								{btn.label}
							</span>
							<span className="block absolute inset-0 rounded-md p-px linear-overlay" />
						</motion.button>
					))}
				</div>
			</div>
			<div className="absolute flex gap-8 bottom-1/12 left-1/2 transform -translate-x-1/2 text-xl lg:text-3xl text-neutral-100">
				{socialLinks.map((link, index) => (
					<motion.a
						key={index}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.label}
						initial={{
							filter: "blur(10px)",
							opacity: 0,
							y: 12,
						}}
						animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 * index }}>
						{link.icon}
					</motion.a>
				))}
			</div>
		</div>
	);
};

export default App;
