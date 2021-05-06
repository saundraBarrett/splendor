import React, { useEffect } from 'react';
import { Dialog, Button } from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CardHeader from './cardHeader';
import CardBody from './cardBody';
import { useDispatch } from 'react-redux';
import {checkCanAfford} from '../../helpers';


export default function CardDialog(props) {
  console.log(props)
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setCanAfford(checkCanAfford(props.card, props.activePlayer))
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

  const [canAfford, setCanAfford] = React.useState(false);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <CardHeader card={props.card} />
        <CardBody card={props.card} />
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <MuiDialogContent dividers>
          <CardHeader card={props.card} />
          <CardBody card={props.card} />
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={handleClose} color="primary" disabled={!canAfford}>
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