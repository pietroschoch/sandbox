import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDownload } from 'react-icons/fi';

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

const Brondby: React.FC = () => {
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
              🔤
            </span>
          </MainIcon>
          <MainTitle>Fonte Brondby</MainTitle>
          <p>
            Uma das minhas paixões como desginer são as tipos, como um bom
            minimalista sempre gostei de composições tipograficas por si só,
            depois de ter uma pincelada em tipografia na faculdade decidi
            construir meu próprio tipo.
          </p>
          <Title>O começo</Title>
          <p>
            Sempre gostei de tipos modernos e circulares, como a Gilroy. Ela
            serviu de grande inspiração enquanto eu contruia minha própria
            fonte. Então no começo eu sabia, queria uma fonte circular e que
            fosse de bom uso na web (lugar onde mais trabalho)
          </p>
          <p>
            Então fiz uma lista com as fontes que eu mais gostava, respeitando
            que teria que ser circular e boa para web, escolhi:
          </p>
          <ul>
            <li>Gilroy</li>
            <li>Uber Move (Fonte da Uber)</li>
            <li>Circular STD</li>
          </ul>
          <img
            src="https://befonts.com/wp-content/uploads/2016/07/gilroy-typefamily.png"
            alt="gilroy"
          />
          <img
            src="https://images.ctfassets.net/37l920h5or7f/4uQmSdzF1DYdNlwzPeulce/916b6f9184ac2f2f653ed3692d4e3832/secondary_lockup_1.png?fm=jpg&q=70&w=1600"
            alt="uber-font"
          />
          <img
            src="https://miro.medium.com/max/2800/1*fF-nJso7k2Gcpfc18kRXeA.png"
            alt="circularStd"
          />
          <Title>Construção</Title>
          <p>
            O software de vetor que tenho mais facilidade é o illustrator,
            escolhi ele para criar a brondby. Comecei pelo &quot;o&quot;
            (minúscula do O), como estou fazendo uma fonte circular, é um bom
            ponto de partida. Além disso, optei fazer todas as minúsculas
            primeiro.
          </p>
          <img src="https://i.imgur.com/b2u47at.png" alt="letter-o" />
          <p>Depois do o, fui para as letras derivadas do círculo principal</p>
          <img src="https://i.imgur.com/duUMGwe.png" alt="letter-b-p-c" />
          <img src="https://i.imgur.com/leynzRy.png" alt="letter-d-q" />
          <p>
            Depois disso parti para o &quot;i&quot; (minúscula do I), para poder
            unir e começar mais variações de fontes, como o &quot;n&quot; e o
            &quot;m&quot;.
          </p>
          <img src="https://i.imgur.com/bKoMu71.png" alt="letter-n-i-m" />
          <SubTitle>Como eu fazia</SubTitle>
          <p>
            Eu sei a pentool junto com os shapes com stroke (desse jeito rolaria
            fazer as variações, como bold, de maneira muito mais simples).
          </p>
          <Title>Tipos complicados</Title>
          <p>
            Eu já tinha feito uma fonte na faculdade, mas não tinha me dedicado
            tanto quanto na brondby. Durante esse caminho, algumas tipos foram
            bem difíceis de serem feitos, tanto pela dificuldade para encaixar o
            estilo da fonte, quanto no próprio traçado.
          </p>
          <p>
            Os que separei para mostrar são o &quot;s&quot;, &quot;a&quot; e
            &quot;g&quot;:
          </p>
          <img src="https://i.imgur.com/xe9kUz7.png" alt="letter-s-a-g" />
          <p>
            O &quot;s&quot; tem uma peculiaridade muito grande, e qualquer
            minima mudança impacta a fonte toda, da mesma forma o &quot;a&quot;,
            que é um das letras mais usadas no nosso dia a dia. O &quot;g&quot;
            tem uma peculiaridade, ele carrega muita personalidade, então acaba
            determinando muito sobre a estética do tipo.
          </p>
          <Title>Variação de peso</Title>
          <p>
            Antes de partir para as maiúsculas, decidi brincar com as variações
            de peso, e inspirado pela Uber Move, escolhi fazer 4 pesos:
          </p>
          <ul>
            <li>Light</li>
            <li>Regular</li>
            <li>Medium</li>
            <li>Bold</li>
          </ul>
          <p>
            Dessas, só a Regular e a Medium estão disponíveis, longe de sua
            versão final
          </p>
          <SubTitle>Demo</SubTitle>
          <p>Essas são todas as minúsculas da Regular e da Medium</p>
          <img src="https://i.imgur.com/5RLEUa8.png" alt="minus" />
          <Title>Maísculas</Title>
          <p>
            Nas maiúsculas, utilizei muitas vezes a versão minúscula aumentada
            como ponto de partida, depois só adequava caso fosse necessária
          </p>
          <SubTitle>Dica</SubTitle>
          <p>
            As fontes maiúsculas são ligeiramente mais fáceis de serem feitas,
            quando eu for fazer uma nova fonte, provavelmente vou começar por
            elas.
          </p>
          <SubTitle>Demo</SubTitle>
          <p>Essas são todas as maiúsculas da Regular e da Medium</p>
          <img src="https://i.imgur.com/5RLEUa8.png" alt="plus" />
          <Title>Me ajude!</Title>
          <p>
            Essa fonte ainda está em desenvolvimento, então eu preciso muito de
            feedbacks para poder melhora-la e quem sabe um dia disponibilizar
            ela no google fonts :)
          </p>
          <ButtonWrapper>
            <Button
              color="blue"
              href="https://drive.google.com/uc?export=download&id=1TaQcVJzge5Byjp0qzH-V6dVoD48mauL2"
            >
              <FiDownload />
              Baixar fonte
            </Button>
            <Button
              color="green"
              href="https://api.whatsapp.com/send?phone=5541933002285&text=Eai%20mano,%20de%20boa?"
            >
              Mandar feedback
            </Button>
          </ButtonWrapper>
          <Title>O pulo do gato</Title>
          <p>
            Já tinha feito grande parte da fonte no illustrator e me deparei com
            um problema: Como eu vou instalar esse negócio? Busquei e o processo
            era um tanto quanto demorado, usando um programa chamado fontForge,
            com mais algumas configurações (era realmente complexo).
          </p>
          <p>
            Fuçando um pouquinho mais na web, achei um programa chamado
            FontSelf, era um programa pago, mas parecia muito bom pra ser
            verdade: É um plugin de Illustrator que transforma seu tipo feito lá
            dentro, em uma fonte real, juntei umas moedinhas e comprei o
            programa (vc só paga uma vez), agora consigo exportar a fonte com
            uma facildade gigantte, além do programa ajudar com kerning e
            espaçamentos da fonte, é magico.
          </p>
          <ButtonWrapper>
            <Button color="blue" href="https://www.fontself.com/">
              FontSelf
            </Button>
          </ButtonWrapper>
          <Title>Brondby</Title>
          <p>O que é Brondby?</p>
          <p>
            Bom, Brondby é uma cidade da dinamarca que tem uma arquitetura
            circular, me pareceu o nome perfeito para descrever minha fonte
            circular.
          </p>
          <img
            src="https://lh3.googleusercontent.com/proxy/VEJlXBZbud4i2ma8mmnAQnLNL7MgRVWLOeBaiTW04bsvpGVX0va_OFHbNDY0aUl8HNGbb9qKqttP8msC6xPTkZUNUijw21VgmOmM_4hz1apjnLvfsk6l7S7bzvmxaFnyw295YVkL1VEXKNrXnMpiF5PD8r1uEfvR6928Ci2VPHUhXEvAQ_i50-yWhQjTUB3BpwsFpOZpAAtB5INCNYQ3eKGtTQ32bJ76llAovD-cl2G-8wU"
            alt="brondby-city"
          />
          <Title>Conclusão e Download</Title>
          <p>
            Muito obrigado por ler até aqui! Vou deixar o link para download
            abaixo, aproveite :)
          </p>
          <p>Não esqueça de me passar seu feedback sobre a fonte</p>
          <ButtonWrapper>
            <Button
              color="blue"
              href="https://drive.google.com/uc?export=download&id=1TaQcVJzge5Byjp0qzH-V6dVoD48mauL2"
            >
              <FiDownload />
              Baixar fonte
            </Button>
            <Button
              color="green"
              href="https://api.whatsapp.com/send?phone=5541933002285&text=Eai%20mano,%20de%20boa?"
            >
              Mandar feedback
            </Button>
          </ButtonWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default Brondby;
