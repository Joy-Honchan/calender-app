import { useState, ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function InputForm({
  ipcFunc,
  label
}: {
  ipcFunc: (value: string) => void
  label: string
}) {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const handleSend = () => {
    ipcFunc(inputValue)
  }
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField label={label} variant="filled" onChange={handleChange} />
      <Button variant="contained" onClick={handleSend}>
        Send
      </Button>
    </Box>
  )
}
