import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
	Column,
	Container,
	SignInText,
	Row,
	SubTitleSignIn,
	Title,
	TitleSignIn,
	SignInDesc,
	Wrapper,
} from "./styles";
import { IFormSignIn } from "./types";

const schema = yup
	.object({
		nome: yup.string().min(13, 'No minimo 13 caracteres').required('Campo obrigatório'),
		email: yup.string().email('Email inválido').required('Campo obrigatório'),
		password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
	})
	.required();

const Cadastro = () => {

	const {
		control,
		formState: { errors },
	} = useForm<IFormSignIn>({
		resolver: yupResolver(schema),
		mode: "onChange",
		reValidateMode: "onChange",
	});



	return (
		<>
			<Header />
			<Container>
				<Column>
					<Title>
					A plataforma para você aprender com experts,
					dominar as principais
					tecnologias e entrar
					mais rápido nas
					empresas mais
					desejadas.
					</Title>
				</Column>
				<Column>
					<Wrapper>
						<TitleSignIn>Comece agora grátis</TitleSignIn>
						<SubTitleSignIn>
						Crie sua conta e make the change._
						</SubTitleSignIn>
						<form>
						<Input
								name="nome"
								errorMessage={errors?.nome?.message}
								control={control}
								placeholder="Nome Completo"
								leftIcon={<MdAccountCircle />}
							/>
							<Input
								name="email"
								errorMessage={errors?.email?.message}
								control={control}
								placeholder="E-mail"
								leftIcon={<MdEmail />}
							/>
							<Input
								name="password"
								errorMessage={errors?.password?.message}
								control={control}
								placeholder="Senha"
								type="password"
								leftIcon={<MdLock />}
							/>
							<Button
								title="Criar minha conta"
								variant="secondary"
								type="submit"
							/>
						</form>
						<Row>
							<SignInDesc>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SignInDesc>
						</Row>
						<SignInText>
						<span>Já tenho conta. </span>
						<span className="sec">Fazer login </span>
						</SignInText>

					</Wrapper>
				</Column>
			</Container>
		</>
	);
};

export { Cadastro };
