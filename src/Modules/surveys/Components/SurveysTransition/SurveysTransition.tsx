import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

export const SurveysTransition = () => {
  const apiFake = [
    {
      id: 1,
      title: 'Pregunta 1',
      description: 'Descripcion 1',
      type: 'text',
      options: [
        {
          id: 1,
          title: 'Opción 1',
          description: 'Opción 1',
        },
        {
          id: 2,
          title: 'Opción 2',
          description: 'Opción 2',
        },
        {
          id: 3,
          title: 'Opción 3',
          description: 'Opción 3',
        },
      ],
    },
    {
      id: 2,
      title: 'Pregunta 2',
      description: 'Descripcion 2',
      type: 'text',
      options: [
        {
          id: 4,
          title: 'Opción 1',
          description: 'Opción 1',
        },
        {
          id: 5,
          title: 'Opción 2',
          description: 'Opción 2',
        },
      ],
    },
    {
      id: 3,
      title: 'Pregunta 3',
      description: 'Descripcion 3',
      type: 'text',
      options: [
        {
          id: 6,
          title: 'Opción 1',
          description: 'Opción 1',
        },
        {
          id: 7,
          title: 'Opción 2',
          description: 'Opción 2',
        },
      ],
    },
  ]

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    console.log('entramos')
    console.log(data)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Encuesta</h1>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 5, padding: '1em' }}>
          <Grid container>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {apiFake.map((question) => (
                  <Box key={question.id}>
                    <FormControl>
                      <FormLabel>{question.title}</FormLabel>
                      <p>{question.description}</p>
                      <Box>
                        <RadioGroup aria-labelledby='demo-radio-buttons-group-label'>
                          {question.options.map((option) => {
                            return (
                              <FormControlLabel
                                key={option.title}
                                value={option.id}
                                control={<Radio />}
                                label={option.title}
                                onClick={() => {
                                  setValue(`${question.id}`, option)
                                }}
                              />
                            )
                          })}
                        </RadioGroup>
                      </Box>
                    </FormControl>
                  </Box>
                ))}
                <Button type='submit'>Enviar</Button>
              </form>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}
