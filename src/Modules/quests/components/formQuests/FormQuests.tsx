/* eslint-disable @typescript-eslint/no-explicit-any */
import { Add } from '@mui/icons-material'
import { Button, FormLabel, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

export const FormQuests = () => {
  const [options, setOptions] = React.useState<string[]>([])
  const { register, handleSubmit, getValues, reset } = useForm()

  const onSubmit = (data: any) => {
    console.log('Form the quest')
    console.log(data)
  }

  console.log(options)
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <h1>Administrador de preguntas</h1>
      </Grid>
      <Grid item xs={12} md={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <FormLabel>Escriba la pregunta</FormLabel>
              <TextField variant='outlined' fullWidth {...register('description')} />
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <FormLabel>Agregue las opciones de las preguntas</FormLabel>
                  <TextField
                    variant='outlined'
                    fullWidth
                    {...register('options')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        setOptions([...options, getValues('options')])
                        reset({
                          options: '',
                        })
                      }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={() => {
                              setOptions([...options, getValues('options')])
                              reset({
                                options: '',
                              })
                            }}
                          >
                            <Add />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  {options.map((option, index) => (
                    <p key={index}>{option}</p>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button variant={'contained'} fullWidth>
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
