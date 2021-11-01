import Header from "./Header";
import "./css/card.css";

let Card = ({ date, logo, btn_text, heading, footer_text, icon }) => {
  return (
    <>
      <Header date={date} logo={logo} />
      <br />
      <button>{btn_text}</button>
      <br />
      <h2>{heading}</h2>
      <Header date={footer_text} logo={icon} />
    </>
  );
};

export default Card;
