import logo from './logo.svg';
import './App.css';
import avatar from './images/tri.jpg';

function App() {
  return (
    <div class="container">
      <div class="head">
        <div class="col-1">
          <img src={avatar} class="avatar" />
        </div>
        <div class="col-2">
          <h1>LE NGOC VINH TRIEU</h1>
          <div>pront end - web developer</div>
        </div>
      </div>
      <div class="body">
        <div class="col-1">
          <h3>General information</h3>
            <div class="general_info">
              <div class="item_info">
                <img src={avatar} class="icon" />
                <p>trieulnvt@gmail.com</p>
              </div>
              <div class="item_info">
                <img src={avatar} class="icon" />
                <p>(+84) 353561801</p>
              </div>
              <div class="item_info">
                <img src={avatar} class="icon" />
                <p>Dak Lak, Viet Nam</p>
              </div>
              <div class="item_info">
                <img src={avatar} class="icon" />
                <p>github.com/trieule47</p>
              </div>
            </div>
            <h3>Education</h3>
            <div class="general_info">
              <p><b>University: </b> ABC University</p>
              <p><b>Major: </b>web developer</p>
              <p><b>Coures: </b>00000</p>
              <p><b>Future orientation: </b> Frontend web Developer</p>
            </div>
        </div>
        <div class="col-2">
          <h3>Technical Skill</h3>
          <div class="general_info">
            <p><b>Progamming Languages: </b></p>
            <p>HTML,CSS, JavaScript</p>
            <p><b>Framework/ Library </b></p>
            <p>Reactjs, redux, bootstrap, Ant-Design</p>
            <p><b>Tools </b> Git/GitLab, Figma, Postgrest,...</p>
          </div>
          <h3>Experience</h3>
          <div class="general_info">
            Participate 
          </div>
        </div>
      </div>

    </div>
  );
}
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

export default App;
