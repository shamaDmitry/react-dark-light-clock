import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Preloader from './components/Preloader';
const App = React.lazy(() => import("./App.jsx"));
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Preloader className="m-auto text-dark h-screen w-16" />}>
    <App />
  </Suspense>
);