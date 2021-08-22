import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import axios from 'axios';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Contact(){
  const classes = useStyles();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mbjpplnk',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MailOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          お問い合わせ
        </Typography>
        <Typography variant="body1" gutterBottom>
          bamboooo は Mission・Philosophy に共感してくれる新しいメンバーを探しています。<br/>興味を持った方はこちらからご連絡お願いします。
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="NAME"
            name="name"
            autoComplete="name"
            onChange={handleOnChange}
            value={inputs.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="_replyto"
            label="E-MAIL"
            id="email"
            autoComplete="email"
            onChange={handleOnChange}
            value={inputs.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="message"
            label="MESSAGE"
            id="message"
            multiline
            rows={4}
            onChange={handleOnChange}
            value={inputs.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={status.submitting}
          >
            {!status.submitting
            ? !status.submitted
              ? 'submit'
              : 'submitted'
            : 'submitting...'}
          </Button>
        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </div>
    </Container>
  )
}
