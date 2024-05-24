import React from "react";
import reactImage from "../../Images/react.png";
import jsImage from "../../Images/js.png";
import firebaseImage from "../../Images/firebase.jpg";
import profileImage from "../../Images/profileImage.jpg";

function HomePage() {
  return (
    <div className="container text-center">
      <h1>main page</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        いおりです。ただの大学生です。主にHTML/CSS/Javascript/Reactメインに取り扱っています。
        <br></br>
        趣味は読書やFPSゲームを行うこと。フルスタックエンジニアになりたいな。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div>ないわ！！！</div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
