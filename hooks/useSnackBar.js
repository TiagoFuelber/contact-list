import { useContext } from 'react';

import { SnackBarContext } from '../context/snackbar';

export const useSnackBarContext = () => {
  const context = useContext(SnackBarContext);

  if (context === undefined) {
    throw new Error(
      'useSnackBarContext must be used within a SnackBarProvider'
    );
  }

  return context;
};
