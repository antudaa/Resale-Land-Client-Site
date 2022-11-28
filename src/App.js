import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';
import router from './Routes/Routes/router';



function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
