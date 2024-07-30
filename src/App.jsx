import React, { useState, useEffect } from 'react';
import './App.css';
import navbarLogo from './images/navbar-logo.svg';
import profileAvatar from './images/avatar.svg';
import present from './images/present.svg';
import notifications from './images/notif.svg';
import hero from './images/hero.png';
import avatar1 from './images/avatar-1.png';
import article1 from './images/article-1.png';
import article2 from './images/article-2.png';
import article3 from './images/article-3.png';
import article4 from './images/article-4.png';
import article5 from './images/article-5.png';
import article6 from './images/article-6.png';
import avatar2 from './images/avatar-2.png';
import avatar3 from './images/avatar-3.png';
import avatar4 from './images/avatar-4.png';
import avatar5 from './images/avatar-5.png';
import avatar6 from './images/avatar-6.png';
import action from './images/action.png';
import keyboard from './images/keyboard.png';
import article7 from './images/article-7.png';
import article8 from './images/article-8.png';
import article9 from './images/article-9.png';
import article10 from './images/article-10.png';
import article11 from './images/article-11.png';
import arrow from './images/arrow.svg';
import footerLogo from './images/footer-logo.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import be from './images/be.svg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <div className="navbar__wrapper">
            <img className='navbar__logo' src={navbarLogo} alt="" />
            <div className="navbar__right">
              <div className="navbar__profile">
                <img className='profile__logo' src={profileAvatar} alt="" />
                <select className='profile__user'>
                  <option value="Bruce Lee">Bruce Lee</option>
                  <option value="Bruce Lee">Bruce Lee</option>
                  <option value="Bruce Lee">Bruce Lee</option>
                </select>
              </div>
              <div className="navbar__extra">
                <a className='navbar__prize' href="#"><img src={present} alt="" /></a>
                <a className='navbar__notifications' href="#"><img src={notifications} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <img src={hero} alt="" />
        <div className="container">
          <div className="hero__card">
            <div className="hero__card__wrapper">
              <h3 className='hero__card__title'>5 mind blowing facts about the iPhone 14</h3>
              <div className="card__bottom">
                <img src={avatar1} alt="" />
                <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="articles">
        <div className="container">
          <h3 className='articles__title'>Featured articles</h3>
          <div className="articles__cards">
            <div className="articles__card">
              <img src={article1} alt="" />
              <div className="articles__content">
                <h4 className="articles__card__title">10 beaches you must visit</h4>
                <div className="card__bottom">
                  <img src={avatar6} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
              </div>
            </div>
            <div className="articles__card">
              <img src={article2} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title">10 beaches you must visit</h4>
                <div className="card__bottom">
                  <img src={avatar1} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
              </div>
            </div>
            <div className="articles__card">
              <img src={article3} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title">10 beaches you must visit</h4>
                <div className="card__bottom">
                  <img src={avatar2} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
              </div>
            </div>
            <div className="articles__card">
              <img src={article4} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title">10 beaches you must visit</h4>
                <div className="card__bottom">
                  <img src={avatar3} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
              </div>
            </div>
            <div className="articles__card">
              <img src={article5} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title">10 beaches you must visit</h4>
                <div className="card__bottom">
                  <img src={avatar4} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
              </div>
            </div>
            <div className="articles__card">
              <img src={article6} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title">10 beaches you must visit</h4>
                <div className="card__bottom">
                  <img src={avatar5} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <img src={keyboard} alt="" />
          <div className="featured__card">
            <span className='featured__main__title'>Featured</span>
            <h3 className='featured__title'>Beached to take you somewhere else</h3>
            <div className="card__bottom">
              <img src={avatar1} alt="" />
              <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
            </div>
          </div>
        </div>
      </section>

      <section className="articles-2">
        <div className="container">
          <h3 className='articles__title'>Featured articles</h3>
          <div className="articles__cards-2">
            <div className="articles__card-2">
              <img src={article7} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title-2">Pathway to the Mediterranean</h4>
                <div className="card__bottom">
                  <img src={avatar1} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
              </div>
            </div>
            <div className="articles__card-2">
              <img src={article8} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title-2">My awesome safari in Lahbab Desert, United Arab Emirates</h4>
                <div className="card__bottom">
                  <img src={avatar1} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
              </div>
            </div>
            <div className="articles__card-2">
              <img src={article9} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title-2">10 amazing things to do in Cuba</h4>
                <div className="card__bottom">
                  <img src={avatar1} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
              </div>
            </div>
            <div className="articles__card-2">
              <img src={article10} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title-2">The best street food in the world. Ranked!</h4>
                <div className="card__bottom">
                  <img src={avatar1} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
              </div>
            </div>
            <div className="articles__card-2">
              <img src={article11} alt="" />
              <div className="articles__content">
              <h4 className="articles__card__title-2">Travel Packing guide for beginners</h4>
                <div className="card__bottom">
                  <img src={avatar1} alt="" />
                  <p className='card__text'>Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className='articles__description'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
              </div>
            </div>
          </div>
          <div className="articles-2__link">
            <a className='articles__link' href="#">Load more</a>
          </div>
        </div>
      </section>

      <section className='action'>
        <div className="container">
          <div className="action__wrapper">
            <img className='action__image' src={action} alt="" />
            <div className="action__content">
              <h3 className='action__title'>Incredible deals, right to your inbox!</h3>
              <div className="action__input__wrapper">
                <input className='action__input' type="text" placeholder='Placeholder' />
                <button className='action__button'>
                  <img src={arrow} alt="" />
                </button>
              </div>
              <a className='action__link' href="#">By joining you agree to our Terms and Conditions</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="footer__top__wrapper">
              <div className="footer__top__card">
              <div className="footer__col">
                <h4 className='footer__title'>First Column</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link one</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link two</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link three</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link four</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>Second Column</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link one</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link two</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link three</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link four</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>Third Column</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link one</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link two</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link three</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link four</a>
                  </li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className='footer__title'>Fourth Column</h4>
                <ul className='footer__list'>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link one</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link two</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link three</a>
                  </li>
                  <li className="footer__list__item">
                    <a className='footer__list__link' href="#">Link four</a>
                  </li>
                </ul>
              </div>
              </div>
              <div className="footer__form">
                <h4 className='footer__form__title'>Never miss an update</h4>
                <div className="footer__input__wrapper">
                  <input className='action__input' type="text" placeholder='Placeholder' />
                  <button className='action__button'>
                    <img src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom__content">
              <img src={footerLogo} alt="" />
              <a className='footer__bottom__link' href="#">© 2019 Fabrx </a>
              <div className="footer__bottom__webs">
                <a className='footer__bottom__web__link' href="#">
                  <img src={facebook} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={instagram} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={twitter} alt="" />
                </a>
                <a className='footer__bottom__web__link' href="#">
                  <img src={be} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;