import {
  makeStyles
} from '@material-ui/core'

const contentStyle = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

export {
  contentStyle
}