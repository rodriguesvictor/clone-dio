import { Link }  from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighLight } from "./styles";

const Feed = () => {
	return (
		<>
			<Header />
			<Container>
				<Column flex={3}>
					<Title>Feed</Title>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Column>
				<Column flex={1}>
					<TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
					<UserInfo percentual={80} name="Victor Rodrigues" image="https://avatars.githubusercontent.com/u/57380118?v=4" />
					<UserInfo percentual={27} name="Victor Rodrigues" image="https://avatars.githubusercontent.com/u/57380118?v=4" />
					<UserInfo percentual={10} name="Victor Rodrigues" image="https://avatars.githubusercontent.com/u/57380118?v=4" />
					<UserInfo percentual={50} name="Victor Rodrigues" image="https://avatars.githubusercontent.com/u/57380118?v=4" />
				</Column>
			</Container>
		</>
	);
};

export { Feed };
