import React from "react";

import { FiThumbsUp } from "react-icons/fi";

import {
	CardContainer,
	Content,
	HasInfo,
	ImageBackground,
	PostInfo,
	UserInfo,
	UserPicture
} from "./styles";

const Card = () => {
	return (
		<CardContainer>
			<ImageBackground  src="https://eit.europa.eu/sites/default/files/shutterstock_739595833.jpg"/>
			<Content>
				<UserInfo>
					<UserPicture src="https://avatars.githubusercontent.com/u/57380118?v=4"/>
					<div>
						<h4>Victor Rodrigues</h4>
						<p>Há 9 minutos</p>
					</div>
				</UserInfo>
				<PostInfo>
					<h4>Projeto para curso de HTML e CSS</h4>
					<p>Projeto feito do curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
				</PostInfo>
				<HasInfo>
					<h4>#HTML #CSS #JavaScript</h4>
					<p>
						<FiThumbsUp /> 10
					</p>
				</HasInfo>
			</Content>
		</CardContainer>
	)
}

export { Card }
