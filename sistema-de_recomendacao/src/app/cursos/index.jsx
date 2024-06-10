import { Text, Img } from "../../components";
import React from "react";

export default function CursosPage() {
  return (
    <>
      {/* course overview section */}
      <div className="w-full bg-light_blue-100 p-1">
        {/* course details section */}
        <div className="flex items-center gap-13 md:flex-col">
          {/* python course column section */}
          <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch md:p-5">
            {/* python course row section */}
            <div className="ml-25 flex w-83% items-center justify-between gap-5 md:ml-0 md:w-full sm:flex-col">
              <a href="https://www.youtube.com/embed/bv8Fxkesz71" target="_blank">
                <Img
                  src="img_rectangle_1.png"
                  width={212}
                  height={124}
                  alt="main image"
                  className="h-124 w-38% rounded-30 object-cover sm:w-full"
                />
              </a>
              {/* python course stack section */}
              <div className="relative h-138 w-41% md:h-auto sm:w-full">
                <Img
                  src="img_rectangle_6_138x289.png"
                  width={289}
                  height={138}
                  alt="secondary image"
                  className="h-138 w-full rounded-30 object-cover"
                /><Text size="3xl" as="p" className="absolute bottom-[21.52px] left-0 right-0 m-auto w-max text-teal-300">
                Cursos
              </Text>
              </div>
              </div>
              {/* python course description column section */}
              <div className="self-stretch rounded-[30px] bg-blue-200 p-[15px] pl-[15px]">
                {/* python course list section */}
                <div className="mt-[22px] flex flex-col gap-1">
                  <div className="flex w-[93%] items-start gap-[26px] md:w-full md:flex-col">
                    <Img
                      src="img_rectangle_22.png"
                      width={236}
                      height={165}
                      alt="python image"
                      className="h-[165px] w-[31%] rounded-[25px] object-cover md:w-full"
                    />
                    <Text size="3xl" as="p">
                      Domine Python: Fundamentos e Prática
                    </Text><Text size="xs" as="p" className="mr-9 w-[68%] leading-[21px] md:mr-0 md:w-full">
                    "Domine Python: Fundamentos e Prática" é um curso abrangente projetado para iniciantes e
                    entusiastas da programação que desejam dominar a linguagem Python. Este curso irá guiá-lo desde os
                    conceitos fundamentais até habilidades avançadas, permitindo que você desenvolva aplicativos robustos
                    e eficientes. Com uma abordagem prática e hands-on, você aprenderá sobre estruturas de dados, controle
                    de fluxo, funções, classes e muito mais, enquanto trabalha em projetos reais que consolidam seu
                    aprendizado. Prepare-se para se tornar um programador Python experiente e confiante com este curso
                    dinâmico e envolvente!
                    </Text>
                    <div className="flex flex-1">
                    <div className="flex w-full items-start gap-[26px] md:flex-col">
                <Img
                src="img_rectangle_23.png"
      width={236}
      height={171}
      alt="image"
      className="h-[171px] w-[29%] rounded-[19px] object-cover md:w-full"
    />
    <div className="flex flex-1 flex-col gap-[43px] md:self-stretch">
      <Text size="3xl" as="p">
        Java Masterclass: Desenvolvimento Profissional
      </Text>
      <Text size="xs" as="p" className="w-[97%] leading-[21px] md:w-full">
        Este curso abrangente de Java é projetado para levar seus conhecimentos de programação para o
        próximo nível. Desde os conceitos básicos até as técnicas avançadas, você aprenderá a dominar a
        linguagem Java e suas principais bibliotecas. Com a orientação de instrutores experientes, você
        explorará tópicos como orientação a objetos, manipulação de exceções, desenvolvimento de
        aplicativos para desktop e web, e muito mais. Prepare-se para se tornar um desenvolvedor Java
        confiante e capacitado, pronto para enfrentar desafios do mundo real e criar soluções robustas e
        escaláveis. Seja você um iniciante ou um profissional em busca de aprimoramento, esta
        masterclass é o seu caminho para o sucesso no desenvolvimento de software com Java.
      </Text>
    </div>
  </div>
</div><Text size="3xl" as="p" className="w-[67%] leading-[50px] md:w-full">
  Dominando os Dados: Um Guia Completo para Ciência de Dados
</Text>
</div>
<div className="flex flex-1">
  <div className="flex w-full items-start gap-[26px] md:flex-col">
    <Img
      src="img_rectangle_24.png"
      width={238}
      height={182}
      alt="image"
      className="h-[182px] w-[33%] rounded-[30px] object-cover md:w-full"
    />
    <Text size="md" as="p" className="mr-[45px] w-[67%] leading-[25px] md:mr-0 md:w-full">
      Este curso intensivo foi projetado para transformar entusiastas em profissionais qualificados. Com uma
      abordagem prática, o curso cobre desde fundamentos estatísticos e programação em Python até técnicas
      avançadas de machine learning e big data. Os alunos terão a oportunidade de trabalhar em projetos
      reais, analisar grandes conjuntos de dados e extrair insights valiosos. Ao final do curso, os
      participantes estarão equipados com as habilidades necessárias para impulsionar a tomada de decisões
      baseada em dados e liderar iniciativas de análise em suas organizações.
    </Text>
  </div>
</div>
</div>
<div className="flex w-[39%] flex-col items-center gap-4 rounded-[30px] bg-blue-200 p-[9px] md:w-full md:p-5">
  <div className="flex flex-col gap-[13px] self-stretch">
    <div className="flex items-start gap-[17px] sm:flex-col">
      <Img
        src="img_rectangle_26.png"
        width={180}
        height={153}
        alt="image two"
        className="h-[153px] w-[35%] rounded-[30px] object-cover sm:w-full"
      />
      <Text size="3xl" as="p" className="w-[65%] leading-[50px] sm:w-full">
        Mestre da Codificação: Torne-se um Engenheiro de Software de Elite
      </Text>
    </div>
  </div>
  <Text size="xs" as="p" className="leading-[21px]">
    Embarque em uma jornada transformadora com o curso "Mestre da Codificação". Este programa exclusivo é
    a sua porta de entrada para o mundo da engenharia de software, onde a inovação e a criatividade se
    encontram com a técnica e a precisão. Com um currículo que abrange desde os princípios fundamentais da
    programação até as mais avançadas tecnologias emergentes, você estará no caminho certo para se tornar
    um líder na indústria de tecnologia.
    <br />
    Prepare-se para mergulhar em um ambiente de aprendizado dinâmico, onde cada desafio é uma oportunidade
    para crescer e cada projeto é um passo em direção à maestria. Seja você um aspirante a desenvolvedor
    ou um profissional buscando aprimorar suas habilidades, o "Mestre da Codificação" é o curso que irá
    elevar sua carreira ao próximo nível.
  </Text>
<div className="flex items-start gap-[18px] sm:flex-col">
  <Img
    src="img_rectangle_27.png"
    width={180}
    height={137}
    alt="image three"
    className="mt-1.5 h-[137px] w-[35%] rounded-[24px] object-cover sm:w-full"
  />
  <Text size="2xl" as="p" className="w-[65%] leading-[47px] sm:w-full">
    Expert em Back-End: Desvendando os Segredos dos Servidores
  </Text>
</div>
<div className="flex flex-1">
  <Text size="xs" as="p" className="mb-[21px] w-[97%] leading-[21px] md:w-full">
    Descubra o poder oculto por trás das aplicações que movem o mundo com o curso "Expert em Back-End:
    Desvendando os Segredos dos Servidores". Este é o seu ingresso para o universo fascinante da engenharia
    de software back-end, onde cada linha de código é uma peça crucial na construção de sistemas robustos e
    escaláveis.
    <br />
    Neste curso, você será guiado através de um currículo meticulosamente elaborado, que vai desde a lógica
    de programação essencial até as mais sofisticadas arquiteturas de sistemas. Com uma abordagem prática,
    você irá aprender a projetar, desenvolver e manter infraestruturas de back-end que são o coração
    pulsante da tecnologia moderna.
    <br />
    Cada módulo é uma aventura, cada exercício prático é um desafio estimulante, e cada projeto é uma
    conquista que te aproxima da excelência. Se você é um entusiasta da tecnologia buscando transformar sua
    paixão em profissão, ou um desenvolvedor experiente querendo expandir seu repertório, este curso é a
    chave para desbloquear seu potencial ilimitado.
  </Text>
</div><Text>
</Text>
<div>
</div>
<div>
</div>
<div>
</div>