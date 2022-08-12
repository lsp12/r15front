import { Box, Button, Card, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            boxShadow: 5,
            padding: '2em',
          }}
        >
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={12}>
              <Box
                textAlign={'center'}
                sx={{
                  borderBlockEnd: '1px solid #ccc',
                  marginBottom: '1em',
                }}
              >
                <Typography variant='h4'>Iniciar Sesión</Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField fullWidth label='Usuario' {...register('usuario')} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label='contraseña'
                      type={'password'}
                      {...register('contraseña')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type='submit' variant='contained' color='primary' fullWidth>
                      Ingresar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}
