import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.png";
import Img3 from "./images/img3.png";
import Img4 from "./images/img4.png";
import Img5 from "./images/img5.png";

const primaryColor = "#25D366"; 
const secondaryColor = "#ffffff"; 

const PageContainer = styled.div`
  background-color: ${secondaryColor};
  color: ${primaryColor};
  font-family: Arial, sans-serif;
  padding: 20px;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px 0;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  font-size: 2rem;
  font-weight: bold;
  border-radius: 5px;
`;

const Section = styled.section`
  margin: 20px 0;
`;

const SubHeader = styled.h2`
  color: ${primaryColor};
  font-size: 1.5rem;
  margin-bottom: 10px;
  border-bottom: 2px solid ${primaryColor};
  padding-bottom: 5px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  margin: 20px 0;

  img {
    width: calc(50% - 10px); 
    max-width: 400px; 
    height: auto; 
    margin: 5px; 
    border-radius: 10px;
    border: 2px solid ${primaryColor};
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100%; 
    }
  }
`;

const CodeBlock = styled.pre`
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  border-left: 5px solid ${primaryColor};
  overflow-x: auto;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 10px 0;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  border-radius: 5px;
  margin-top: 20px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%; 
  max-height: 90%; 
  object-fit: contain; 
`;

const WhatsAppBotPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <PageContainer>
      <Header>WhatsApp Bot para Clínica Odontológica</Header>
      
      <Section>
        <SubHeader>Introdução</SubHeader>
        <Paragraph>
            Este projeto foi desenvolvido como um trabalho freelance para uma clínica odontológica, com o objetivo de automatizar e otimizar o atendimento ao cliente via WhatsApp. O bot foi criado para auxiliar os pacientes na obtenção de informações sobre procedimentos estéticos, agendamento de consultas, formas de pagamento e outras orientações de maneira rápida e eficiente.
        </Paragraph>
        <Paragraph>
            Além de fornecer informações detalhadas sobre os serviços da clínica, o bot também facilita o processo de triagem inicial, encaminhando automaticamente as demandas dos clientes para um atendente humano, já com as informações relevantes, economizando tempo e melhorando a experiência do usuário.
        </Paragraph>
        <Paragraph>
            O desenvolvimento foi realizado em Node.js, utilizando a biblioteca WPPConnect para integrar o bot ao WhatsApp, com armazenamento de dados estruturados em JSON e gerenciamento de estado via NodeCache. O projeto foi otimizado para desempenho, incluindo a minificação do código e a redução no tamanho de mídias, e foi implementado em um servidor remoto EC2 da AWS para garantir disponibilidade constante.
        </Paragraph>
      </Section>
      
      <Section>
        <SubHeader>Funcionalidades Principais</SubHeader>
        <Paragraph>
          O WhatsApp Bot desenvolvido para a clínica odontológica possui diversas funcionalidades que melhoram a experiência do paciente e otimizam o atendimento. As principais funcionalidades incluem:
        </Paragraph>
        <Paragraph>
          1. **Agendamento de Consultas**: Embora o bot não agende consultas diretamente, ele coleta informações sobre o interesse do paciente, permitindo que a atendente saiba previamente o que o cliente deseja. Após a escolha do tipo de procedimento (facial ou dental), o bot apresenta uma lista de opções, tornando o processo mais eficiente.
        </Paragraph>
        <Paragraph>
          2. **Informações sobre Procedimentos**: O bot oferece informações detalhadas sobre os procedimentos estéticos disponíveis na clínica, incluindo descrições, imagens e vídeos explicativos. Isso ajuda os pacientes a tomar decisões informadas antes de se consultarem.
        </Paragraph>
        <Paragraph>
          3. **Orientações sobre Pagamentos**: Através do bot, os pacientes podem obter informações sobre as diferentes formas de pagamento aceitas pela clínica, facilitando o planejamento financeiro antes da consulta.
        </Paragraph>
        <Paragraph>
          4. **Consulta sobre Agendamentos**: Para pacientes que já têm consultas agendadas, o bot oferece a possibilidade de consultar dados sobre suas marcações, encaminhando diretamente para um atendente, garantindo que a atendente tenha informações prévias sobre a consulta.
        </Paragraph>
        <Paragraph>
          5. **Apoio em Caso de Dor**: Quando um paciente informa que está com dor, o bot automaticamente o encaminha para um atendente, permitindo que o atendimento humano seja mais rápido e focado nas necessidades do cliente.
        </Paragraph>
        <Paragraph>
          Essas funcionalidades visam não apenas a automação do atendimento, mas também a melhoria da eficiência no processo de triagem, permitindo que a equipe da clínica dedique mais tempo ao atendimento personalizado.
        </Paragraph>
      </Section>

      <Section>
        <SubHeader>Demonstração Visual</SubHeader>
        <ImageContainer>
          <img src={Img1} alt="Demonstração 1 do Bot" onClick={() => handleImageClick(Img1)} />
          <img src={Img2} alt="Demonstração 2 do Bot" onClick={() => handleImageClick(Img2)} />
          <img src={Img3} alt="Demonstração 3 do Bot" onClick={() => handleImageClick(Img3)} />
          <img src={Img4} alt="Demonstração 4 do Bot" onClick={() => handleImageClick(Img4)} />
          <img src={Img5} alt="Demonstração 5 do Bot" onClick={() => handleImageClick(Img5)} />
        </ImageContainer>
      </Section>
      
      <Section>
  <SubHeader>Documentação Técnica</SubHeader>
  
  <Paragraph>Essa seção descreve as dependências principais usadas no bot:</Paragraph>
  <CodeBlock>
    {`// Dependências principais
const fs = require('fs'); // Módulo para manipulação de arquivos
const wppconnect = require('@wppconnect-team/wppconnect'); // Biblioteca para conectar o bot ao WhatsApp
const NodeCache = require('node-cache'); // Módulo para gerenciar cache de dados
const info = require('./info.json'); // Informações de procedimentos e serviços

const clientCache = new NodeCache({ stdTTL: 86400 }); // Cache com tempo de expiração de 24 horas`}
  </CodeBlock>
  <Paragraph>
    Nesta parte do código, são importadas as dependências essenciais para o funcionamento do bot. O módulo <code>fs</code> é utilizado para manipulação de arquivos no sistema. O <code>wppconnect</code> é a biblioteca principal para conectar o bot ao WhatsApp. O <code>NodeCache</code> gerencia o cache para armazenar temporariamente dados das sessões dos clientes, como o estado atual da conversa. O arquivo <code>info.json</code> contém as informações que serão fornecidas aos usuários, como descrições de procedimentos e opções de serviços.
  </Paragraph>

  <Paragraph>Agora, veja como a conexão com o WhatsApp é estabelecida:</Paragraph>
  <CodeBlock>
    {`// Criação da sessão do WhatsApp
wppconnect
  .create({
    session: 'sessionName', // Nome da sessão do bot
    catchQR: (base64Qr, asciiQR) => { // Função para capturar o QR code
      console.log(asciiQR); // Exibe o QR code em formato ASCII no console
      var matches = base64Qr.match(/^data:([A-Za-z-+\\/]+);base64,(.+)$/),
        response = {};

      if (matches.length !== 3) {
        return new Error('Invalid input string'); // Validação do formato do QR code
      }
      response.type = matches[1]; // Tipo de dado
      response.data = Buffer.from(matches[2], 'base64'); // Converte o dado base64 para buffer

      var imageBuffer = response;
      require('fs').writeFile(
        'out.png', // Nome do arquivo onde o QR code será salvo
        imageBuffer['data'], // Dados da imagem
        'binary', // Tipo de codificação
        function (err) {
          if (err) {
            console.log(err); // Registra erro ao salvar a imagem
          }
        }
      );
    },
    logQR: false, // Desativa o log automático do QR code
  })
  .then((client) => start(client)) // Chama a função start se a sessão for criada com sucesso
  .catch((error) => console.log(error)); // Registra qualquer erro na criação da sessão`}
  </CodeBlock>
  <Paragraph>
    Aqui, o bot inicia uma sessão com o WhatsApp utilizando <code>wppconnect.create</code>. A função <code>catchQR</code> captura o QR code, que é exibido no console em formato ASCII, e o salva como uma imagem no sistema. O <code>logQR</code> está desativado, o que significa que o QR code não será exibido automaticamente nos logs padrão do <code>wppconnect</code>. Se a sessão for criada com sucesso, a função <code>start</code> é chamada para iniciar o bot. Qualquer erro encontrado durante a criação da sessão é registrado no console.
  </Paragraph>

  <Paragraph>Agora, veja um trecho do fluxo do bot, que lida com as mensagens recebidas:</Paragraph>
  <CodeBlock>
    {`function start(client) {
    client.onMessage((message) => {
      const clientState = clientCache.get(message.from) || {};

      if (clientState.stage === 'finished') {
        return;
      }

      if (!clientState.stage) {
        const now = Date.now();
        const lastMessageTime = clientState.lastMessageTime || 0;
        const messageDelay = now - lastMessageTime;
        
        if (messageDelay < 30000) {
          console.log('Mensagem ignorada devido ao curto intervalo de tempo.');
          return;
        }
      
        clientState.lastMessageTime = now;
        clientCache.set(message.from, clientState);
      }
      
      if (clientState.isBlocked) {
        console.log('Mensagem ignorada porque o fluxo está em andamento.');
        return;
      }
  
      if (!clientState.stage) {
        client
          .sendText(message.from, \`Olá, como posso ajudar? \${info.initialMessage}\`)
          .then((result) => {
            console.log('Result: ', result);
            clientCache.set(message.from, { stage: 'main_menu' });
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro);
          });
      } else if (clientState.stage === 'main_menu') {
        if (message.body === '1') {
          client
            .sendText(message.from, info.facialTooth)
            .then((result) => {
              console.log('Result: ', result);
              clientCache.set(message.from, { stage: 'scheduling' }); // Atualiza o estado para agendamento
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro);
            });
        } else if (message.body === '2') {
          client
            .sendText(message.from, info.facialTooth)
            .then((result) => {
              console.log('Result: ', result);
              clientCache.set(message.from, { stage: 'procedures' }); // Atualiza o estado para procedimentos
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro);
            });
        } else if (message.body === '3') {
          client
            .sendText(message.from, 'Formas de pagamento:\\n\\nÀ vista: Dinheiro, pix, cartão de débito e cartão de crédito\\n\\nParcelado: Cartão de crédito\\n\\nObs: Não trabalhamos com cheques e nem boletos.')
            .then((result) => {
              console.log('Mensagem enviada: ', result);
  
              return client.sendText(message.from, \`Você foi redirecionado ao menu principal, escolha a opção desejada: \${info.initialMessage}\`);
            })
            .then((result) => {
              console.log('Result: ', result);
              clientCache.set(message.from, { stage: 'main_menu' }); // Retorna ao menu principal
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro);
            });
        } else if (message.body === '4') {
          client
            .sendText(message.from, 'Seu atendimento será encaminhado para um de nossos atendentes, por favor aguarde.')
            .then((result) => {
              clientCache.set(message.from, { stage: 'finished' }); // Define o estado como finalizado
              console.log('Result: ', result);
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro);
            });
        } else if (message.body === '5') {
          client
            .sendText(message.from, 'Seu atendimento será encaminhado para um de nossos atendentes, por favor aguarde.')
            .then((result) => {
              clientCache.set(message.from, { stage: 'finished' }); // Define o estado como finalizado
              console.log('Result: ', result);
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro);
            });
        } else {
          client
            .sendText(message.from, 'Opção inválida. Por favor, escolha uma das opções disponíveis:\\n1. Agendar consulta.\\n2. Informações sobre os procedimentos.\\n3. Formas de pagamento.\\n4. Orientações sobre data e horário da minha consulta agendada.\\n5. Estou com DOR.')
            .then((result) => {
              console.log('Result: ', result);
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro);
            });
        }
      }
    });
}`}
  </CodeBlock>
  <Paragraph>
    Neste trecho do código, a função <code>start</code> é responsável por gerenciar as mensagens recebidas pelo bot. A primeira parte verifica se o fluxo já foi concluído ou se o cliente foi bloqueado. Em seguida, registra o horário da última mensagem e verifica o intervalo entre as mensagens para evitar respostas em intervalos curtos.

    Se o cliente não tiver um estado definido, o bot envia uma mensagem de saudação e as opções principais disponíveis, definindo o estado como <code>main_menu</code>. Dependendo da escolha do usuário (1 a 5), o bot responde com informações específicas, como agendamento, procedimentos, formas de pagamento ou encaminhamento para um atendente, e atualiza o estado do cliente conforme a opção escolhida. Se a opção for inválida, o bot solicita que o usuário escolha uma opção válida.
  </Paragraph>

  <Paragraph>Aqui está um exemplo de como o código lida com o envio de informações, imagens e vídeos para o cliente, bloqueando temporariamente a interação durante o processo e garantindo que o estado do cliente seja restaurado após o envio ou em caso de erro:</Paragraph>
  <CodeBlock>
    {`else if (message.body === '6') {
          clientCache.set(message.from, { isBlocked: true }); // Bloqueia a interação do usuário durante o envio das imagens e vídeo
          
          client.sendText(message.from, 'Enviando informações detalhadas sobre o procedimento...')
            .then(() => {
              return client.sendImage(
                message.from,
                './conteudos/microagulhamento1.png',
                'microagulhamento1.png',
                'Descrição da imagem 1'
              );
            })
            .then(() => {
              return client.sendImage(
                message.from,
                './conteudos/microagulhamento2.png',
                'microagulhamento2.png',
                'Descrição da imagem 2'
              );
            })
            .then(() => {
              return client.sendVideoAsGif(
                message.from,
                './conteudos/microagulhamento_video.mp4',
                'microagulhamento_video.mp4',
                'Descrição do vídeo'
              );
            })
            .then(() => {
              clientCache.set(message.from, { stage: 'main_menu', isBlocked: false });
              return client.sendText(
                message.from,
                \`Você foi redirecionado ao menu principal, escolha a opção desejada: \${info.initialMessage}\`
              );
            })
            .catch((erro) => {
              console.error('Error when sending media: ', erro);
              clientCache.set(message.from, { stage: 'main_menu', isBlocked: false });
            });
        }`}
  </CodeBlock>
  <Paragraph>
  Neste trecho de código, gerencia-se a lógica para a opção 6, que está relacionada à lista de procedimentos de estética facial. A interação do usuário é temporariamente bloqueada para evitar novas mensagens durante o envio das mídias. O bot informa que as informações detalhadas estão sendo enviadas e, em sequência, envia duas imagens e um vídeo sobre o procedimento de microagulhamento, utilizando encadeamento para garantir que cada mídia seja enviada apenas após a confirmação da entrega da anterior. Após o envio, o estado do usuário é atualizado para o menu principal, e a interação é desbloqueada. O bot também envia uma mensagem informando que o usuário foi redirecionado ao menu principal, onde pode fazer novas escolhas. Um bloco de captura de erros garante que eventuais falhas no envio das mídias sejam registradas, mantendo o estado do usuário apropriado para futuras interações.
  </Paragraph>

</Section>


      
      <Footer>
        © 2024 Gabriel Dill - Todos os direitos reservados.
      </Footer>

      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <ModalImage src={modalImage} alt="Imagem ampliada" />
        </Modal>
      )}
    </PageContainer>
  );
};

export default WhatsAppBotPage;
