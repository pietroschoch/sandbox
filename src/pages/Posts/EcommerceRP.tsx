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

const EcommerceRP: React.FC = () => {
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
            <span role="img" aria-label="cart">
              🛒
            </span>
          </MainIcon>
          <MainTitle>Ecommerce RP</MainTitle>
          <p>
            Esse app surgiu enquanto eu estava testando aplicativos de tarefa e
            estudando reactjs. Comecei a usar um aplicativo que trackeava
            hábitos, e me adaptei muito bem, até ter um obstáculo: na primeira
            semana, o app limitava a criação de mais hábitos e de outras
            funcionalidades, como estava precisando de projetos para estudar
            react, escolhi fazer minha versão desse app e desenvolver um
            produto.
          </p>
          <Title>MVP - Estrutura</Title>
          <p>
            Como eu já tinha a base de outro app como referência, eu decidi
            desenvolver um mvp trazendo só as funcionalidades mais importantes
            para o app sair do papel, assim eu já conseguia entender em que
            pontos eu poderia melhorar sem levar muito tempo de desenvolvimento.
          </p>
          <p>As funcionalidades core para meu uso no app eram:</p>
          <ul>
            <li>Poder criar tarefas</li>
            <li>Poder excluir tarefas</li>
            <li>
              Poder criar hábitos (tarefas que se repetem por vários dias)
            </li>
          </ul>
          <Title>MVP - Prototipação</Title>
          <p>
            O processo de prototipação foi interessante porque ao mesmo tempo em
            que desenhava, eu pensava no que aquilo significava para o
            desenvolvimento, e o trabalho que levaria, essa troca esse código e
            design acaba sendo muito produtiva.
          </p>
          <SubTitle>Primeira versão do protótipo.</SubTitle>
          <p>
            Na minha primeira versão do app, busquei satisfazer os 3 pontos core
            que pontuei acima, porém durante o desenho percebi que uma delas
            poderia ser feita manualmente em um primeiro momento, a criação de
            hábitos. Tirando ela consegui deixar o mvp ainda mais enxuto, pra já
            desenvolver e começar a usar.
          </p>
          <p>
            Essa é a primeira versão, com a criação de hábitos incluída.
            Conseguir adicionar a tarefa na primeira linha, e depois marcar como
            feita, ou como uma parte dela feita.
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
            muito e já estivesse gostando, mas depois de passar pelo EcommerceRP
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

export default EcommerceRP;
