import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';
import Record from './SingleRecord/Record.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '3%',
    maxHeight: '350px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.1)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.0)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  spinner: {
    display: 'block',
    margin: '10px auto'
  }
}));

export default function SimpleExpansionPanel({ records, setRecords }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {records &&
          records.map(record => (
            <Record key={record._id} {...record} setRecords={setRecords} />
          ))}
      </div>
      {!records && (
        <CircularProgress color='secondary' className={classes.spinner} />
      )}
    </>
  );
}
