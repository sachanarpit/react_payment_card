// import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="card" style={{ backgroundColor: "#fea501" }}>
        <Card
          date="28/20/2020"
          logo="https://www.pngkey.com/png/full/480-4803237_amazon-icon-amazon-logo-png-icon.png"
          btn_text="Case Study"
          heading="Amazon Gift Pay"
          footer_text="Desktop - Mobile"
          icon="https://img.icons8.com/ios-glyphs/25/000000/long-arrow-right.png"
        />
      </div>
      <div className="card" style={{ backgroundColor: "#f6f6f6" }}>
        <Card
          date="17 Sep 2020"
          logo="https://www.transparentpng.com/thumb/apple-logo/d9RxbG-apple-logo-free-png.png"
          btn_text="Case Study"
          heading="Apple Gift Payment"
          footer_text="MacOS - Mobile"
          icon="https://img.icons8.com/ios-glyphs/25/000000/long-arrow-right.png"
        />
      </div>
    </div>
  );
}

export default App;
