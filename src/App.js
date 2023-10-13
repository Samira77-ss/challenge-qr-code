import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="qr-code">
          <img
            src="https://play-lh.googleusercontent.com/sQudn3Wh5Ffigo3gfnBnY-jWwL1KfqQSW7aKGTL_PIdUGnPcV29SoyKKsnHYHNlAp5k"
            alt="QRCODE"
          />
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <footer>
        This page was coded by Samira Seyfi{" "}
        <a
          href="https://github.com/Samira77-ss/challenge-qr-code"
          target="_blank"
          alt="GithHub Profile"
          rel="noreferrer"
        >
          open-source-code on GitHub
        </a>
        , and hosted on{" "}
        <a
          href="https://elaborate-kulfi-d6857f.netlify.app"
          alt="Netlify link"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
