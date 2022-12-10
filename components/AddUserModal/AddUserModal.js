import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './AddUserModal.module.css';
import AddUserForm from '../AddUserForm/AddUserForm';

const AddUserModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title">
      <Box className={styles.box}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h1"
          align="center"
        >
          Add New User
        </Typography>
        <AddUserForm onSubmitSuccess={onClose} />
      </Box>
    </Modal>
  );
};

AddUserModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddUserModal;
