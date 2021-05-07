import React, { useEffect } from 'react';
import { Dialog, Button, Grid } from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CardHeader from './cardHeader';
import CardBody from './cardBody';
import { useDispatch } from 'react-redux';
import { checkCanAfford, checkCanReserve } from '../../helpers';

// Opens up card details in dialog to ask the user what they would like to do with the card
export default function CardDialog(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [canAfford, setCanAfford] = React.useState(false);
  const [canReserve, setCanReserve] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setCanAfford(checkCanAfford(props.card, props.activePlayer))
    setCanReserve(checkCanReserve(props.activePlayer))
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buyCard = () => {
    let card = props.card
    dispatch({ type: 'PLAYER_TAKE_CARD', card })
    setOpen(false)
    dispatch({ type: 'END_PLAYER_TURN' })
  }

  const reserveCard = () => {
    let card = props.card
    dispatch({ type: 'PLAYER_RESERVE_CARD', card })
    setOpen(false)
    dispatch({ type: 'END_PLAYER_TURN' })
  }

  return (
    <div>
      <Grid container xs variant="outlined" color="primary" onClick={handleClickOpen}>
        <Grid container direction="column">
          <CardHeader card={props.card} />
          <CardBody card={props.card} />
        </Grid>
      </Grid>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <MuiDialogContent dividers>
          <CardHeader card={props.card} />
          <CardBody card={props.card} />
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={reserveCard} color="primary" disabled={!canReserve}>
            Reserve
          </Button>
          <Button autoFocus onClick={buyCard} color="primary" disabled={!canAfford}>
            Buy
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}