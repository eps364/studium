import { NextPage } from 'next';
import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

const FormUser: NextPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Usuários
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Sobrenome "
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nick_name"
                label="Apelido "
                name="nick_name"
                autoComplete="nick_name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cpf"
                label="CPF "
                name="cpf"
                autoComplete="cpf"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dob"
                label="Data de Nascimento "
                name="dob"
                autoComplete="dob"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="departamentId"
                label="Departamento"
                name="departamentId"
                autoComplete="departamentId"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email preferencial"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="conf_password"
                label="Confirmar Senha"
                type="password"
                id="conf_password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Li e aceito os termos de uso."
              />
              <Link href="/">(Termo de uso)</Link>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="button">
                Já possui conta, clique aqui!
              </Link>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="button">
                Voltar ao inicio
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};
export default FormUser;
