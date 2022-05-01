import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'
import Marketing from './components/marketing/marketing'
import Come from './components/come/come'
import Footer from './components/footer/footer.jsx'
import './style/style.css'


function App() {
  return (
    <div className="App">
      <Header title='landing page' />
      <Main />
      <Marketing />
      <Come />
      <Footer />
    </div>
  );
}

export default App;
