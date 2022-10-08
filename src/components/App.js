import { Route } from 'react-router-dom';

import AllMeetups from '../pages/AllMeetups';
import NewMeetup from '../pages/NewMeetup';
import Favorites from '../pages/Favorites';

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetups />
      </Route>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
