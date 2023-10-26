import React, { useState } from 'react';
import { useTheme, Divider, Stack, Typography, TextField, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  DataGridPro,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid-pro';

//components
import MainContainer from 'src/components/MainContainer';
import Title from 'src/components/Title';
import Table from 'src/components/grid/table';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'Student', width: 350 },
  { field: 'col2', headerName: 'Percentage' },
  { field: 'col3', headerName: 'Date' },
  { field: 'col4', headerName: 'Time Spent', width: 150 },
  { field: 'col5', headerName: 'Time Started', width: 150 },
  { field: 'col6', headerName: 'Time Completed', width: 150 },
];

const values = [
  { value: '', label: '' },
  { value: 'Class1', label: 'Class1' },
  { value: 'Class2', label: 'Class2' },
];

const Results = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(false);
  const [selectValue, setSelectValue] = useState(null);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    e.target.value !== '' ? setSelected(true) : setSelected(false);
  };

  return (
    <MainContainer title="Results">
      <Title>Results</Title>
      <Divider sx={{ marginBottom: '30px' }} />
      <Stack spacing={2}>
        <ol style={{ paddingLeft: '20px' }}>
          <li>See your whole class and the Mfacts levels they are currently working on.</li>
          <li>
            Click on individual students to see times, scores and number of attempts. (On some browser you may need to
            click on students name twice to see results)
          </li>
        </ol>
        <Typography variant="h5">Assessment Results For:</Typography>
        <TextField
          id="results-select"
          select
          label="Choose Class"
          value={selectValue || ' '}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          // helperText="Please select a Student"
        >
          {values.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        {selected && <Table rows={rows} columns={columns} />}
      </Stack>
    </MainContainer>
  );
};

export default Results;
