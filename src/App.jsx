import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from '../component/header.jsx';
import Footer from '../component/footer.jsx';

function App(props) {
  return (
    <>
      <div id="container" className="w-full h-auto flex flex-col gap-5 bg-gradient-to-r from-strongpink via-pinkrose to-pinkwhite text-gray-800">
        <Header></Header>
        <main className="w-full h-auto flex items-center justify-center">
          {props.pages}
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

const AppMemoized = React.memo(App);

export default AppMemoized;
