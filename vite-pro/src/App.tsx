// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import logo from "./assets/img/logo.png";
import top from "./assets/img/top.png";
import top2 from "./assets/img/top2.png";
// import logo from './assets/img/thumbnail.mp4'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="layout-topbar .layout-topbar-sticky">
        <div className="layout-topbar-inner">
          <div className="layout-topbar-logo-container">
            <img src={top2} alt="logo" />
          </div>
          {/* <div className="layout-topbar-logo">
              <img src={top} alt="logo" />
          </div> */}
          <ul className="flex m-0 p-0 gap-2 align-items-center">
            <li>
              H
            </li>
            <li>
              M
            </li>
            <li>
              Y
            </li>
          </ul>
        </div>
      </div>

      <div>
        {/* <div className="four_zero_four_bg_404"></div> */}
        <img src={logo} alt="text" />
      </div>
    </>
  );
}

export default App;
