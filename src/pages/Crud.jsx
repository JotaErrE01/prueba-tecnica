import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { actualizarUsuario, createUsers, eliminarUsuario, finalizarActualizacion, startGetUsers } from '../app/actions/crudActions';
import { TextField } from '@mui/material';

export const Crud = () => {

  const { usuarios, usuarioActual } = useSelector(state => state.crud);
  const dispatch = useDispatch();

  const [ values, setValues ] = useState({
    nombre: '',
  });

  const { nombre } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(!usuarios){
      dispatch(startGetUsers())
    }
  }, []);

  useEffect(() => {
    setValues({
      nombre: usuarioActual?.nombre || '',
    })
  }, [usuarioActual]);

  return (
    <div>
      <h1>Usuarios</h1>
      <form
        method="post"
        style={{
          display: 'flex',
          gap: '1rem',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if(usuarioActual){
            dispatch(finalizarActualizacion({ ...values, id: usuarioActual.id }));
          }else{
            dispatch(createUsers(values))
          }
        }}
      >
        <TextField id="outlined-basic" label="nombre" variant="outlined" value={nombre} name="nombre" 
          onChange={handleChange}
        />
        <Button
          variant="contained"
          type="submit"
        >{ usuarioActual ? 'Actualizar Usuario' : 'Crear Usuario' }</Button>  
      </form>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          marginTop: '2rem',
        }}
      >
        {
          usuarios &&
          usuarios.map(usuario => (
            <div
              key={usuario?.id}
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <img src={usuario?.picture?.medium || ''} alt="no Picture" />
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '2rem',
                  margin: '0 10px'
                }}
              >{usuario?.name?.first || usuario.nombre}</p>
              <Button variant="contained" color="success"
                onClick={() => {
                  dispatch(actualizarUsuario(usuario.id));
                }}
              >Actualizar</Button>
              <Button variant="contained" color="error"
                onClick={() => {
                  dispatch(eliminarUsuario(usuario.id));
                }}
              >Eliminar</Button>
            </div>
          ))
        }
      </div>


    </div>
  )
};
