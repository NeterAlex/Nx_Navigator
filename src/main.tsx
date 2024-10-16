import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider>
            <div className="bg-[#F3F4F6] h-full md:h-[100vh] flex flex-col items-center">
                <App/>
            </div>
        </NextUIProvider>
    </React.StrictMode>,
)
