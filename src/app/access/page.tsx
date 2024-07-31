"use client"

import React, { useRef, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image'
import Link from "next/link";
import { FaBox, FaUserCog, FaChartBar, FaCog, FaUser, FaPlug, FaChartLine } from 'react-icons/fa';
import { FaAutoprefixer } from "react-icons/fa6";

export default function Page() {
    const slideRef = useRef<HTMLDivElement>(null);

    // Crear las flechas como componentes con funcionalidad de navegación
    const handlePrevClick = () => {
        if (slideRef.current) {
            slideRef.current.scrollLeft -= slideRef.current.offsetWidth;
        }
    };

    const handleNextClick = () => {
        if (slideRef.current) {
            slideRef.current.scrollLeft += slideRef.current.offsetWidth;
        }
    };
    const controls = useAnimation();
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
        controls.start({ rotate: 360 });
    };

    const handleMouseLeave = () => {
        setHover(false);
        controls.start({ rotate: 0 });
    };
    return (

        <div className=" min-h-screen flex flex-col bg-gradient-to-b from-[#B8D0FF] via-[#85AEFF] to-[#03427D] ">

            <div className='flex justify-between items-center px-4 py-4 sm:px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-14 h-auto text-black'>
                <nav
                    className={`flex justify-between w-full content-center items-center`}>

                    <h1
                        className='m-1 ml-4 sm:ml-6 md:ml-8 lg:ml-10 order-first font-bold font-sans sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-shadow-xl'>
                        <a href="/">MediTracker</a>
                    </h1>
                    <div
                        className={`flex items-center space-x-4 ml-4 m-1 mr-4 sm:mr-6 md:mr-8 lg:mr-10`}>
                        <Link
                            href={"/access"}
                            className='p-1 pl-5 pr-5 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'
                        >
                            Usuario
                        </Link>
                        <Link
                            href={"/api/auth/register"}
                            className='p-1 pl-5 pr-5 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'
                        >
                            Equipo
                        </Link>
                    </div>
                </nav>
            </div>

            <section
                className='bg-white m-9 rounded-xl shadow-2xl p-4 pt-3 pb-6 text-black flex flex-col-reverse lg:flex-row justify-between items-center w-auto h-auto py-20 sm:px-4 md:px-8 lg:px-12 xl:px-14 2xl:px-20'>

                <motion.div
                    initial={{ opacity: 0, x: -50 }} // Comienza desde la izquierda
                    animate={{ opacity: 1, x: 0 }} // Termina en su posición final
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="py-16 px-4 md:px-8 lg:px-16"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Bienvenido a Meditracker</h2>
                        <p className="text-lg text-gray-600">
                            Un sistema completo para la gestión eficiente de usuarios y equipos, con autenticación segura y fácil integración con tecnologías modernas.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }} // Comienza desde la izquierda
                    animate={{ opacity: 1, x: 0 }} // Termina en su posición final
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2 md:p-8 mt-10 sm:mt-1 flex justify-center align-middle lg:order-2 mb-10 lg:mb-0"
                >
                    <Image
                        className='max-w-full h-auto'
                        src="/logoMediTracker.png"
                        alt='logo MediTracker'
                        width={530}
                        height={530}
                    />
                </motion.div>
            </section>

            <div className=" py-16 px-4 md:px-8 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Servicios del Sistema</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-lg shadow-lg">
                            <FaBox className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Gestión de Equipos Medicos</h3>
                            <p className="text-gray-600">Administra y controla los equipos médicos desde una plataforma centralizada.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-lg shadow-lg">
                            <FaUserCog className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Gestión de Usuarios</h3>
                            <p className="text-gray-600">Configura y gestiona perfiles de usuario de forma sencilla y eficiente.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-lg shadow-lg">
                            <FaChartBar className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Reportes Detallados</h3>
                            <p className="text-gray-600">Visualiza reportes detallados para un análisis completo de los datos.</p>
                        </div></motion.div>
                </div>
            </div>

            <section className="py-20 m-20 px-4 md:px-8 lg:px-16 bg-white rounded-lg ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
                    <p className="text-lg text-gray-600">Encuentra respuestas a las preguntas más comunes sobre nuestro sistema.</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <details className="mb-4">
                        <summary className="text-xl font-semibold cursor-pointer">¿Cómo puedo visualizar el Reporte de Equipos?</summary>
                        <p className="text-gray-600 mt-2">Dirígete a la barra de navegación. Allí verás dos opciones: "Usuarios" y "Equipos". Haz clic en "Equipos" para desplegar dos opciones adicionales. Selecciona "Reporte de Equipos" para visualizar el reporte completo de los equipos.
                        </p>
                    </details>
                    <details className="mb-4">
                        <summary className="text-xl font-semibold cursor-pointer">¿Cómo registro un nuevo equipo?</summary>
                        <p className="text-gray-600 mt-2">Para registrar un nuevo equipo, ve a la barra de navegación.
                            Selecciona la opción "Equipos". Luego, elige "Registrar un Equipo". Completa el formulario con los detalles del equipo y haz clic en "Registrar Equipo" para finalizar el registro.
                        </p>
                    </details>
                    <details className="mb-4">
                        <summary className="text-xl font-semibold cursor-pointer">¿Cómo cambio mi información personal?</summary>
                        <p className="text-gray-600 mt-2">Para cambiar tu información personal, ve a tu perfil. Allí encontrarás tu información personal. Actualiza los campos necesarios y guarda los cambios para que se apliquen.</p>
                    </details>
                    <details className="mb-4">
                        <summary className="text-xl font-semibold cursor-pointer">¿Cómo visualizo el Reporte de Usuarios?</summary>
                        <p className="text-gray-600 mt-2">Para visualizar el Reporte de Usuarios, necesitas tener los permisos necesarios asignados a tu cuenta. Si no ves la opción "Reporte de Usuarios" en la sección "Usuarios", es posible que tu cuenta no tenga los permisos adecuados. 
                        Contacta con los administradores del sistema para solicitar acceso o verificar tus permisos. Una vez que tengas los permisos necesarios, podrás acceder al reporte desde la barra de navegación seleccionando "Usuarios" y luego "Reporte de Usuarios".</p>
                    </details>
                </div>
                <section >
                    <form className="max-w-lg mx-auto">
                        <div className="flex flex-col space-y-4">
                            <textarea
                                placeholder="Comentario"
                                className="p-3 border border-gray-300 rounded-lg"
                                rows={4}
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </section>

            </section>

            <section className="py-12">

                <div className="text-center mb-12">
                    <h2 className="text-white text-3xl font-bold">Descargas y Recursos</h2>
                    <p className="text-lg text-white">Accede a guías, manuales y otros recursos útiles para aprovechar al máximo MediTracker.</p>
                </div>
                <div className="flex flex-wrap justify-around">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 mb-6">
                            <h3 className="text-xl font-semibold mb-4">Guía de Inicio Rápido</h3>
                            <a href="/manual-usuario.pdf" className="text-blue-500"
                            download="manual-usuario.pdf">Descargar PDF</a>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-4 mb-6">
                            <h3 className="text-xl font-semibold mb-4">Manual del Usuario</h3>
                            <a href="/manual-usuario.pdf" className="text-blue-500"
                            download="manual-usuario.pdf">Descargar PDF</a>
                        </div>
                    </motion.div>
                </div>
            </section>
            <div className="mt-20 md:px-8 lg:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-white text-3xl font-bold mb-4">Tecnologías Utilizadas</h2>
                    <p className="text-lg text-white">Este sistema está construido utilizando tecnologías modernas como React y Next.js, con autenticación segura mediante OAuth.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" className="w-12 h-12" />
                        <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt="Next.js" className="w-12 h-12" />
                        <img src="https://next-auth.js.org/img/logo/logo-sm.png" alt="OAuth" className="w-12 h-12" />
                    </div>
                </div>
            </div>
            <div className='text-white py-2 text-center'>
                <footer className='flex flex-col space-y-8'>
                    <div className='text-center'>
                        <Link
                            href={"/CodersTeam"}
                            className='text-lg font-semibold'
                        >
                            3CodersTeam#
                        </Link>
                    </div>
                    <div className='flex justify-between font-semibold px-6 flex-col lg:flex-row sm: space-y-4'>
                        <div className='flex space-x-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>

                            <p>Let’s chat</p>
                        </div>
                        <div className='flex space-x-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <p>3CodersTeam@Pinfra.com</p>
                        </div>
                    </div>
                    <p className="text-sm sm:text-base">© 2024 MediTracker. Todos los derechos reservados.</p>
                </footer>
            </div>
        </div>
    );
}
