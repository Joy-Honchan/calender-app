import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const AddEventDialog = ({
  nowEditingDay,
  handleDialogClose,
}: {
  nowEditingDay: number | null;
  handleDialogClose: () => void;
}) => {
  const validationSchema = yup.object({
    // email: yup
    //   .string("Enter your email")
    //   .email("Enter a valid email")
    //   .required("Email is required"),
    // password: yup
    //   .string("Enter your password")
    //   .min(8, "Password should be of minimum 8 characters length")
    //   .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      // email: "foobar@example.com",
      // password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Dialog open={nowEditingDay != null} onClose={handleDialogClose}>
      <DialogTitle>Add New Event</DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default AddEventDialog;
