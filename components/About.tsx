import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
	return (
		<div
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenlymx-auto items-center"
		>
			<h3
				className="absolute top-24 uppercase tracking-[20px] text-gray-500
            text-2xl"
			></h3>

			<motion.img
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:x-64 md:h-95 xl:w-[500px] xl:h-[600px]"
				initial={{
					x: -200,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					x: 0,
				}}
				viewport={{ once: true }}
				src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F176962486%2Fpopeye-the-sailor-man-iron-on-transfer&psig=AOvVaw20nxEiy-OC0XgpT0X7uRsR&ust=1668207984135000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjC5JTdpPsCFQAAAAAdAAAAABAJ"
			></motion.img>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Following with a{" "}
					<span className="underline decoration-[#F7AB0A]/50"></span> quick
					Background
				</h4>
				<p className="text-base">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum."
				</p>
			</div>
		</div>
	);
}

export default About;
