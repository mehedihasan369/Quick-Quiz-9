import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyNavbar from './Components/Navbar/MyNavbar';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';



function App() {  
    const router = createBrowserRouter([
      {path: '/', element:<MyNavbar></MyNavbar>,
      children: [
        { path:'/' , element: <Home></Home>},
        { path:'home' , element: <Home></Home>},
        {path:'blog' , element: <Blog></Blog>}
        
      ]
    }
     
      ])
  return (
    <div className="App">
       
    <RouterProvider router={router}></RouterProvider>
   
    </div>
  );
}

export default App;
