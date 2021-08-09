import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NoImage from '../../assets/img/src/no_image.png';
import {push} from 'connected-react-router'
import { useDispatch } from 'react-redux';

// themaファイルのmaincolorやbreakpointを使える
const useStyles = makeStyles((thema) => ({
  root: {
    [thema.breakpoints.down('sm')]: {
      margin: 8,
      width: 'calc(50% - 16px)'
    },
    [thema.breakpoints.up('sm')]: {
      margin: 16,
      width: 'calc(33.3333% - 32px)'
    }
  },
  content: {
    display: 'flex',
    padding: '16px 8px',
    textAlign: 'left',
    '&:last-child': {
      paddingBottom: 16
    }
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  price: {
    color: thema.palette.secondary.main,
    fontSize: 16
  }
}))

const ProductCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const images = (props.images.length > 0 ) ? props.images[0].path : NoImage
  const price = props.price.toLocaleString();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={images}
        title=""
        onClick={() => dispatch(push(`/product/${props.id}`))}
      />
      <CardContent className={classes.content}>
        <div onClick={() => dispatch(push(`/product/${props.id}`))}>
          <Typography color="textSecondary" component="p">
            {props.name}
          </Typography>
          <Typography className={classes.price} component="p">
            ¥{price}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
