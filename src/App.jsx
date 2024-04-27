import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";


const App = () => {
  return (
    <div className="nav" >
      <Header />
      <Contact phone="+998 000 00 00" email="myMail@gmail.com"  />
      <Footer />
    </div>
  );
};

export default App;
