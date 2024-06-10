import { Img, Text } from "../../components";
import Link from "next/link";
import React from "react";

export default function ComunidadePage() {
  return (
    // community section
    <div className="flex w-full justify-center bg-light_blue-100 py-1 px-23 sm:px-5 sm:pb-5">
      <div className="mx-auto mb-11 flex w-full max-w-1394px flex-col gap-1.5">
        // community highlight section
        <div className="flex w-60% items-center justify-between gap-5 md:w-full sm:flex-col">
          <a href="https://www.youtube.com/embed/bv8Fxk@sz71" target="_blank">
            <Img
              src="img_rectangle_1.png"
              width={212}
              height={124}
              alt="community image"
              className="h-124px w-25% rounded-30px object-cover sm:w-full"
            />
          </a>
          <div className="flex w-34% flex-col items-end sm:w-full">
            <Img
              src="img_rectangle_4.png"
              width={285}
              height={128}
              alt="community column image"
              className="h-128px w-full rounded-24px object-cover md:h-auto"
            />
            <Text
              size="3x"
              as="p"
              className="text-shadow-ts1 relative mr-22px mt-48px !text-blue-200 md:mr-0"
            >// course details section
            <div>
              <div className="flex flex-col">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <Text size="5xl" as="p" className="semibold leading-none">
                    Aprender programação é mais fácil do que parece!
                  </Text>
                  <div className="mt-8">
                    {/* Image */}
                    <img src='img/rectangle_23.png'
                      width={736}
                      height={165}
                      alt=""
                      className="-mx-[15px] w-[95%] [125px] object-cover"
                      </Text>
                      </div>
                      </div>
                      {/* course details section */}
                      <div className="flex gap-10 md:flex-col">
                        <div className="flex w-full flex-col rounded-[42px] bg-blue-200_01 pb-[7px] pl-[7px]">
                          <div className="flex flex-col">
                            <div className="ml-[19px] flex flex-col items-start gap-4 md:ml-0">
                              <Text size="3x1" as="p" className="w-[77%] self-end leading-[50px] md:w-full">
                                Domine Python: Fundamentos e Prática
                              </Text>
                              <Img src="img_rectangle_22.png" width={236} height={165} alt="course image" className="h-[165px] w-[57%] rounded-[25px] object-cover." />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text size="md" as="p" className="w-[95%] leading-[25px] md:w-full">
                        " Excelente curso! Aprendi muito sobre Python e agora me sinto muito mais confiante em minha capacidade de programação. - Ana"
                        <br />
                        " Recomendo este curso a todos os aspirantes a programadores. Explicações claras e exercícios práticos realmente me ajudaram a entender os conceitos fundamentais. - João"
                        <br />
                        " Incrível! Este curso me deu uma base sólida em Python. Os projetos práticos foram desafiadores, mas extremamente gratificantes. - Maria"
                        <br />
                        "O melhor curso de Python que já fiz! Os instrutores são muito experientes e conseguiram explicar os conceitos de forma simples e acessível. - Carlos"
                        <br />
                        " Este curso mudou minha vida! Aprendi tanto em tão pouco tempo que estou ansioso para continuar explorando o mundo da programação com Python. - Laura"
                      </>
                      </Text>
                      <div className="mt-2.5 flex flex-col items-center">
                        <Text as="p" className="!text-blue_gray-700">5 Módulos</Text>
                        <Text size="3xl" as="p" className="relative mt-[-16px] !text-green-700">Gratuito </Text>
                      </div>
                      <div className="relative z-[1] flex flex-wrap items-center gap-1.5">
                        <Text as="p" className="!text-yellow-900">
                            Link do curso:
                        </Text>
<Link href="https://www.python-course.com/" target="_blank" rel="noreferrer" className="self-end">
  <Text size="s" as="p" className="underline">
    https://www.python-course.com
  </Text>
</Link>
</div>
<div className="relative ml-[29px] mt-[-3px] flex items-center gap-3 md:ml-0">
  <Text as="p" className="self-end">
    descreva seu feedback -->
  </Text>
  <Img src="img_ellipse2.png" width={49} height={49} alt="feedback image" className="h-[49px] w-[49px] rounded-[24px] object-cover"/>
</div>
</div>
{/* java course section */}
<div className="relative h-[856px] w-full rounded-[42px] bg-blue-200_01 py-[7px]">
  <div className="absolute left-0 right-0 top-[1200px] m-auto flex w-full flex-col gap-[5px]">
    <div className="relative h-[246px]">
      <Text size="3xl" as="p" className="absolute left-0 right-0 top-[0.00px] m-auto w-[97%] leading-[50px]">
        >Java Masterclass: Desenvolvimento Profissional
</Text>
<Img src="img_rectangle23.png" width={236} height={161} alt="java image" className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[161px] w-[55%] rounded-[19px] object-cover"/>
</div>
<Text size="xs" as="p" className="leading-[21px]">
  "Java Masterclass: Desenvolvimento Profissional é um curso extraordinário! As lições são ricas em conteúdo e os exercícios práticos me deram uma nova perspectiva sobre programação em Java. Agora, sinto-me totalmente equipado para encarar desafios profissionais na área. - Felipe"
  <br />
  "Este curso é um tesouro para quem quer dominar Java. As explicações são minuciosas e os exemplos práticos solidificam o aprendizado. É uma experiência imersiva que prepara você para o mundo real da programação. - Beatriz"
  <br />
  "Surpreendente! O curso me proporcionou um conhecimento robusto sobre Java. Os projetos de final de curso não só testaram o que aprendi, como também me motivaram a ir além. Agora, estou pronto para desenvolver meus próprios aplicativos. - Rafael"
  <br />
  "Definitivamente, este é o curso mais completo de Java que já fiz. Os instrutores têm uma vasta experiência e apresentam os conceitos de maneira clara e objetiva. - Gabriela"
  <br />
  "Transformador! Este curso elevou meu entendimento de Java a outro nível. A quantidade de conhecimento que adquiri em tão pouco tempo é impressionante, e mal posso esperar para aplicá-lo em projetos futuros. - Tiago"
</>
</Text></div>
<div className="absolute bottom-[7.13px] left-0 right-0 m-auto h-[138px] w-[89%]">
  <div className="absolute left-[0.00px] top-[0.00px] m-auto flex flex-col items-start">
    <div className="flex flex-col items-center">
      <Text as="p" className="!text-blue_gray-700">8 Módulos</Text>
      <Text size="3xl" as="p" className="relative mt-[-15px] !text-green-700">Gratuito </Text>
    </div>
    <Text as="p" className="relative mt-[-12px] !text-yellow-900">Link do curso:</Text>
  </div>
</div>
<div className="absolute bottom-[0.52px] left-0 right-0 m-auto flex w-full items-center sm:relative sm:flex-col">
  <Text as="p" className="self-end">descreva seu feedback -- >
    
  </Text>
  <div className="relative ml-[-108px] flex w-full flex-col items-end sm:ml-0 sm:w-full">
    <Link href="https://www.python-course.com/" target="_blank" rel="noreferrer" className="relative z-[2]">
      <Text size="s" as="p" className="underline">https://www.javamaster-course.com</Text>
    </Link><Img src="img_ellipse_2.png" width={49} height={49} alt="feedback image one" className="relative mr-[76px] mt-[-4px] h-[49px] w-[49px] rounded-[24px] object-cover md:mr-0"/>
</div>
</div>
</div>
<div className="relative h-[856px] w-full rounded-[42px] bg-blue-200_01">
  <div className="absolute left-0 right-0 top-[6.00px] m-auto flex w-full flex-col gap-[5px]">
    <div className="flex flex-col items-start">
      <Text size="3xl" as="p" className="ml-3.5 w-full leading-[50px] md:ml-0">
        Dominando os Dados: Um Guia Completo para Ciência de Dados
      </Text>
      <Img src="img_rectangle_24.png" width={238} height={165} alt="image" className="h-[165px] w-[55%] rounded-[30px] object-cover"/>
    </div>
  </div>
</div>
<Text size="xs" as="p" className="w-[97%] leading-[21px] md:w-full">
    <>
    "Dominando os Dados: Um Guia Completo para Ciência de Dados é um curso revolucionário que me introduziu ao fascinante mundo da análise de dados. As aulas teóricas são complementadas por exercícios práticos que realmente solidificam o aprendizado. Agora, sinto-me confiante para mergulhar em projetos de dados complexos e extrair insights valiosos. - Felipe"
"Este curso é uma joia para qualquer pessoa interessada em ciência de dados. As explicações detalhadas e os casos de estudo reais me ajudaram a entender não apenas como os dados são analisados, mas como eles podem ser transformados em decisões estratégicas. - Beatriz"
"Surpreendente! 'Dominando os Dados' me deu as ferramentas necessárias para entender e aplicar técnicas de ciencia de dados em problemas do mundo real. Os projetos praticos foram desafiadores e extremamente gratificantes. - Rafael"
"O melhor curso de ciência de dados que ja fiz! Os instrutores são incrivelmente conhecedores e apresentam os conceitos de forma clara e aplicável. - Gabriela"
"Este curso mudou a forma como vejo os dados. Com o conhecimento adquirido, estou ansioso para continuar explorando o mundo da ciência de dados e suas infinitas possibilidades. - Tiago"
    <><Text>
<div>
<div className="absolute bottom-[7.57px] left-0 right-0 m-auto h-[128px] w-[95%]">
<div className="absolute left-[0.00px] top-[0.00px] m-auto flex flex-col items-start">
<div className="flex flex-col items-end">
<Text as="p" className="text-blue_gray-700">
8 Modulos
</Text>
<Text size="3x1" as="p" className="relative mt-[-16px] !text-green-700">
Gratuito{" "}
</Text>
</div>
<Text as="p" className="relative mt-[-17px] !text-yellow-900">
Link do curso:
</Text>
</div>
<div className="absolute bottom-[0.31px] left-0 right-0 m-auto flex w-[98%] items-center sm:relative sm:flex-col">
<Text as="p" className="relative z-[3] mb-[7px] self-end">
descreva seu feedback -- >
</Text>
<div className="relative ml-[-112px] flex w-full flex-col items-end sm:ml-0 sm:w-full">
<Link href="https://www.python-course.com/" target="_blank" rel="noreferrer">
<Text size="s" as="p" className="underline">
[Link do curso Python]
</Text>
</Link>
<img src="img_ellipse_2.png" 
    width={49} height={49} alt="image" className="relative mr-[91px] mt-[-4px] h-[49px] w-[49px] rounded-[24px] object-cover md:mr-0">
    />
    <div></div>
<div>
</div>
<div>
</div>
<div>
</div>
<div>
</>
);
}
