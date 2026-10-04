import React from 'react';import{createRoot}from'react-dom/client';import'./style.css';import App from'./App';import{registerPwa}from'./pwa';
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
if(import.meta.env.PROD)registerPwa(()=>document.dispatchEvent(new Event('offline-ready')),apply=>document.dispatchEvent(new CustomEvent('update-ready',{detail:apply}))).catch(console.error);
