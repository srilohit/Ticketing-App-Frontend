import { Outlet } from 'react-router-dom';
import './App.css';
import NavHeader from './features/navbar/Navbar';

function App() {
  return (
    <div>
      <NavHeader></NavHeader>

      <div style={{marginTop : '62px'}}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
