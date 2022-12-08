import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
	BuscarInputContainer,
	Container,
	Input,
	Menu,
	MenuRight,
	Row,
	UserPicture,
	Wrapper
} from "./styles";
import { IHeader } from "./types";

const Header = ({autenticado}: IHeader) => {
	const navigate = useNavigate();

	const handleClickSignIn = () => {
		navigate('/cadastro');
	}
	const handleClickLogIn = () => {
		navigate('/login');
	}
	return (
		<Wrapper>
			<Container>
				<Row>
					<img src={logo} alt="Logo da Dio"></img>
					{autenticado ? (
						<>
							<BuscarInputContainer>
								<Input placeholder="Buscar..." />
							</BuscarInputContainer>
							<Menu>Live Code</Menu>
							<Menu>Global</Menu>
						</>
					) : null}
				</Row>
				<Row>
					{autenticado ? (
						<UserPicture src="https://avatars.githubusercontent.com/u/57380118?v=4" />
					) : (
						<>
							<MenuRight href="/">Home</MenuRight>
							<Button title="Entrar" onClick={handleClickLogIn}/>
							<Button title="Cadastrar" onClick={handleClickSignIn} />
						</>
					)}
				</Row>
			</Container>
		</Wrapper>
	)
}

export { Header };
