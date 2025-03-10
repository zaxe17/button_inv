import Starbg from "./Starbg";
import { motion } from "framer-motion"
import { button } from "./var";
import { FaSquareInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";


const App = () => {
	return (
		<div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
			<div className="absolute top-0 left-0 w-full h-full z-0">
				<Starbg />
			</div>

			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 lg:w-7/12">
				<h1 className="text-neutral-100 text-center text-sm/10 lg:text-3xl/15 tracking-[5px] lg:tracking-[15px] uppercase text-shadow-white">
					Join my Discord server or invite my bot to your server!
				</h1>

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
				<a href="https://www.instagram.com/zaxe.jm/">
					<FaSquareInstagram />
				</a>
				<a href="https://www.linkedin.com/in/jan-marc-jacolbia-b86a00296/">
					<FaLinkedin />
				</a>
				<a href="https://github.com/zaxe17">
					<FaGithub />
				</a>
				<a href="https://www.facebook.com/janmarc.soberanojacolbia.9">
					<FaFacebook />
				</a>
			</div>
		</div>
	);
};

export default App;
