import React from 'react';
import boton from './boton';
function Perfil(){
    const click = (x) =>{
        console.log(x);
    };
    return(
            <div className='padre'>
                <form>
                    <div className='Nombre'>
                        <label>Nombre </label>
                        <input placeholder='Nombre'></input>
                    </div>
                    <div className='Apellido'>
                        <label>Apellidos</label>
                        <input placeholder='Apellidos...'></input>
                    </div>
                    <div className='Contraseña'>
                        <label>Contraseña</label>
                        <input placeholder='Contraseña...'></input>
                    </div>
            
                    <div className='Botones'>
                        <boton funClick={()=>click("Editar")} text="Editar"/> 
                    </div>
                </form>
            </div>
    );
}
export default Perfil;