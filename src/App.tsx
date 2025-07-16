// import "./styles/reset.css";
import "./App.css";
import Access from "./components/Access/Access";
import Belt from "./components/Belt/Belt";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Message from "./components/Message/Message";
import Sns from "./components/Sns/Sns";
import History from "./components/History/History";

function App() {
  return (
    <>
      <Header />
      <main>
        <Message />
        <Menu />
        <Belt />
        <Access />
        <History />
        <Sns />
      </main>
      <Footer />
    </>
  );
}

export default App;
