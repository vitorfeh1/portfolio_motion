import React from "react";

type Props = {};

function Projects({}: Props) {
	const projects = [1, 2, 3, 4, 5];
	return (
		<div className="h-screen relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"></h3>
			{/*
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
				{project.map((project, i) => {
					<div
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20
                    md:p-44 h-screen"
					>
						<img
							src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1273%2F1273737.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fbarcelona_1273737&tbnid=Lax-93AbcblT-M&vet=12ahUKEwi8juPS8qT7AhVTDdQKHWISD9cQMygFegUIARC8AQ..i&docid=OgHbI_IwzbzfrM&w=512&h=512&q=barcelona%20logo%20rounded&ved=2ahUKEwi8juPS8qT7AhVTDdQKHWISD9cQMygFegUIARC8AQ"
							alt=""
						></img>

						<div>
							<h4>Case Study 1 of 3: UPS clone</h4>
						</div>
					</div>;
				})}
			</div>

			<div
				className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0-h-[500px]
            -skew-y-12"
			></div>
            */}
		</div>
	);
}

export default Projects;
