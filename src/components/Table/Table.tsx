import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridRowsProp, GridColDef, DataGrid,  } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectAllUsers } from 'store/user/selectors';
import ModalComponent from 'components/Modal/Modal';
import styles from './Table.module.scss'

const Table: React.FC = () => {
  const rows = useSelector(selectAllUsers);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleImageClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'photo',
      headerName: 'Photo',
      width: 150,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="User"
          style={{ width: 50, height: 50 }}
          onClick={() => handleImageClick(params.value)}
          />
      ),
    },
  ];

  return (
    <div className={styles.table}>
      <DataGrid rows={rows} columns={columns} />
      <ModalComponent open={selectedPhoto !== null} onClose={() => setSelectedPhoto(null)}>
      {selectedPhoto ? (
        <img src={selectedPhoto}/>
      ) : <></>}
      </ModalComponent>
    </div>
  );
};

export  {Table};
