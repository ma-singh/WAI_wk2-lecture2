import React from 'react';
import Model from 'react-modal'

import Club from '../Club'
import ClubRow from '../ClubRow'

// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = ({
  clubs, 
  showClubs, 
  club, 
  orderByName, 
  orderByStanding, 
  selectClub, 
  showClubsList}) => (
    <div className="container">
      <div className="toolbar">
        <button onClick={orderByName} className="button button-right">
          Sort by Name
        </button>
        <button onClick={orderByStanding} className="button button-right">
          Sort by Standing
        </button>
      </div>
      <ul>
        {clubs.map(club =>
          <ClubRow
            key={club.standing}
            club={club}
            onClick={()=> selectClub(club)} />
        )}
      </ul>

      <Modal isOpen={showClubs}
        overlayClassName="modal-overlay"
        className="modal"
        contentLabel="Club">

        <Club club={club} closeModal={showClubsList} />

      </Modal>

    </div>
  )

export default App;
