import Radium from 'radium';
import compose from 'recompose/compose';
import themeable from '../themeable';
import ListItem from './component';

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(ListItem);
