import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';
// import Home from'../src/pages/Home'
// import './App.css'
// import Register from './pages/Register';

// const App: React.FC = () => {
//     return (
//       <RouterProvider router={routerConfig}></RouterProvider>
//     );
// };

// export default App;

function App() {
  // const title = "My React App"; // 或者通过 props 传入

  return (
    <div className="App">
        <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  );
}

export default App;