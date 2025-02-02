import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Servizi from './components/Servizi/Servizi.jsx';
import Lavori from './components/Lavori/Lavori.jsx';
import Canvas from "./components/Canvas/Canvas.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Canvas></Canvas>
                <Home></Home>
                <ScrollRestoration></ScrollRestoration>
            </>
        )
    },

    {
        path: "/servizi",
        element: (
            <>
                <Canvas></Canvas>
                <Servizi></Servizi>
                <ScrollRestoration></ScrollRestoration>
            </>
        )
    },

    {
        path: "/lavori",
        element: (
            <>
                <Canvas></Canvas>
                <Lavori></Lavori>
                <ScrollRestoration></ScrollRestoration>
            </>
        )
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)