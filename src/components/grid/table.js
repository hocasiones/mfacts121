import React, { useState } from 'react';
import { useTheme, Box, Paper, Button, Popover, Card, CardContent } from '@mui/material';
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
import Popup from '../Popup';

const GridToolbar = (theme, setPopupState) => {
  return (
    <GridToolbarContainer
      sx={{
        backgroundColor: `#FFF!important`,
        borderRadius: 1,
        padding: '0 !important',
        marginBottom: '10px',
        '.MuiButton-root': {
          marginBottom: '10px',
        },
        '.MuiButton-text': {
          color: `${theme.palette.common.blue} !important`,
        },
      }}
    >
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const GridTable = ({ rows, columns, customToolbar, action, sx, others }) => {
  const theme = useTheme();

  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState([]);

  const [popupState, setPopupState] = useState(false);
  const [popupData, setPopupData] = useState({});

  const open = Boolean(action?.action || false);
  const id = open ? 'simple-popover' : undefined;

  const handleActionsClose = () => {
    action.set(false);
  };

  return (
    <React.Fragment>
      <Paper elevation={9} sx={{ padding: '20px 20px 0' }}>
        <DataGridPro
          rows={rows}
          columns={columns}
          components={{
            Toolbar: () => GridToolbar(theme, setPopupState, isSelected),
          }}
          autoHeight
          pageSize={10}
          rowsPerPageOptions={[10]}
          pagination
          disableSelectionOnClick
          disableColumnMenu
          sx={{
            // '.MuiDataGrid-root': { marginBottom: 0 },
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: theme.palette.common.greyLight,
              borderRadius: 1,
            },
            '.MuiDataGrid-columnHeaderTitle': {
              // textTransform: 'uppercase',
            },
            '.MuiTablePagination-displayedRows': { marginBottom: 0 },
            ...sx,
          }}
          {...others}
        />
      </Paper>
      <Popup open={popupState} onClose={setPopupState} data={popupData} />
      {action && (
        <Popover
          open={open}
          anchorEl={action.action}
          onClose={handleActionsClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Card>
            <CardContent>{action.buttons()}</CardContent>
          </Card>
        </Popover>
      )}
    </React.Fragment>
  );
};

export default GridTable;
