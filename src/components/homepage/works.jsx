import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src="./hubspot.png"
								alt="HubSpot"
								className="work-image"
							/>
							<div className="work-title">HubSpot</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">January 2024 - May 2024</div>
						</div>

						<div className="work">
							<img
								src="./scotia.png"
								alt="scotiabank"
								className="work-image"
							/>
							<div className="work-title">Scotiabank</div>
							<div className="work-subtitle">
								Data Scientist Intern
							</div>
							<div className="work-duration">January 2023 - April 2023</div>
						</div>



						<div className="work">
							<img
								src="./cheapreats.jpeg"
								alt="CheaprEats"
								className="work-image"
							/>
							<div className="work-title">CheaprEats</div>
							<div className="work-subtitle">
								UI/UX Design Intern
							</div>
							<div className="work-duration">January 2023 - May 2023</div>
						</div>

						<div className="work">
							<img
								src="./gre.png"
								alt="gunraider"
								className="work-image"
							/>
							<div className="work-title">Gun Raiders Entertainment</div>
							<div className="work-subtitle">
								Web Developer Intern
							</div>
							<div className="work-duration">October 2022 - December 2022</div>
						</div>

					</div>
				}
			/>
		</div>

	);
};


export default Works;


