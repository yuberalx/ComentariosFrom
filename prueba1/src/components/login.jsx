import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { GoogleLogin } from 'react-google-login'
import Coment from './coment';

const clientId = "886247322127-bnqtlmgjhh5aga0mohkmfolvevhi09op.apps.googleusercontent.com"


function Login() {

    const [Datos, setDatos] = useState()
    const onSubmit = (data) => {
        console.log(localStorage.getItem('nombre'))
        if(localStorage.getItem('nombre')){
            setDatos(data.Mensaje)
            // console.log(data.Mensaje)
        }else{
            alert('llenee, datos')
        }
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSuccess = (res) => {
        console.log("Se logueo correctamente: ", res.profileObj)
        // Ejemplo:
        localStorage.setItem('nombre', JSON.stringify(res.ñ.name));
        localStorage.setItem('correo', JSON.stringify(res.profileObj.email));
        localStorage.setItem('imagen', JSON.stringify(res.profileObj.imageUrl));
        return res.profileObj.name

    }
    const onFailure = (res) => {
        console.log("Se logueo maaaaaaaaaaal: ", res)
    }
    return (
        <div>
            <form
                style={{ position: "relative" }}
                className="FormContact"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="Colx2">
                    <div className="Col-1">
                        <input
                            placeholder="Nombre"
                            {...register("Nombre", {
                                required: "Nombre requerido",
                                pattern: {
                                    value: /^[a-z\s]+$/i,
                                    message: "El nombre sólo puede contener letras",
                                },
                            })}
                        />
                        {errors.Nombre && <span>{errors.Nombre.message}</span>}
                    </div>
                </div>

                <div className="Colx2">
                    <div className="Col-1">
                        <input
                            placeholder="Correo Electronico"
                            {...register("Email", {
                                required: "El correo es requerido",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "correo electrónico no válido",
                                },
                            })}
                        />
                        {errors.Email && <span>{errors.Email.message}</span>}
                    </div>
                </div>

                <div className="Colx1">
                    <textarea
                        placeholder="Mensaje"
                        name="mensaje"
                        cols="5"
                        rows="5"
                        {...register("Mensaje", {
                            required: "No olvides incluir un mensaje",
                            minLength: {

                                message: "El mensaje debe tener al menos 30 caracteres",
                            },
                        })}
                    />
                    {errors.Mensaje && <span>{errors.Mensaje.message}</span>}
                </div>

                <div className="Colx1">
                    <input type="submit" />
                </div>
            </form>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
         
                        {Datos && (<Coment comentario ={Datos}/>)}
         {/* <Coment comentario={Datos}
            /> */}

        </div>
    
    )
}

export default Login;