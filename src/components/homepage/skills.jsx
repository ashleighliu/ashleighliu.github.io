import React from "react";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/skills.css";

const Skills = () => {
    return (
		<div className="works">
			<Card
				icon={faCog}
				title="Skills"
				body={
					<div className="skills-body">
                        <div className="works-col">
                            <div className="skill">
                                <img
                                    src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
                                    alt="Python"
                                    className="work-image"
                                />
                                <div className="work-title">Python</div>

                            </div>

                            <div className="skill">
                                <img
                                    src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
                                    alt="Java"
                                    className="work-image"
                                />
                                <div className="work-title">Java</div>
                            </div>

                            <div className="skill">
                                <img
                                    src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
                                    alt="javascript"
                                    className="work-image"
                                />
                                <div className="work-title">Javascript</div>
                            
                            </div>

                            <div className="skill">
                                <img
                                    src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png"
                                    alt="C"
                                    className="work-image"
                                />
                                <div className="work-title">C</div>
                            
                            </div>
                        </div>
                        <div className="works-col">
                            <div className="skill">
                                <img
                                    src="../react.png"
                                    alt="React"
                                    className="work-image"
                                />
                                <div className="work-title">React</div>

                            </div>
                        </div>
					</div>
				}
			/>
		</div>

	);
  };


export default Skills;


