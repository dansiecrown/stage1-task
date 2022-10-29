import Anchor from './components/Anchor';
import './App.css';

function App() {
  const data = [
    {
      name: "Twitter Link",
      id: "twitter",
      url: "https://twitter.com/dansiecrown",
    },
    {
      name: "Zuri Team",
      id: "btn__zuri",
      url: "https://triaining.zuri.team/",
    },
    {
      name: "Zuri Books",
      id: "books",
      url: "https://books.zuri.team/",
    },
    {
      name: "Python Books",
      id: "book__python",
      url: "https://books.zuri.team/python-forbeginners?ref_id=deetechy",
    },
    {
      name: "Background Check for Coders",
      id: "pitch",
      url: "https://background.zuri.team/",
    },
    {
      name: "Design Books",
      id: "book__design",
      url: "https://books.zuri.team/design-rules",
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src="./assets/arrow.png" alt="Arrow" />
      </header>
      <div className="img-container">
        <img src="./assets/dan.jpg" className="profile__img" id='profile__img' alt='Profile' />
        <p id='twitter'>@dansiecrown</p>
        <p id='slack'>Deetechy</p>
      </div>

      <Anchor data={data} />

      <div className="footer1">
        <img src="./assets/slack.png" alt="git" />
        <img src="./assets/git.png" alt="git" />
      </div>
      <div className="separator">
        <hr />
      </div>
      <div className="footer2">
        <img src="./assets/zuri.png" alt="git" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src="./assets/I4G.png" alt="git" />
      </div>

    </div>
  );
}

export default App;
