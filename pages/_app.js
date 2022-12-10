import { SnackBar } from '../components/SnackBar/SnackBar';
import { ContactListProvider } from '../context/contactList';
import { SnackBarProvider } from '../context/snackbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ContactListProvider>
      <SnackBarProvider>
        <Component {...pageProps} />
        <SnackBar />
      </SnackBarProvider>
    </ContactListProvider>
  );
}

export default MyApp;
