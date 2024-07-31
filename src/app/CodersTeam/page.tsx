import React from 'react';

const CodersTeam = () => {
    return (
        <div className='relative h-screen'>
            <div className='relative bg-[url("/otroCodersTeam2.jpg")] bg-cover bg-center h-full flex items-center justify-center'>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute top-0 left-0 w-full text-white text-center p-4'>
                    <h1 className='text-white text 1xl font-bold'>3CodersTeam#</h1>
                </div>
                <div className='relative text-white p-8 text-center'>
                    <h2 className='text-4xl font-bold'>¡Estamos en Plena Creación!</h2>
                    <p className='mt-4 text-lg'>Estamos construyendo algo increíble.</p>
                </div>
                <footer className='absolute bottom-0 w-full text-center bg-gray-800'>
                <p className='text-sm'>© 2024 CodersTeam. Estamos trabajando para ofrecerte lo mejor.</p>
                <p className='text-sm'>3CodersTeam@Pinfra.com</p>
            </footer>
            </div>
          
        </div>

        
    );
}

export default CodersTeam;
