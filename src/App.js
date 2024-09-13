import "./styles.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>

      <SearchEngine />

      <div className="footer">
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/118596-nokwazi-nomfundo-pearl-ngubane"
          target="_blank"
          rel="noreferrer"
        >
          Pearl Ngubane
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Pearltee28/react-weaather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </div>
    </div>
  );
}
