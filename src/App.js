// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Global from "./styles/global";
import Header from "./pages/header/header";
import Menu from "./pages/menu/menu";
import SectionOne from "./pages/home/section1";
import SectionTwo from "./pages/home/section2";
import Footer from "./pages/footer/footer";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div style={{ backgroundColor: "#953E46" }}>
      <Global />
      <Header />
      <Menu />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
