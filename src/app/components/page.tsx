"use client"
import * as React from 'react';
import { ProveedorModel, ModeloModel, MarcaModel, UbicacionModel, TipoEquipoModel, PaisModel } from '@/app/types';
import { fetchPaises, fetchModelos, fetchMarcas, fetchProveedores, fetchUbicaciones, fetchTiposEquipos } from '@/app/services/api';
import { useState, useEffect } from 'react';
import { verificarIdInterna, verificarNumeroDeSerie } from '@/app/utils/validation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { RiArrowLeftLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { HiOutlineDownload } from "react-icons/hi";

const EquipoForm = () => {
  const router = useRouter();
  //estados para los campos del formulario
  const [nombreEquipo, setNombreEquipo] = useState<string>("");
  const [idetificacionInterna, setIdInterna] = useState<string>("");
  const [fechaAdquisicion, setFechaAdq] = useState<Date | null>(null);
  const [numeroSerie, setNumSerie] = useState<number>();
  const [cantMesesGarantia, setGarMeses] = useState<number>();

  //estados para la seleccion de opciones
  const [idPais, setPaises] = useState<PaisModel[]>([]);
  const [selectedPaisId, setSelectedPaisId] = useState<number>(0);

  const [idTipoEquipo, setTiposEquipos] = useState<TipoEquipoModel[]>([]);
  const [selectedTipoEquipoId, setSelectedTipoEquipoId] = useState<number>(0);

  const [idProveedor, setProveedores] = useState<ProveedorModel[]>([]);
  const [selectedProveedorId, setSelectedProveedorId] = useState<number>(0);

  const [idModelo, setModelos] = useState<ModeloModel[]>([]);
  const [selectedModeloId, setSelectedModeloId] = useState<number>(0);

  const [idMarca, setMarcas] = useState<MarcaModel[]>([]);
  const [selectedMarcaId, setSelectedMarcaId] = useState<number>(0);

  const [idUbicacion, setUbicaciones] = useState<UbicacionModel[]>([]);
  const [selectedUbicacionId, setSelectedUbicacionId] = useState<number>(0);

  //estado para la imagen del equipo
  const [imagenEquipo, setImagenEquipo] = useState<string | null>(null);

  //estados para manejar errores de validaciop
  const [errorIdInterna, setErrorIdInterna] = useState<string | null>(null)
  const [errorNumeroSerie, setErrorNumeroSerie] = useState<string | null>(null)
  const [errorNombre, setErrorNombre] = useState<string | null>(null)
  const [errorGarantia, setErrorGarantia] = useState<string | null>(null)
  const [errorTipoEquipo, setErrorTipoEquipo] = useState<string | null>(null)
  const [errorModelo, setErrorModelo] = useState<string | null>(null)
  const [errorMarca, setErrorMarca] = useState<string | null>(null)
  const [errorProveedor, setErrorProveedor] = useState<string | null>(null)
  const [errorPais, setErrorPais] = useState<string | null>(null)
  const [errorUbicacion, setErrorUbicacion] = useState<string | null>(null)

  const [showBanner, setShowBanner] = useState<boolean>(false); // un estado para mostrar el banner


  // Llena los selects
  useEffect(() => {
    const getPaises = async () => {
      const paises = await fetchPaises();
      setPaises(paises);
    };

    getPaises();
  }, []);

  useEffect(() => {
    const getModelos = async () => {
      const modelos = await fetchModelos();
      setModelos(modelos);
    };

    getModelos();
  }, []);

  useEffect(() => {
    const getMarcas = async () => {
      const marcas = await fetchMarcas();
      setMarcas(marcas);
    };

    getMarcas();
  }, []);

  useEffect(() => {
    const getProveedores = async () => {
      const proveedores = await fetchProveedores();
      setProveedores(proveedores);
    };

    getProveedores();
  }, []);

  useEffect(() => {
    const getUbicaciones = async () => {
      const ubicaciones = await fetchUbicaciones();
      setUbicaciones(ubicaciones);
    };

    getUbicaciones();
  }, []);

  useEffect(() => {
    const getTiposEquipos = async () => {
      const te = await fetchTiposEquipos();
      setTiposEquipos(te);
    };

    getTiposEquipos();
  }, []);

  //funcion q maneja el cambio en el campo de fecha de adquisicion
  const handleFechaAdqChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value ? new Date(e.target.value) : null; // obtiene el valor actual del campo y lo convierte a date
    setFechaAdq(selectedDate);
  };

  //funcion para manejar el cambio en el campo de imagen
  const handleImagenEquipoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImagenEquipo(reader.result); // guarfda la imagen completa en Base64

        }
      };
      reader.onerror = error => {
        console.log("ERROR:", error);
      };
    }
  };

  const validar = async () => {//funcion para validar el formulario antes de agregar un equipo
    let formIsValid = true;
    const regex = /^[a-zA-Z0-9\s]+$/

    //const regexMeses = /^\d{1,2}$/

    if (!cantMesesGarantia) {
      setErrorGarantia("Debes ingresar los meses de garantía del equipo");
      formIsValid = false;
    } else {
      setErrorGarantia(null);
    }

    if (selectedUbicacionId === 0) {
      setErrorUbicacion("Debes seleccionar una Ubicación");
      formIsValid = false;
    } else {
      setErrorUbicacion(null);
    }

    if (selectedProveedorId === 0) {
      setErrorProveedor("Debes seleccionar un Proveedor");
      formIsValid = false;
    } else {
      setErrorProveedor(null);
    }

    if (selectedPaisId === 0) {
      setErrorPais("Debes seleccionar un País de Origen");
      formIsValid = false;
    } else {
      setErrorPais(null);
    }

    if (selectedModeloId === 0) {
      setErrorModelo("Debes seleccionar un Modelo");
      formIsValid = false;
    } else {
      setErrorModelo(null);
    }

    if (selectedMarcaId === 0) {
      setErrorMarca("Debes seleccionar una Marca");
      formIsValid = false;
    } else {
      setErrorMarca(null);
    }

    if (selectedTipoEquipoId === 0) {
      setErrorTipoEquipo("Debes seleccionar un Tipo de Equipo");
      formIsValid = false;
    } else {
      setErrorTipoEquipo(null);
    }

    if (!nombreEquipo) {
      setErrorNombre("Debes ingresar un nombre de equipo");
      formIsValid = false;
    } else if (!regex.test(nombreEquipo)) {
      setErrorNombre("El nombre del equipo no puede contener signos especiales");
      formIsValid = false;
    } else {
      setErrorNombre(null);
    }

    const idInternaExiste = await verificarIdInterna(idetificacionInterna);
    if (idInternaExiste) {
      setErrorIdInterna("El ID Interno ya existe. Por favor, ingresa uno diferente.");
      formIsValid = false;
    } else if (!idetificacionInterna) {
      setErrorIdInterna("Debes ingresar el ID interno del equipo");
      formIsValid = false;
    } else if (!regex.test(idetificacionInterna)) {
      setErrorIdInterna("El ID interno no puede contener signos especiales");
      formIsValid = false;
    } else {
      setErrorIdInterna(null);
    }

    const numeroSerieExiste = await verificarNumeroDeSerie(numeroSerie);
    if (numeroSerieExiste) {
      setErrorNumeroSerie("El Número de Serie ya existe. Por favor, ingresa uno diferente.");
      formIsValid = false;
    } else if (!numeroSerie) {
      setErrorNumeroSerie("Debes ingresar un número de serie");
      formIsValid = false;
    } else {
      setErrorNumeroSerie(null);
    }

    return formIsValid;
  };

  const addEquipo = async (e: React.FormEvent<HTMLFormElement>) => { //Ingresar equipo
    e.preventDefault();

    const formIsValid = await validar();//valida antes de ingresar

    if (formIsValid) {

      const formData = {
        nombreEquipo,
        idetificacionInterna,
        fechaAdquisicion,
        numeroSerie,
        cantMesesGarantia,
        idPais: selectedPaisId,
        idTipoEquipo: selectedTipoEquipoId,
        idProveedor: selectedProveedorId,
        idModelo: selectedModeloId,
        idMarca: selectedMarcaId,
        idUbicacion: selectedUbicacionId,
        imagen: imagenEquipo ? imagenEquipo.split(',')[1] : null, // solo la parte Base64hgf
      };
      const add = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/equipos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (add.ok) {
        setShowBanner(true); // muestra el banner al ingresar el equipo
        setTimeout(() => setShowBanner(false), 8000); // se ocultar el banner despus de 8 sg
      }
      //limpia los campos despues del envio
      setNombreEquipo("");
      setIdInterna("");
      setNumSerie(0);
      setGarMeses(0);
      setSelectedPaisId(0);
      setSelectedTipoEquipoId(0);
      setSelectedProveedorId(0);
      setSelectedModeloId(0);
      setSelectedMarcaId(0);
      setSelectedUbicacionId(0);
      setImagenEquipo(null);
    }
  };

  const handleBackClick = () => {
    router.push("/")
  }

  return (
    <div className="mx-20">
      <Button
        className='bg-white text-black my-2 text-base hover:text-white '
        onClick={handleBackClick}>
        <RiArrowLeftLine
          className="h-4 w-4 mr-2" />
        Volver
      </Button>

      <Card className='p-8 pb-20'>
        <CardHeader className='space-y-3 items-start'>
          <div className='flex flex-row-reverse justify-between items-center'>
            <CardTitle className='text-4xl font-semibold'>Registrar un Equipo</CardTitle>
            <Image src={"/electrocardiograma.png"} alt='ico' height={50} width={50} className='mr-6' />
          </div>
          <CardDescription className='text-base font-medium'>Aquí puedes agregar un nuevo equipo a nuestro sistema.</CardDescription>
        </CardHeader>
        <Separator className='border-b-2 border-black' />
        <div className="w-full bg-white p-6">
          <p className="text-zinc-700 m-4 mb-8">Por favor, proporciona la información requerida para completar el registro.</p>
          {showBanner && (
            <div
              className={`fixed bottom-4 left-4 p-4 bg-green-100 border-t-4 border-green-500 text-green-700 rounded`}
            >
              <p className="font-bold">Equipo agregado correctamente</p>
              <p className="text-sm">Puedes ver y editar el equipo en la página de Reporte de Equipos</p>
            </div>
          )}

          <form onSubmit={addEquipo} className='space-y-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-4">
              <div className='space-y-6'>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Nombre de Equipo</label>
                  <input
                    type="text"
                    name="nombre"
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={nombreEquipo}
                    onChange={(event) => setNombreEquipo(event.target.value)}
                    placeholder="Nombre de Equipo" title="Nombre Equipo"
                  />
                  {errorNombre && <p className="text-red-500 text-sm mt-1">{errorNombre}</p>}
                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Tipo de Equipo</label>
                  <select
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={selectedTipoEquipoId}
                    onChange={(event) => setSelectedTipoEquipoId(Number(event.target.value))}
                  >
                    <option value="">Seleccione un Tipo de Equipo</option>
                    {idTipoEquipo && idTipoEquipo.map((tipoEquipo) => (
                      <option key={tipoEquipo.id} value={tipoEquipo.id} title="Tipo Equipo">
                        {tipoEquipo.nombreTipo}
                      </option>
                    ))}
                  </select>
                  {errorTipoEquipo && <p className="text-red-500 text-sm mt-1">{errorTipoEquipo}</p>}
                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Modelo</label>
                  <select
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={selectedModeloId}
                    onChange={(event) => setSelectedModeloId(Number(event.target.value))}>
                    <option value="">Seleccione un Modelo</option>
                    {idModelo && idModelo.map((modelo) => (
                      <option key={modelo.id} value={modelo.id} title="Modelo">
                        {modelo.nombreModelo}
                      </option>
                    ))}
                  </select>
                  {errorModelo && <p className="text-red-500 text-sm mt-1">{errorModelo}</p>}
                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Marca</label>
                  <select
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={selectedMarcaId}
                    onChange={(event) => setSelectedMarcaId(Number(event.target.value))}>
                    <option value="">Seleccione una Marca</option>
                    {idMarca && idMarca.map((marca) => (
                      <option key={marca.id} value={marca.id} title="Marca">
                        {marca.nombre}
                      </option>
                    ))}
                  </select>
                  {errorMarca && <p className="text-red-500 text-sm mt-1">{errorMarca}</p>}
                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Número de Serie</label>
                  <input
                    type="number"
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={numeroSerie}
                    onChange={(e: any) => setNumSerie(parseInt(e.target.value))}
                    placeholder="Número de Serie" title="Numero de Serie"
                  />
                  {errorNumeroSerie && <p className="text-red-500 text-sm mt-1">{errorNumeroSerie}</p>}

                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Meses de Garantia</label>
                  <input
                    type="number"
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={cantMesesGarantia}
                    onChange={(e: any) => setGarMeses(e.target.value)}
                    placeholder="Meses de Garantia" title="Meses de garantia"
                  />
                  {errorGarantia && <p className="text-red-500 text-sm mt-1">{errorGarantia}</p>}

                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Fecha de Adquisicion</label>
                  <input
                    type="date"
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={fechaAdquisicion ? fechaAdquisicion.toISOString().split('T')[0] : ''}
                    onChange={handleFechaAdqChange}
                    placeholder="Fecha de Adquisición"
                  />
                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>País de Origen</label>
                  <select
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={selectedPaisId}
                    onChange={(event) => setSelectedPaisId(Number(event.target.value))}
                  >
                    <option value="">Seleccione un País de Origen</option>
                    {idPais.map((pais) => (
                      <option key={pais.id} value={pais.id} title="Pais de Origen del Equipo">
                        {pais.nombrePais}
                      </option>
                    ))}
                  </select>
                  {errorPais && <p className="text-red-500 text-sm mt-1">{errorPais}</p>}
                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Proveedor</label>
                  <select
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={selectedProveedorId}
                    onChange={(event) => setSelectedProveedorId(Number(event.target.value))}
                  >
                    <option value="">Seleccione un Proveedor</option>
                    {idProveedor.map((proveedor) => (
                      <option key={proveedor.id} value={proveedor.id} title="Proveedor del Equipo">
                        {proveedor.nombreProveedor}
                      </option>
                    ))}
                  </select>
                  {errorProveedor && <p className="text-red-500 text-sm mt-1">{errorProveedor}</p>}
                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Identificación Interna</label>
                  <input
                    type="text"
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={idetificacionInterna}
                    onChange={(e: any) => setIdInterna(e.target.value)}
                    placeholder="Identificación Interna"
                    title="Identificacion Interna" />
                  {errorIdInterna && <p className="text-red-500 text-sm mt-1">{errorIdInterna}</p>}

                </div>

                <div className="mb-4 space-y-2">
                  <label className='text-base text-[15px] font-medium'>Ubicación</label>
                  <select
                    className="w-full border-2 border-zinc-300 p-2 rounded-md"
                    value={selectedUbicacionId}
                    onChange={(event) => setSelectedUbicacionId(Number(event.target.value))}
                  >
                    <option value="">Seleccione una Ubicación</option>
                    {idUbicacion.map((ubicacion) => (
                      <option key={ubicacion.id} value={ubicacion.id} title="Ubicacion del equipo">
                        {ubicacion.nombreUbicacion}
                      </option>
                    ))}
                  </select>
                  {errorUbicacion && <p className="text-red-500 text-sm mt-1">{errorUbicacion}</p>}
                </div>

              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative border border-zinc-300 rounded-lg w-96 h-80 flex items-center justify-center mb-4 overflow-hidden">
                  {imagenEquipo && (
                    <Image
                      src={imagenEquipo}
                      alt="Imagen de Equipo"
                      width={10}
                      height={10}
                      className="absolute top-0 left-0 w-full h-full object-cover transition transform hover:scale-105"
                    />
                  )}
                  {!imagenEquipo && (
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                      Imagen de Equipo
                    </span>
                  )}
                </div>
                <input
                  type="file"
                  onChange={handleImagenEquipoChange}
                  className="hidden"
                  id="input-imagen-equipo"
                />
                <label
                  htmlFor="input-imagen-equipo"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-black hover:border-2 py-2 px-4 rounded-md cursor-pointer flex items-center">
                  <HiOutlineDownload className='mr-2' />
                  Seleccionar Imagen
                </label>
              </div>


            </div>
            <div className="mt-6 text-center">
              <button type="submit" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md w-96">
                Registrar Equipo
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default EquipoForm;