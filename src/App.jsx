import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from '../component/header.jsx';
import Footer from '../component/footer.jsx';

function App(props) {
  return (
    <>
      <div id="container" className="w-full h-auto flex flex-col gap-2">
        <Header></Header>
        <main className="w-full h-auto">
          {props.pages}
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
