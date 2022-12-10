import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import styles from './AddUserForm.module.css';
import useAddNewUser from '../../hooks/useAddNewUser';
import { useSnackBarContext } from '../../hooks/useSnackBar';

const initialValues = { name: '' };

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
});

const AddUserForm = ({ onSubmitSuccess }) => {
  const { createSnackBar } = useSnackBarContext();

  const addNewUser = useAddNewUser();

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const success = await addNewUser(values);
    if (success) {
      createSnackBar({
        content: 'User added successfuly',
        severity: 'success',
      });
      onSubmitSuccess();
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, isSubmitting, handleSubmit, handleChange }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
          {errors?.name ? <p className={styles.error}>{errors.name}</p> : null}
          <Button type="submit" disabled={isSubmitting} variant="contained">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      )}
    </Formik>
  );
};

AddUserForm.propTypes = {
  onSubmitSuccess: PropTypes.func.isRequired,
};

export default AddUserForm;
