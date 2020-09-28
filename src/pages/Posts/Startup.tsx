import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { HeaderBox, Header, Wrapper, MainIcon, Content } from './styles';
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
            <li>Jô - Treinadora de futebol feminino</li>
            <li>Pietro - Designer das piadas ruins</li>
          </ul>
          <img src="https://i.imgur.com/ZuwgapR.png" alt="dream-team" />
          <Title>O começo</Title>
          <p>
            Sem dúvidas o que mais fez a gente quebrar a cabeça foi o modelo de
            negócio. Tinhamos apenas uma certeza: queriamos fazer algo para
            mudar a situação do futebol feminino no Brasil.
          </p>
          <p>
            Nosso ponto central era a Jô, como ela trabalha com futebol
            feminino, conseguiu passar uma visão muito fiel do que acontece
            nesse ambiente, então tinhamos um bom ponto de partida.
          </p>
          <Title>Metodologia</Title>
          <p>
            Utilizamos a metodologia de Lean startup, que consiste em 3 pilares:
          </p>
          <ul>
            <li>Aprender</li>
            <li>Construir</li>
            <li>Medir</li>
          </ul>
          <p>
            Esse ciclo se repete consecutivamente durante todo o Startup Weekend
          </p>
          <SubTitle>Aprendendo sobre o futebol feminino</SubTitle>
          <p>
            Ligamos para várias meninas que jogavam futebol, e perguntamos as
            maiores dificuldades que elas tinham. E começamos a perceber a
            vontade de ingressar na carreira de jogadora profissional.
          </p>
          <SubTitle>Construindo uma solução</SubTitle>
          <p>
            Nossa solução buscava conectar meninas que tinham vontade de jogar,
            com clubes, que tinham que buscar meninas para formar times (todo
            clube da série A no masculino é obrigado a ter um time e uma base
            feminina).
          </p>
          <SubTitle>Medindo a aderência</SubTitle>
          <p>
            Mandamos muitas mensagens, ligamos para várias meninas, perguntando
            qual seria o interesse delas em jogar profissionalmente.
          </p>
          <p>
            o resultado foi surpreendente: 64% das meninas já tinham pensado em
            jogar de forma profissional.
          </p>
          <p>
            Ok, tinhamos meninas interessadas, mas qual a aderência dos clubes?
          </p>
          <p>
            Acontece que ter um time de futebol feminino virou obrigação para os
            clubes, e conversando com alguns contatos tínhamos a hipótese que os
            clubes estariam interessados em uma base de atletas.
          </p>
          <p>
            Nossa plataforma funcionaria como um linkedin para atletas,
            conectando aos clubes.
          </p>
          <Title>Validando nossa solução</Title>
          <p>
            Fizemos uma landing page onde jogadoras e clubes podiam se cadastrar
            e montamos o modelo de monetização.
          </p>
          <SubTitle>Monetização</SubTitle>
          <img src="https://i.imgur.com/EIm7R3z.png" alt="landing-page" />
          <SubTitle>Landing page</SubTitle>
          <img src="https://i.imgur.com/ljlGSsC.png" alt="landing-page" />
          <img src="https://i.imgur.com/HAhC8mg.png" alt="landing-page" />
          <Title>Resultados</Title>
          <p>
            Tivemos 18 cadastros no plano gratuito e 2 cadastros no plano pago.
          </p>
          <p>
            Isso tudo rolou em um final de semana. Depois de uma montanha russa
            de emoções e decisões fomos apresentar nosso projeto para a banca do
            evento.
          </p>
          <p>
            O frio na barriga foi imenso, e depois de todas as apresentações
            saiu o resultado: Nós, as Meninas de Ouro ficamos com o primeiro
            lugar.
          </p>
          <p>
            Se eu posso dar uma dica para você, essa dica é: participe de
            hackathons, o ambiênte é propício para desenvolvimento pessoal e
            aprendizado extremo, sou muito grato a quem organizou e ao meu time.
          </p>
          <p>Muito obrigado por me acompanhar até aqui :)</p>
        </Content>
      </Wrapper>
    </>
  );
};

export default Startup;
