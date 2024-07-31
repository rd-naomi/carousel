"use client"

import React, { useRef, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image'
import Link from "next/link";
import QuickAccessCard from "./components/QuickAccessCard";
import { FaBox, FaUserCog, FaChartBar, FaCog, FaUser } from 'react-icons/fa';

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

    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#B8D0FF] via-[#85AEFF] to-[#03427D] ">

      <div
        className='flex justify-between items-center px-4 py-4 sm:px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-14 h-auto text-black'>
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
              className='no-underline text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:underline hover:rounded-xl hover:bg-gray-300 hover:p-1 hover:pl-3 hover:pr-3'
            >
              Log In
            </Link>
            <Link
              href={"/api/auth/register"}
              className='p-1 pl-5 pr-5 rounded-xl bg-blue-400 hover:bg-blue-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Comienza desde arriba
        animate={{ opacity: 1, x: 0 }} // Termina en su posición final
        transition={{ duration: 1, ease: "easeOut" }}

      >
        <section
          className='p-4 pt-3 pb-6 text-black flex flex-col-reverse lg:flex-row justify-between items-center w-auto h-auto py-20 sm:px-4 md:px-8 lg:px-12 xl:px-14 2xl:px-20'>

          <div
            className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-8 sm:space-y-16 lg:space-y-32 pl-0 lg:pl-20'>
            <h1
              className='font-serif font-extrabold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl '>
              Transformando tu vida con tecnología
            </h1>
            <p
              className='font-playfair font-normal italic sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left'>
              Simplicidad, Innovación y Facilidad En Cada Paso
            </p>

            < div className="flex flex-col lg:flex-row items-center relative w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-4">
              <div className='relative lg:w-80'>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`custom-input border-solid border-black border lg:w-80 h-12 px-4 pt-6 pb-2 block rounded-md bg-gray-100 text-black outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500`} />
              </div>
              <button
                className='flex flex-row items-center border-solid rounded-md bg-blue-400 hover:bg-blue-800 px-4 h-10'
              >
                Ingresar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="w-full md:w-1/2  md:p-8 mt-10  sm:mt-1 flex justify-center align-middle lg:order-2 mb-10 lg:mb-0">
            <Image
              className='max-w-full h-auto'
              src={"/logoMediTracker.png"}
              alt='logo MediTracker'
              width={530}
              height={530}>
            </Image>
          </div>
        </section> </motion.div>

      <div className="rounded-xl">
        <div >
          <Carousel
            className="rounded-xl"
            autoplay
            autoplayDelay={3000}
            transition={{ duration: 2 }}
            loop
            placeholder={<div className="text-center text-gray-500">Cargando...</div>}
            onPointerEnterCapture={handlePrevClick}
            onPointerLeaveCapture={handleNextClick}
            ref={slideRef}

          >
            <section
              className='flex flex-col lg:flex-row justify-between m-0 w-auto h-auto p-4 pt-3 pb-6 text-black items-center py-16 lg:py-20 sm:px-4 md:px-8 xl:px-14 2xl:px-20  '
            >
              <div
                className="mx-5 mt-10 lg:mx-0 max-w-4xl flex justify-center items-center text-center">
                <div
                  className='space-y-4 ml-8'>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                    Gestione Perfiles con Facilidad
                  </h2>
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    Cada miembro puede acceder a las herramientas necesarias para desempeñar su labor óptimamente.
                  </p>
                </div>
              </div>

              <div className='w-full md:w-1/2  md:p-8 mt-10  sm:mt-1 flex justify-center align-middle lg:order-2 mb-10 lg:mb-0'>
                <Image
                  className='mx-60 mt-10 px-11'
                  src={"/ajustesdeperfil.png"}
                  alt='item'
                  width={450}
                  height={450}></Image>
              </div>
            </section>

            <section
              className='flex flex-col lg:flex-row-reverse justify-between m-0 w-auto h-auto p-4 pt-3 pb-6 text-black items-center py-16 lg:py-20 sm:px-4 md:px-8 xl:px-14 2xl:px-20  '
            >
              <div
                className="mx-5 mt-10 lg:mx-0 max-w-4xl flex justify-center items-center text-center">
                <div
                  className='space-y-4 mr-8'>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                    Beneficios de costo
                  </h2>
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    Identifique y elimine gastos innecesarios en el mantenimiento y adquisición de equipamientos médicos.
                  </p>
                </div>
              </div>

              <div
                className='w-full md:w-1/2  md:p-8 mt-10  sm:mt-1 flex justify-center align-middle lg:order-2 mb-10 lg:mb-0'>
                <Image
                  className='mx-60 px-11'
                  src={"/reduccion.png"}
                  alt='item'
                  width={400}
                  height={400}></Image>
              </div>
            </section>

            <section
              className='flex flex-col lg:flex-row justify-between m-0 w-auto h-auto p-4 pt-3 pb-6 text-black items-center py-16 lg:py-20 sm:px-4 md:px-8 xl:px-14 2xl:px-20 '
            >
              <div
                className="mx-5 mt-10 lg:mx-0 max-w-4xl flex justify-center items-center text-center">
                <div
                  className='space-y-4 ml-8'>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                    Monitoreo en Tiempo Real
                  </h2>
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    Monitoree el estado de sus equipos en tiempo real, permitiendo una respuesta rápida y eficaz a cualquier eventualidad.
                  </p>
                </div>
              </div>

              <div className='w-full md:w-1/2  md:p-8 mt-10  sm:mt-1 flex justify-center align-middle lg:order-2 mb-10 lg:mb-0'>
                <Image
                  className='mx-60 px-11'
                  src={"/monitoreo.png"}
                  alt='item'
                  width={450}
                  height={450}></Image>
              </div>
            </section>

            <section
              className='flex flex-col lg:flex-row-reverse justify-between m-0 w-auto h-auto p-4 pt-3 pb-6 text-black items-center py-16 lg:py-20 sm:px-4 md:px-8 xl:px-14 2xl:px-20  '
            >
              <div
                className="mx-5 mt-10 lg:mx-0 max-w-4xl flex justify-center items-center text-center">
                <div
                  className='space-y-4 mr-8'>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                    Historial y Mantenimiento
                  </h2>
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    Mantenga un historial detallado del mantenimiento de sus equipos, garantizando la seguridad y funcionalidad constante.
                  </p>
                </div>
              </div>
              <div
                className='w-full md:w-1/2  md:p-8 mt-10  sm:mt-1 flex justify-center align-middle lg:order-2 mb-10 lg:mb-0'>
                <Image
                  className='mx-60 mt-10 px-11'
                  src={"/historial.png"}
                  alt='item'
                  width={400}
                  height={400}>
                </Image>
              </div>
            </section>

            <section
              className='flex flex-col lg:flex-row justify-between m-0 w-auto h-auto p-4 pt-3 pb-6 text-black items-center py-16 lg:py-20 sm:px-4 md:px-8 xl:px-14 2xl:px-20  '
            >
              <div
                className="mx-5 mt-10 lg:mx-0 max-w-4xl flex justify-center items-center text-center">
                <div
                  className='space-y-4 ml-8'>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
                    Gestione Perfiles con Facilidad
                  </h2>
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    Cada miembro puede acceder a las herramientas necesarias para desempeñar su labor óptimamente.
                  </p>
                </div>
              </div>

              <div className='w-full md:w-1/2  md:p-8 mt-10  sm:mt-1 flex justify-center align-middle lg:order-2 mb-10 lg:mb-0'>
                <Image
                  className='mx-60 mt-10 px-11'
                  src={"/ajustesdeperfil.png"}
                  alt='item'
                  width={450}
                  height={450}></Image>
              </div>
            </section>

          </Carousel>
        </div>
      </div>

      <div className="shadow-2xl bg-white m-9 rounded-xl shadow-lg py-16 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Características Clave del Sistema</h2>
          <p className="text-lg text-gray-600">Descubre lo que hace a MediTracker una solución única.</p>
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
      <section
        className='flex flex-col-reverse justify-between m-0 w-auto h-auto p-4 pt-3 pb-6 text-black lg:flex-row items-center py-16 lg:py-20 sm:px-4 md:px-8 lg:px-12 xl:px-14 2xl:px-20'
      >
        <div
          className="text-black mx-5 lg:mx-0 max-w-4xl flex justify-center items-center text-center lg:text-start ">
          <div
            className='space-y-10 mr-0 lg:mr-8'>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic">
              Asegure la calidad de su servicio con equipamientos bien gestionados y siempre en óptimas condiciones.
            </p>
            <div
              className="flex flex-col lg:flex-row items-center ml-4 relative w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-4">
              <div
                className='relative lg:w-80'>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`custom-input border-solid border-black border lg:w-80 h-12 px-4 pt-6 pb-2 block rounded-md bg-gray-100 text-black outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <button
                className='flex flex-row items-center border-solid rounded-md bg-blue-700 hover:bg-blue-800 px-4 h-10'>
                Ingresar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2  md:p-8 mt-10  sm:mt-1 flex justify-center align-middle lg:order-2 mb-10 lg:mb-0">
          <Image
            className='max-w-full h-auto'
            src={"/logoMediTracker.png"}
            alt='logo MediTracker'
            width={450}
            height={450}>
          </Image>
        </div>
      </section>


      <section className="py-20 m-20 px-4 md:px-8 lg:px-16 bg-white rounded-lg ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600">Encuentra respuestas a las preguntas más comunes sobre nuestro sistema.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <details className="mb-4">
            <summary className="text-xl font-semibold cursor-pointer">¿Cómo puedo iniciar sesión en el sistema?</summary>
            <p className="text-gray-600 mt-2">Puedes iniciar sesión utilizando tu cuenta de Google o mediante correo electronico y contraseña.</p>
          </details>
          <details className="mb-4">
            <summary className="text-xl font-semibold cursor-pointer">¿Cómo puedo registrarme en el sistema?</summary>
            <p className="text-gray-600 mt-2">Puedes registrarte dando click en 'Sing up' al inicio de la pagina.</p>
          </details>
          <details className="mb-4">
            <summary className="text-xl font-semibold cursor-pointer">¿Qué tipo de reportes se pueden visualizar?</summary>
            <p className="text-gray-600 mt-2">Puedes ver reportes sobre el estado de usuarios y equipos.</p>
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

      <section className="rounded-lg shadow-2xl bg-white  py-10 md:px-8 lg:px-16 text-center ">
        <h2 className="text-3xl font-bold mb-4">¿Listo para Comenzar?</h2>
        <p className="text-lg mb-8">Únete a nosotros y transforma la gestión de usuarios y equipos en tu organización.</p>
        <a href="/" className="bg-blue-700 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-800">Regístrate Ahora</a>
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
            </Link>          </div>
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
