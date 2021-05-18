import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Carousel } from "react-bootstrap";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="body1">
        <div className="section_firstmain">
          <div className="content">
            <h1>Dê um up em sua carreira!!</h1>
            <p>
              Bacon ipsum dolor amet kielbasa picanha jerky, flank swine
              frankfurter pork loin pig spare ribs. Corned beef tenderloin
              drumstick bresaola chicken chislic landjaeger ground round
            </p>
            <a href="/choosesignup" class="botaoCadastro">
              Cadastrar
            </a>
          </div>

          <div className="image">
            <img
              src="https://media.discordapp.net/attachments/836953521751326720/839940212125073518/unknown.png"
              alt=""
              width="491.65"
              height="344"
            />
          </div>
        </div>
      </div>

      <div className="second_main">
        <div className="sectionLargura">
          <Carousel>
            <Carousel.Item interval={1000}>
              <div className="sectionSlide">
                <div className="slideimg1">
                  <img
                    className="slideImg1"
                    src="https://media.discordapp.net/attachments/836953521751326720/839940262985990225/unknown.png?width=722&height=676"
                    alt="First slide"
                  />
                </div>

                <div className="textoslide1">
                  <h1>Quem somos?</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste optio esse quia ipsum labore eligendi magnam
                    exercitationem minima eveniet provident consequuntur
                    aspernatur quasi, laudantium ipsam fugit nisi, asperiores,
                    deserunt nulla?
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="thirdMain">

        <div className="linha1">
          <img src="https://media.discordapp.net/attachments/836953521751326720/840212628537475112/unknown.png?width=1440&height=4" alt="" />
        </div>

        <div className="sectionLarguraThird">

            <div className="textoEsquerdo">

              <h1>Recrute os melhores profissionais</h1>
              <p>Bacon ipsum dolor amet kielbasa picanha jerky, flank swine frankfurter pork loin pig spare ribs. Corned beef tenderloin drumstick bresaola chicken chislic landjaeger ground round</p>

            </div>

            <div className="textoDireito">

              <a href="/cadastrodevagas" class="botaoVaga">
                Divulgar Vaga
              </a>

            </div>

        </div>

        <div className="linha2">
          <img src="https://media.discordapp.net/attachments/836953521751326720/840212628537475112/unknown.png?width=1440&height=4" alt="" />
        </div>

      </div>


      <div className="fourthMain">

          <div className="sectionLarguraFourth">

            <div className="contentFourth">

              <div className="imageLeft">
                  <img src="https://media.discordapp.net/attachments/836953521751326720/840223574094118922/imagem_2021-05-07_104605-removebg-preview.png" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit commodi, porro perferendis corporis labore esse eligendi eum iste illo laboriosam, ab rem quod adipisci saepe sint maiores dolorem fugit.</p>
              </div>

              <div className="imageRight">
                  <img src="https://media.discordapp.net/attachments/836953521751326720/840223585863598100/imagem_2021-05-07_104645-removebg-preview.png" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit commodi, porro perferendis corporis labore esse eligendi eum iste illo laboriosam, ab rem quod adipisci saepe sint maiores dolorem fugit.</p>
              </div>

            </div>

          </div>

      </div>
      
      <Footer />

    </div>
  );
};

export default Home;
