import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { HeaderBox, Header, Wrapper, MainIcon, Content } from './styles';
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
            Um amigo que trabalha comigo (na área de ecommerce) me indicou para
            uma empresa que fabrica softwares para supermercado, eles queriam
            criar um novo produto para seus clientes (os mercados): Um delivery.
          </p>
          <p>
            Você já pode imaginar o tamanho do trabalho, e sim, ainda não
            terminou, mas decidi colocar aqui pela importância que tem na minha
            carreira.
          </p>
          <Title>Metodologia</Title>
          <p>
            Eu sabia que para criar o protótipo desse app eu precisava seguir
            uma métodologia, então, antes de inicar o projeto, apresentei a
            seguinte estrutura para a RP: (empresa que me contratou)
          </p>
          <ul>
            <li>Entender o público</li>
            <li>Idealizar</li>
            <li>Prototipar</li>
            <li>Testar</li>
            <li>Medir</li>
          </ul>
          <p>
            Acordamos então que faríamos reuniões semanais pra discutir o
            andamento do projeto.
          </p>
          <Title>Entendendo o público</Title>
          <p>
            A RP tem uma lista de clientes (mercados), e esse produto (o
            ecommerce que eu prototiparia) será vendido para eles, então eu
            precisava entender quem eram os compradores desses mercados.
          </p>
          <p>
            Com essa lista, procurei no google para entender cada mercado, e
            como se comportava em cada localidade, e em sua imensa maioria, eram
            mercados de bairro.
          </p>
          <SubTitle>Pesquisas</SubTitle>
          <p>
            Existem poucas pesquisas de público sobre mercados, e são muito
            difíceis de achar, eu separei duas que encontrei pra mostrar aqui:
          </p>
          <ul>
            <li>Área de atuação do mercado FGV</li>
            <li>Pesquisa Tendência do Consumidor APAS/IBOPE</li>
          </ul>
          <SubTitle>Área de atuação do mercado (FGV)</SubTitle>
          <p>
            Na primeira, conseguimos entender um pouco sobre a área de atuação
            de um mercado, e como mercados maiores ou menores impactam de forma
            distinta sua região.
          </p>
          <img src="https://i.imgur.com/6claIze.png" alt="mercados-pequenos" />
          <p>
            Aqui, em um mercado relativamente pequeno ( 550 m² ), podemos ver
            que a grande massa de consumidores (pontinhos pretos está muito
            perto do centro, e que temos alguns mercados na região (pontos em
            amarelo), que disputam a atenção dos consumidores da área.
          </p>
          <img src="https://i.imgur.com/V7gWpXO.png" alt="mercados-grandes" />
          <p>
            Já nessa segunda imagem, temos um mercado maior ( 2.470 m² ), nesse
            panorama não temos uma massa tão bem definida quanto no primeiro
            mercado. Além disso, temos muito menos mercados na região (que é
            ainda maior).
          </p>
          <p>
            Com isso em mente, na reunião discutimos algumas ideias, como a de
            poder retirar produtos na loja, depois de fazer a compra pelo app, e
            o de frete grátis para regiões próximas (levando em conta que os
            mercados são pequenos, a grande massa de clientes mora perto).
          </p>
          <SubTitle>Tendências do consumidor</SubTitle>
          <p>Na segunda pesquisa, destaquei alguns slides para mostrar aqui</p>
          <p>Mercado de bairro é requisitado para compras de emergência</p>
          <img src="https://i.imgur.com/jWWhsTI.png" alt="emergencia" />
          <p>
            Com isso em pauta, pensamos em reforçar ainda mais a questão de
            retirada na loja e uma entrega super rápida, com do James ou do
            iFood.
          </p>
          <p>
            Outra ideia interessante foi a de sugerir produtos baseado na hora e
            na temperatura, tentando prever o comportamento do consumidor (com o
            tempo isso seria alimentado por análise de dados reais).
          </p>
          <p>
            Outra pauta interessante e peculiar dos mercados é a folheteria
            (encartes), nessa pesquisa conseguimos ver que ainda é amplamente
            usada.
          </p>
          <img src="https://i.imgur.com/V7AcpeV.png" alt="folheteria" />
          <p>
            Então, na versão inicial do app vamos contruir um espaço para os
            clientes acessarem a mesma folheteria que teriam fisicamente,
            disperdiçando menos papal e tendo sempre a mais atualizada.
          </p>
          <p>
            Com isso, também pretendemos atrair mais clientes que não usariam a
            funcionalidade do ecommerce normalmente, mas que poderiam começar a
            usar depois de ter certa prática com os encartes.
          </p>
          <SubTitle>Esse projeto ainda está em andamento...</SubTitle>
          <p>
            Conforme formos avançando vou atualizando esse post. Muito obrigado
            por ler até aqui.
          </p>
        </Content>
      </Wrapper>
    </>
  );
};

export default EcommerceRP;
