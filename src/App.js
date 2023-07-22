import './App.css';
import { SidebarNav } from './Components/Sidebar/SidebarNav';
import { Dashboard } from './Components/Dashboard/dashboard';

function App() {
  return (
    <div className='w-full flex flex-row'>
      <div className='w-[360px]'>
        <SidebarNav />
      </div>
      <div className='w-full bg-slate-200'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
