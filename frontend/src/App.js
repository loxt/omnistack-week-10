import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(`${position.coords.latitude}`);
        setLongitude(`${position.coords.longitude}`);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">
              Usuário do Github
              <input name="github_username" id="github_username" required />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="techs">
              Tecnologias
              <input name="techs" id="techs" required />
            </label>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">
                Latitude
                <input
                  type="number"
                  name="latitude"
                  id="latitude"
                  required
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                />
              </label>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">
                Longitude
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  required
                  value={longitude}
                  onChange={e => setLongitude(e.target.value)}
                />
              </label>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/29847769?s=460&v=4" alt="loxt" />
              <div className="user-info">
                <strong>Emannuel Loxt</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur cumque eius eligendi
              eum explicabo fuga id maiores quis tempore?
            </p>
            <a href="https://avatars0.githubusercontent.com/u/29847769?s=460&v=4">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/29847769?s=460&v=4" alt="loxt" />
              <div className="user-info">
                <strong>Emannuel Loxt</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur cumque eius eligendi
              eum explicabo fuga id maiores quis tempore?
            </p>
            <a href="https://avatars0.githubusercontent.com/u/29847769?s=460&v=4">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/29847769?s=460&v=4" alt="loxt" />
              <div className="user-info">
                <strong>Emannuel Loxt</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur cumque eius eligendi
              eum explicabo fuga id maiores quis tempore?
            </p>
            <a href="https://avatars0.githubusercontent.com/u/29847769?s=460&v=4">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/29847769?s=460&v=4" alt="loxt" />
              <div className="user-info">
                <strong>Emannuel Loxt</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur cumque eius eligendi
              eum explicabo fuga id maiores quis tempore?
            </p>
            <a href="https://avatars0.githubusercontent.com/u/29847769?s=460&v=4">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
