import "./App.css";
import Access from "./components/Access/Access";
import Belt from "./components/Belt/Belt";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Message from "./components/Message/Message";
import Sns from "./components/Sns/Sns";

function App() {
  return (
    <>
      <Header />
      <Message />
      <Menu />
      <Belt />
      <Access />
      <Sns />
      <Footer />
    </>
  )
}

export default App;
