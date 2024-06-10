import { Img, Text } from "../../components";
import React from "react";

export default function HomepagePage() {
  return (
    {/* main content section */}
    <div className="flex w-full justify-center bg-blue-200 px-2.5 pb-2.5">
      {/* featured images section */}
      <div className="relative mb-[58px] h-[956px] w-[98%]">
        <Img
          src="img_rectangle_2.png"
          width={414}
          height={512}
          alt="primary image"
          className="absolute left-[0.00px] top-[19%] m-auto h-[512px] w-[30%] rounded-[88px] object-cover"
        />
        {/* course list section */}
        <div className="absolute left-[e.80px] top-[0.00px] m-auto flex w-[76%] gap-[33px] ad:relative md:flex-col">
          <Img
            src="img_rectangle_1.png"
            width={223}
            height={153}
            alt="thumbnail image"
            className="h-[153px] w-[21%] rounded-[30px] object-cover md:w-full"
          />
        </div>
        {/* course highlight section */}
        <div className="relative mt-[5px] h-[138px] flex-1 md:mt-0 md:h-auto md:w-full md:flex-none">
          <a href="https://www.youtube.com/embed/bv8Fxk05z71" target="_blank">
            <Img
              src="img_rectangle_6_138x289.png"
              width={289}
              height={138}alt="course image"
              className-"h-[138px] w-full rounded-[30px] object-cover"
              </a>
              <Text size-"3x]" as-"p" className-"absolute bottom-[21. 52px] left-e right-@ m-auto w-max !text-teal-300">
              Cursos
              </Text>
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Img
              src="img_rectangle_17.png"
              width={212}
              height={153}
              alt-"rectangle"
              className="h-[153px] w-[20%] rounded-[30px] object-cover md:w-full"
              </a>
              <div className="mt-[5px] flex w-[22%] md:mt-0 md:w-full">
              <div className="flex w-full flex-col items-end">
              <Img
              src="img_rectangle 4.png"
              width-{231}
              height-{146}
              alt="image"
              className="h- [146px] w-full rounded-[24px] object-cover md:h-auto"
              <Text
              as-"p"
              className="text-shadow-ts1 relative mr-4 mt-[-50px] w-[80%] leading-[37px] [text-blue-200_81 md:mr-e ad:w-full"
              COMUNIDADE
              </Text>
            </div>
           </div>
          </div>/* welcome message section */
          <Text
            as="p"
            className="text-shadow-ts absolute bottom-[0.00px] right-[23.00px] m-auto w-[64%] leading-[37px]"
          >
            <br />
            Bem-vindo ao Sistema de Recomendação!
            <br />
            Somos uma plataforma dedicada a ajudar você a encontrar os melhores cursos online na área da programação.
            Seja você um novato buscando aprender os fundamentos ou um profissional experiente em busca de
            aprimoramento, estamos aqui para simplificar sua jornada de aprendizado.
            <br />
            Nossa missão é fornecer uma seleção abrangente de cursos de alta qualidade, tanto gratuitos quanto pagos,
            de modo que você possa encontrar exatamente o que precisa para atingir seus objetivos. Não importa se você
            está interessado em desenvolvimento web, ciência de dados, inteligência artificial ou qualquer outra área
            da programação, o Sistema de Recomendação tem recursos para você.
            <br />
            Entendemos que encontrar o curso certo pode ser uma tarefa desafiadora em meio à vasta quantidade de
            opções disponíveis na internet. É por isso que nossa equipe de especialistas se dedica a curar e
            recomendar os melhores cursos, garantindo que você tenha acesso a conteúdo relevante e de qualidade.
            <br />
            Além disso, o Sistema de Recomendação permite que você navegue facilmente por uma variedade de categorias,
            leia avaliações de outros usuários e encontre cursos recomendados com base em seus interesses e nível de
            habilidade. Estamos aqui para simplificar sua busca por conhecimento e ajudá-lo a alcançar seus objetivos
            de forma eficaz.
            <br />
            Então, comece sua jornada de aprendizado conosco hoje mesmo e descubra os cursos que o levarão ao próximo
            nível em sua carreira na programação!
            </>
          </Text>
          <Img src="img_ellipse_1.png" width={144} height={144} alt="profile image" className="absolute right-[0.00px] top-[12.00px] m-auto h-[144px] w-[144px] rounded-[72px] object-cover" />
        />
        </div>
        </div>
    </>
    );
    };