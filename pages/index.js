import { useState } from 'react';
import Head from 'next/head';
import { Button, Typography } from '@mui/material';
import useAuth from '../hooks/useAuth';
import styles from '../styles/Home.module.css';
import AddUserModal from '../components/AddUserModal/AddUserModal';
import ContactList from '../components/ContactList/ContactList';

export default function Home() {
  useAuth();
  const [formIsOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3" component="h1">
          Contact List
        </Typography>
        <Button variant="contained" onClick={handleOpenForm}>
          New contact
        </Button>
        <AddUserModal open={formIsOpen} onClose={handleCloseForm} />
        <ContactList />
      </main>
    </div>
  );
}
