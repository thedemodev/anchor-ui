import React, { Component } from 'react';
import find from 'lodash/find';
import noop from 'lodash/noop';
import Menu from '../../anchor-ui/menu';
import MenuItem from '../../anchor-ui/menu-item';
import Button from '../../anchor-ui/button';
import Props from '../props';
import components from '../../components.json';
import Paper from '../../anchor-ui/paper';
import IconRocket from '../../anchor-ui/icons/icon-rocket';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'Menu' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  button: { margin: '10px' }
};

class MenuDoc extends Component {
  state = {
    open: false,
    openIconHeader: false,
    openRight: false
  }

  toggleMenu = () => {
    const { open } = this.state;

    this.setState({
      open: !open
    });
  }

  toggleMenuIconHeader = () => {
    const { openIconHeader } = this.state;

    this.setState({
      openIconHeader: !openIconHeader
    });
  }

  toggleMenuRight = () => {
    const { openRight } = this.state;

    this.setState({
      openRight: !openRight
    });
  }

  render() {
    const { open, openIconHeader, openRight } = this.state;

    return (
      <article className="page">
        <h1>Menu</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Examples</h1>
          <Markdown markdown={example} title="Code example" />
          <Paper style={style.paper}>
            <Menu
              style={{ height: 'auto', display: 'inline-block' }}
              header="Sidebar menu"
              footer="version 8af2fbb"
            >
              <MenuItem text="Active Menu item" onClick={noop} active />
              <MenuItem text="Menu item" onClick={noop} />
              <MenuItem text="Menu item" onClick={noop} />
            </Menu>
            <Button
              style={style.button}
              onClick={this.toggleMenu}
            >
              Default Menu
            </Button>
            <Button
              style={style.button}
              onClick={this.toggleMenuIconHeader}
            >
              Menu with iconHeader
            </Button>
            <Button
              style={style.button}
              onClick={this.toggleMenuRight}
            >
              Menu position Right
            </Button>
            <Menu
              closeMenu={this.toggleMenu}
              header="Default Menu"
              open={open}
            >
              <MenuItem text="Active Menu item" onClick={noop} active />
              <MenuItem text="Menu item" onClick={noop} />
              <MenuItem text="Menu item" onClick={noop} />
            </Menu>
            <Menu
              closeMenu={this.toggleMenuIconHeader}
              header="IconHeader Menu"
              open={openIconHeader}
              headerIcon={<IconRocket />}
              footer="version 8af2fbb"
            >
              <MenuItem text="Active Menu item" onClick={noop} active />
              <MenuItem text="Menu item" onClick={noop} />
              <MenuItem text="Menu item" onClick={noop} />
              <MenuItem text="Menu item" onClick={noop} />
              <MenuItem text="Menu item" onClick={noop} />
            </Menu>
            <Menu
              closeMenu={this.toggleMenuRight}
              header="Postion Right Menu"
              open={openRight}
              position="right"
            >
              <MenuItem text="Active Menu item" onClick={noop} active />
              <MenuItem text="Menu item" onClick={noop} />
              <MenuItem text="Menu item" onClick={noop} />
            </Menu>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MenuDoc;
