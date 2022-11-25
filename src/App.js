import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route/router';
import { Toaster } from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';



function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
