import { useState, useEffect } from "react";

import './App.css';

function App() {

  const [audio, setAudion] = useState(undefined)

  useEffect(()=>{
    audio?.play()
  })

  const playMusic = () => {
    if(!audio){
      setAudion(new Audio('https://wishesplus.com/wp-content/uploads/2021/02/Happy-Birthday-To-You-Happy-Birthday-Songs-2021-WishesPlus.com_.mp3'));
    }
  }

  return (
    <>
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            <a href="#top" className="navbar-brand smoothScroll">Yulianda Putri</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#top" className="smoothScroll"><span>Home</span></a></li>
              <li><a href="#about" className="smoothScroll"><span>Tentang</span></a></li>
              <li><a href="#gallery" className="smoothScroll"><span>Galeri</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <section id="home">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">

            <div className="col-md-offset-1 col-md-10 col-sm-12 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="wow fadeInUp" data-wow-delay="0.6s">Haapy Birthday</h1>
              <p className="wow fadeInUp" data-wow-delay="0.9s">Jalan-jalan ke bawah yuk 👇. Ikuti saja alurnya yah 🙂</p>
              <a onClick={playMusic} className="btn btn-success btn-lg smoothScroll wow fadeInUp" data-wow-delay="1.2s"> <i className="fa fa-music"></i> Mainkan musik</a>
            </div>

          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8 wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-thumb">
                <h1>Biodata</h1>
                <div>
                  <h5>Nama</h5>
                  <p>Yulianda Putri Handayani</p>
                </div>
                <div>
                  <h5>Tempat Tanggal Lahir</h5>
                  <p>Bandung Barat, 10 November 1977</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 wow fadeInUp about-img" data-wow-delay="0.6s">
              <img src={process.env.PUBLIC_URL + '/images/yuli-1.jpg'} className="img-responsive img-circle" alt="Tentang" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <div className="row">

            <div className="col-md-offset-2 col-md-8 col-sm-12 smoothScroll wow fadeInUp" data-wow-delay="0.3s">
              <div className="section-title">
                <h1>Gallery</h1>
                <p>Coba ingat-ingat dibawah ini foto kapan yah 😂. Ada sesuatu didalam foto, jangan lupa untuk di baca yah 🤑</p>
              </div>
            </div>

            <ul className="grid cs-style-4">
              <li className="col-md-6 col-sm-6 smoothScroll wow fadeInUp">
                <figure>
                  <div><img src={process.env.PUBLIC_URL + "/images/yuli-2.jpeg"} alt="Wisuda" /></div>
                  <figcaption>
                    <h1>Wisuda</h1>
                    <small>Semoga ilmu yang diraih bisa bermanfaat bagi semua orang 😎</small>
                  </figcaption>
                </figure>
              </li>

              <li className="col-md-6 col-sm-6 smoothScroll wow fadeInUp">
                <figure>
                  <div><img src={process.env.PUBLIC_URL +"/images/yuli-3.jpg"} alt="Kesehatan" /></div>
                  <figcaption>
                    <h1>Kesehatan</h1>
                    <small>Sehat selalu yah, jangan sakit-sakitan 🙏</small>
                  </figcaption>
                </figure>
              </li>

              <li className="col-md-6 col-sm-6 smoothScroll wow fadeInUp">
                <figure>
                  <div><img src={process.env.PUBLIC_URL + "/images/yuli-4.jpg"} alt="Ibadah" /></div>
                  <figcaption>
                    <h1>Ibadah</h1>
                    <small>Tetap rajin beribadah, terutama shalat 5 waktu 🤲</small>
                  </figcaption>
                </figure>
              </li>

              <li className="col-md-6 col-sm-6 smoothScroll wow fadeInUp">
                <figure>
                  <div><img src={process.env.PUBLIC_URL + "/images/yuli-5.jpg"} alt="Sikap" /></div>
                  <figcaption>
                    <h1>Sikap</h1>
                    <small>Tetap menjadi orang baik 👌</small>
                  </figcaption>
                </figure>
              </li>

              <li className="col-md-6 col-sm-6 smoothScroll wow fadeInUp">
                <figure>
                  <div><img src={process.env.PUBLIC_URL + "/images/yuli-6.jpg"} alt="Jasa" /></div>
                  <figcaption>
                    <h1>Jasa</h1>
                    <small>Tetap semangat mendidik anak-anak demi generasi lebih baik 😁</small>
                  </figcaption>
                </figure>
              </li>

              <li className="col-md-6 col-sm-6 smoothScroll wow fadeInUp">
                <figure>
                  <div><img src={process.env.PUBLIC_URL + "/images/yuli-7.jpg"} alt="Tenaga" /></div>
                  <figcaption>
                    <h1>Tenaga</h1>
                    <small>Gak boleh males-malesan, tetap semangat okayyy 💪</small>
                  </figcaption>
                </figure>
              </li>
            </ul>

          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8 wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-thumb">
                <h1>Ucapan</h1>
                <p>Intinya, Selamat ulang tahun. Semoga yang kamu cita-citakan bisa tercapai. Semoga panjang umur. Berbakti kepada kedua orang tua</p>
                <p>Sekian dan terima kasih 😁</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 wow fadeInUp about-img" data-wow-delay="0.6s">
              <img src={process.env.PUBLIC_URL + "/images/war.jpg"} className="img-responsive img-circle" alt="Ucapan" />
            </div>
          </div>
        </div>
      </section>

      <a href="#" className="go-top"><i className="fa fa-angle-up"></i></a>
    </>
  );
}

export default App;
