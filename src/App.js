import './App.css';
import { DashBoardMy } from './components/dashboard';
import Init from './components/init';


function App() {

   Init(); // Registra la app en firebase

   return  <div className='App'>
      <DashBoardMy/>
   </div>
}

export default App;