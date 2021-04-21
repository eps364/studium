import { NextPage } from 'next';
import { Typography, Container } from '@material-ui/core';

const Footer: NextPage = () => {
  return (
    <Container>
      <hr />
      <Typography variant="h6" color="initial" align="center">
        Studium - 2021
      </Typography>
    </Container>
  );
};
export default Footer;
