import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/routes/routes';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="" data-theme="corporate">
     <RouterProvider router={routes}>
    
     </RouterProvider>
    </div>
  );
}

export default App;
