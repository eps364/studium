import { NextPage } from 'next';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const Header: NextPage = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">
          {process.env.NEXT_PUBLIC_NAME}
        </Typography>
      </Toolbar>
    </AppBar>

  );
};
export default Header;
