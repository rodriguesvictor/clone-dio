import { Link }  from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import { Container, TextContent, Title, TitleHighLight } from "./styles";

const Feed = () => {
	return (
		<>
			<Header />
			<Container>
				<Card />
			</Container>
		</>
	);
};

export { Feed };
