import './App.css';
import { CenterBar } from './components/centerbar';
import { LeftBar } from './components/leftbar';
import { RightBar } from './components/rightbar';

function App() {
  return (
    <div>
      <LeftBar/>
      <CenterBar/>
      <RightBar/>
    </div>
  );
}

export default App;
