import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
	return (
		<div
			className="bg-[rgb(36, 36, 36)] text-white h-screen snap-y snap-mandatory
		overflow-scroll z-0
		"
		>
			<Head>
				<title>Vitor's Portfolio</title>
			</Head>

			<Header></Header>

			<section id="hero" className="snap-center">
				<Hero></Hero>
			</section>

			<section id="about" className="snap-center">
				<About></About>
			</section>

			<section id="experience" className="snap-center">
				<WorkExperience></WorkExperience>
			</section>

			<section id="skills" className="snap-start">
				<Skills></Skills>
			</section>

			<section id="projects" className="snap-start">
				<Projects></Projects>
			</section>
		</div>
	);
}
