import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
}));
