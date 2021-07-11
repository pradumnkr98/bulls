import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import "../../.././assets/index.css"
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

  export default function UploadButtons({style, onClick, onChange}) {
    const classes = useStyles();
   
    return (
      <div>
        <input
          accept="image/gif, image/jpeg, image/png"
          className={classes.input}
          id="contained-button-file"
          type="file"
          onChange={onChange}
        />
        <label htmlFor="contained-button-file" style={style}>
          <CloudUploadIcon style={{color:"crimson"}}></CloudUploadIcon>
          <Button onClick={onClick} className="temp" component="span" style={{color:"crimson"}}>
            Upload
          </Button>
          
        </label>
      </div>
    );
  }