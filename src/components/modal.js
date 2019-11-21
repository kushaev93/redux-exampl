import React, { useState } from 'react';

//Mui
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function TransitionsModal(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setAnchorEl(null)
  };
  
//Form Title handlers
  const [title,setTitle] = React.useState('');
  const onChangeTitle = (e) => {
      setTitle(e.target.value)
  }
  //Form body handlers
  const [body,setBody] = React.useState('');
  const onChangeBody = (e) => {
      setBody(e.target.value)
  }


  const onFormSubmit = (e) => {
    e.preventDefault();
    const post = {
        title:title,
        body:body
    }

    fetch(`https://jsonplaceholder.typicode.com/posts` , {
        method:'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}



  return (
    <div>
      <StyledMenuItem>
        <AddIcon fontSize="small" />
        <button className="add-btn" type="button" onClick={handleOpen}>
          Create post
        </button>
      </StyledMenuItem>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
        <div className="form">
                <h1>Add Post</h1>
                <form  onSubmit={onFormSubmit}>
                    <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Title"
                        name="title"
                        value={title}
                        onChange={onChangeTitle}
                    />
                    </div>
                    <br/>
                    <div>
                        <TextField
                            label="Body of post"
                            multiline
                            rows="3"
                            value={body}
                            variant="outlined"
                            name="body"
                            onChange={onChangeBody}
                         />
                    </div>
                    <br />
                    <Button 
                        onClick={handleClose}
                        type="submit"
                        variant="outlined" 
                        color="primary" 
                    >
                      Submit
                     </Button>
                </form>
            </div>
        </Fade>
      </Modal>
    </div>
  );
}
