import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiPlay } from 'react-icons/fi';

import {
  HeaderBox,
  Header,
  Wrapper,
  MainIcon,
  Content,
  ButtonWrapper,
  Button,
} from './styles';
import { MainTitle, Title, SubTitle } from '../../styles/types';

const Startup: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Link to="/">
            <FiArrowLeft size={20} />
            <p>voltar</p>
          </Link>
          <HeaderBox />
        </Header>
        <Content>
          <MainIcon>
            <span role="img" aria-label="woman">
              👩🏽‍🔬
            </span>
          </MainIcon>
          <MainTitle>Startup Weekend Woman</MainTitle>
          <p>
            O startup weekend é um evento de final de semana com um intuito:
            criar uma startup em 3 dias.
          </p>
          <p>
            Já o SW Woman, é a edição do Startup Wekeend voltada para mulheres,
            isso porque, prodominantemente, eventos de tecnologia tem uma
            maioria masculina.
          </p>
          <p>
            No SWW, 75% das pessoas que participam tem que ser mulheres. Eu fiz
            parte dos 25%, meu time era composto por 6 pessoas, dessas, 5 das
            mulheres mais brabas que conheço e eu.
          </p>
          <Title>Dream Team</Title>
          <ul>
            <li>Mayra - Muito boa com visual, super comunicativa</li>
            <li>Helo - A pessoa mais simpática que vc pode conhecer</li>
            <li>Greice - Inteligência de negócio apuradíssima</li>
            <li>Francine - Expert em marketing digital</li>
            <li>TROCAR - Treinadora de futebol feminino</li>
            <li>Pietro - Designer das piadas ruins</li>
          </ul>
          <Title>O começo</Title>
          <p>
            Sem dúvidas o que mais fez a gente quebrar a cabeça foi o modelo de
            negócio. Tinhamos apenas uma certeza: queriamos fazer algo para
            mudar a situação do futebol feminino no Brasil.
          </p>
          <p>
            Nosso ponto central era a TROCAR, como ela trabalha com futebol
            feminino, conseguiu passar uma visão muito fiel do que acontece
            nesse ambiente, então tinhamos um bom ponto de partida.
          </p>
          <SubTitle>Metodologia</SubTitle>
          <p>COLOCAR METODOLOGIA DE STARTUP</p>
          <p>
            Ligamos para várias meninas que jogavam bola, e perguntamos as
            maiores dificuldades que elas tinham. E começamos a perceber a
            vontade de ingressar na carreira de jogadora profissional.
          </p>
          <Title>Solução - Meninas de Ouro</Title>
          <p>
            Nossa solução buscava conectar meninas que tinham vontade de jogar,
            com clubes, que tinham que buscar meninas para formar times (todo
            clube da série A no masculino é obrigado a ter um time e uma base
            feminina).
          </p>
          <img src="https://i.imgur.com/lUDnUvW.png" alt="beta-tasks" />
          <p>
            Nas configurações da criação de tarefa, conseguiria setar por quanto
            tempo essa tarefa duraria, e quantas vezes seria executada por dia,
            caso o user não selecionasse nada, por default seria uma tarefa
            simples.
          </p>
          <img src="https://i.imgur.com/D97DWuY.png" alt="beta-tasks" />
          <p>
            O tasks ainda está em desenvolvimento, você pode me dar um feedback
            sobre ele? Você pode sugerir novas funcionalidades e agregar
            qualquer coisa :) Críticas são sempre bem vindas
          </p>
          <ButtonWrapper>
            <Button color="blue" href="https://tasks.sandbox.design/">
              <FiPlay />
              Usar o Tasks
            </Button>
            <Button color="black" href="https://github.com/pietroschoch/tasks">
              <FiGithub />
              Ver projeto no github
            </Button>
            <Button
              color="green"
              href="https://api.whatsapp.com/send?phone=5541933002285&text=Eai%20mano,%20de%20boa?"
            >
              Mandar feedback
            </Button>
          </ButtonWrapper>
          <p>
            Esse app está em constante evolução, um hábito antigo que eu tinha
            era de não soltar para o mundo algo que eu não tivesse lapidado
            muito e já estivesse gostando, mas depois de passar pelo startup
            weekend woman (tenho um post contando como foi), acabei entendendo
            bem o conceito de mvp e o ciclo de iteração, então decidi lançar,
            mesmo que seja em uma versão muito simples. Se você usar o app, por
            favor, me de um feedback (link para o whats)
          </p>
          <Title>Desenvolvimento</Title>
          <p>Com a base do protótipo passei para o desenvolvimento.</p>
          <SubTitle>Database</SubTitle>
          <p>
            Decidi armazenar os dados no localStorage (armazenamento do
            navegador), por questão de rapidez e por não entender todo o app
            ainda. Mas assim que forem surgindo mais funcionalidades vindas do
            fluxo de iteração, pretendo usar o postgresSQL, node com typescript,
            e o typeorm para escrever as migrations no banco.
          </p>
          <SubTitle>Linguagem e Bibliotecas</SubTitle>
          <ul>
            <li>
              Utilizei reactjs com typescript para escrever esse frontend.
            </li>
            <li>Styled components para lidar com o css e estilização.</li>
            <li>date-fns para tratar com as datas.</li>
          </ul>
          <Title>Conclusão</Title>
          <p>
            Meu objetivo aqui não é mostrar algo 100% pronto, até porque
            acredito que um produto nunca está 100% e sempre vai ter mais
            necessidades para suprir, mas espero que tenha gostado até agora!
            Entre em contato comigo para batermos um papo sobre esse app e
            outras ideias :)
          </p>
          <p>Não esqueça de testar o tasks também :p</p>
          <ButtonWrapper>
            <Button color="blue" href="https://tasks.sandbox.design/">
              <FiPlay />
              Usar o Tasks
            </Button>
            <Button color="black" href="https://github.com/pietroschoch/tasks">
              <FiGithub />
              Ver projeto no github
            </Button>
            <Button
              color="green"
              href="https://api.whatsapp.com/send?phone=5541933002285&text=Eai%20mano,%20de%20boa?"
            >
              Falar comigo
            </Button>
          </ButtonWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default Startup;
