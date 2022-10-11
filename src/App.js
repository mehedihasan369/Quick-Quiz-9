import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './LayOut/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Analytics from './Components/Analytics/Analytics';
import Quizes from './Components/Quizes/Quizes';





function App() {  
    const router = createBrowserRouter([
      {path: '/', element: <Header></Header>,
      children: [
        { path:'/' , element: <Home></Home>},
        { path:'home' ,
        loader:() => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Home></Home>},

        {path:'blog' , element: <Blog></Blog>},
        {path: 'statistics' , element: <Analytics></Analytics> }, 
        
        {
          path: '/quiz/:id' ,
          loader: async ({params}) => {
            return fetch('https://openapi.programming-hero.com/api/quiz/${id}')
          },
          element: <Quizes></Quizes>
        }
        
      ]
    },

     { path: '*', element: <div>This route not found: 404</div> }
      ])
  return (
    <div className="App">
       
    <RouterProvider router={router}></RouterProvider>
   
    </div>
  );
}

export default App;
