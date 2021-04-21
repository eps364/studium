import { NextPage } from 'next';
import Container from '@material-ui/core/Container';
import Footer from '../Footer';
import Header from '../Header';


const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Container maxWidth="xs">
          {children}
        </Container>
        <Footer />
      </Container>
    </>
  );
};
export default Layout;
