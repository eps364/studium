import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Post from '../components/Post';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={3}>
        <Post />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Post />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Post />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Post />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Post />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Post />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Post />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Post />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);
