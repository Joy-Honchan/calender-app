import React, { useState, ChangeEvent, useMemo, useEffect } from 'react'
import { styled, Box, TextField } from '@mui/material'
import CalenderGrid from './components/calenderGrid'
import { generateCalenderData } from './type/type'
import dayjs from 'dayjs'

function App() {
  const [chosenYearMonth, setChosenYearMonth] = useState<
    [number, number] | null
  >(null)
  useEffect(() => {
    const nowTime = dayjs()
    setChosenYearMonth([nowTime.get('year'), nowTime.get('month')])
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const yearMontharr = event.target.value.split('-')
    setChosenYearMonth([Number(yearMontharr[0]), Number(yearMontharr[1])])
  }

  const calenderData = useMemo(() => {
    return chosenYearMonth
      ? generateCalenderData(chosenYearMonth[0], chosenYearMonth[1])
      : []
  }, [chosenYearMonth])

  return (
    <StyleWrapper>
      <Box className="textfield-container">
        <TextField
          label={'選擇月份'}
          type="month"
          defaultValue="2022-12"
          size="small"
          sx={{ width: 150 }}
          onChange={handleChange}
        />
      </Box>

      {chosenYearMonth ? <CalenderGrid calenderData={calenderData} /> : null}
    </StyleWrapper>
  )
}

const StyleWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
  '.textfield-container': {
    paddingBottom: theme.spacing(2),
  },

  '.calender-chart-container': {
    minWidth: '600px',
  },
}))

export default App
