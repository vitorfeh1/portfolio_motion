import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article
			className="flex flex-col rounded-l items-center space-y-2 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
		>
			<motion.img
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center"
				src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1273%2F1273737.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fbarcelona_1273737&tbnid=Lax-93AbcblT-M&vet=12ahUKEwi8juPS8qT7AhVTDdQKHWISD9cQMygFegUIARC8AQ..i&docid=OgHbI_IwzbzfrM&w=512&h=512&q=barcelona%20logo%20rounded&ved=2ahUKEwi8juPS8qT7AhVTDdQKHWISD9cQMygFegUIARC8AQ"
			></motion.img>

			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">CEO of Vitor's</h4>
				<p className="font-bld text-2xl mt-1">Vitor's</p>
				<div className="flex space-x-2 my-2">
					<img
						className="h-10 w-10 rounded-full"
						src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1273%2F1273737.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fbarcelona_1273737&tbnid=Lax-93AbcblT-M&vet=12ahUKEwi8juPS8qT7AhVTDdQKHWISD9cQMygFegUIARC8AQ..i&docid=OgHbI_IwzbzfrM&w=512&h=512&q=barcelona%20logo%20rounded&ved=2ahUKEwi8juPS8qT7AhVTDdQKHWISD9cQMygFegUIARC8AQ"
						alt=""
					></img>
				</div>
				<p>Started Work... -Ended ...</p>

				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>Summary Points Summary Points Summary Points Summary Points</li>
					<li>Summary Points Summary Points Summary Points Summary Points</li>
					<li>Summary Points Summary Points Summary Points Summary Points</li>
					<li>Summary Points Summary Points Summary Points Summary Points</li>
				</ul>
			</div>
		</article>
	);
}
