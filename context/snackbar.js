import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from 'react';

export const SnackBarContext = createContext(undefined);

export const SnackBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(undefined);
  let timeout = useRef(0);

  const createSnackBar = useCallback(
    (snackbar) => {
      setSnackBar(snackbar);
      setIsOpen(true);
    },
    [setIsOpen, setSnackBar]
  );

  const closeSnackBar = useCallback(() => {
    setSnackBar(undefined);
    setIsOpen(false);
  }, [setIsOpen, setSnackBar]);

  const context = useMemo(
    () => ({
      isOpen,
      snackBar,
      createSnackBar,
      closeSnackBar,
    }),
    [isOpen, snackBar, createSnackBar, closeSnackBar]
  );

  useEffect(() => {
    if (snackBar && snackBar.autoHide) {
      timeout.current = window.setTimeout(() => {
        setIsOpen(false);
        setSnackBar(undefined);
      }, 4000);
    }
  }, [snackBar, timeout, setIsOpen, setSnackBar]);

  return (
    <SnackBarContext.Provider value={context}>
      {children}
    </SnackBarContext.Provider>
  );
};
