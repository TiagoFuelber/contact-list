import { createPortal } from 'react-dom';
import MuiSnackBar from '@mui/material/Snackbar';
import { useSnackBarContext } from '../../hooks/useSnackBar';
import { Alert } from '@mui/material';

export const SnackBar = () => {
  const { snackBar, isOpen, closeSnackBar } = useSnackBarContext();
  if (isOpen && snackBar?.content) {
    return createPortal(
      <MuiSnackBar
        open={isOpen}
        onClose={closeSnackBar}
        autoHideDuration={3000}
      >
        <Alert severity={snackBar.severity}>{snackBar.content}</Alert>
      </MuiSnackBar>,
      document.body
    );
  }
  return null;
};
