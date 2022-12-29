import { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'

const AddEventDialog = ({
  nowEditingDay,
  handleDialogClose,
}: {
  nowEditingDay: number | null
  handleDialogClose: () => void
}) => {
  return (
    <Dialog open={nowEditingDay != null} onClose={handleDialogClose}>
      <DialogTitle>Add New Event</DialogTitle>
    </Dialog>
  )
}

export default AddEventDialog
