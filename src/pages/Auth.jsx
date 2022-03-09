import { Alert, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { iniciarSesion } from '../app/actions/authActions';

export const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ui, auth } = useSelector(state => state);
  const { authError } = ui;
  const [values, setValuess] = useState({
    usuario: '',
    password: ''
  });

  const { usuario, password } = values;

  const handleChange = (e) => {
    setValuess({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(auth.isAuth){
      navigate('/crud');
    }
  }, [ auth ])

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <form style={{
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
      }}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(iniciarSesion(values));
        }}
      >
        <TextField id="outlined-basic" label="usuario" variant="outlined" value={usuario} name="usuario"
          onChange={handleChange}
        />
        <TextField type="password" id="outlined-basic" label="contraseña" variant="outlined" value={password} name="password"
          onChange={handleChange}
        />

        <Button
        type="submit"
        >Entrar</Button>
      </form>
      {
        authError &&
        <Alert severity="error">Error usuario a password incorrectos</Alert>
      }
    </div>
  )
};
