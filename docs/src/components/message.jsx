/* global alert */
import React, { Component } from 'react';
import find from 'lodash/find';
import map from 'lodash/map';
import noop from 'lodash/noop';
import moment from 'moment';
import faker from 'faker';
import Message from '../anchor-ui/message';
import MessageList from '../anchor-ui/message-list';
import MenuItem from '../anchor-ui/menu-item';
import Props from './props';
import components from '../components.json';
import background from '../assets/images/channel-background.jpg';
import Paper from '../anchor-ui/paper';
import Select from '../anchor-ui/select';
import Switch from '../anchor-ui/switch';
import colors from '../anchor-ui/settings/colors';
import IconMenu from '../anchor-ui/icon-menu';
import IconChevronDown from '../anchor-ui/icons/icon-chevron-down';
import Markdown from './markdown';
import organ from '../assets/audio/organ.mp3';
import loop from '../assets/audio/loop.m4a';

const usage = `
  \`\`\`js
  import Message from 'anchor-ui/message';
  \`\`\`
`;
const scalingEmoji = `
  \`\`\`css
  /* default */
  .emojione {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    margin-top: -4px;
  }

  /* scaling */
  .small .emojione {
    font-size: 22px;
  }

  .medium .emojione {
    font-size: 26px;
  }

  .large .emojione {
    font-size: 30px;
  }
  \`\`\`
`;

const currentUser = faker.internet.userName();
const currentUserAvatar = faker.internet.avatar();

const componentData = find(components, { displayName: 'Message' });
const style = {
  paper: {
    margin: '0 0 20px 0',
    padding: '20px'
  },
  list: {
    backgroundImage: `url(${background})`,
    backgroundSize: '500px',
    height: '475px'
  },
  options: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 0'
  },
  margin: {
    margin: '5px'
  },
  image: {
    borderRadius: '3px',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '200px',
    objectFit: 'cover'
  }
};

const messages = [
  {
    body: loop,
    createdAt: moment().toISOString(),
    username: currentUser,
    avatar: currentUserAvatar,
    id: 11,
    type: 'audio',
    audio: {
      onPlay: noop,
      onPause: noop,
      isPlaying: true,
      progress: 0.74,
      time: '13:37'
    }
  },
  {
    body: organ,
    createdAt: moment().toISOString(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 10,
    type: 'audio',
    audio: {
      onPlay: noop,
      onPause: noop,
      isPlaying: false,
      progress: 0,
      time: '0:42'
    }
  },
  {
    body: 'Stop talking, brain thinking. @Lars Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.', // eslint-disable-line max-len
    createdAt: moment().toISOString(),
    username: currentUser,
    avatar: currentUserAvatar,
    id: 1
  },
  {
    body: 'Daleks have no concept of elegance. https://anchor.chat',
    createdAt: moment().toISOString(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 2
  },
  {
    body: ':hammer: @Ian @test',
    createdAt: moment().toISOString(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 3
  },
  {
    body: '🎈\n\n\n\n\n____________🏃\nrun forest run.',
    createdAt: moment().toISOString(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 4
  },
  {
    body: 'https://telegram.org/file/811140066/1/7fM-CwKk4F0/53f9f1fc731c63547d',
    createdAt: moment().toISOString(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 5,
    type: 'sticker'
  },
  {
    body: 'https://telegram.org/file/811140750/1/KwtOAxwo1SA/452620c767366798d3',
    createdAt: moment().toISOString(),
    username: currentUser,
    avatar: currentUserAvatar,
    id: 6,
    type: 'sticker'
  },
  {
    body: 'https://source.unsplash.com/random/375x667',
    createdAt: moment().toISOString(),
    username: currentUser,
    avatar: currentUserAvatar,
    id: 7,
    type: 'image',
    collapsedText: 'This image has been collapsed.'
  },
  {
    body: 'https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif',
    createdAt: moment().toISOString(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 8,
    type: 'giphy',
    collapsedText: 'This GIF has been collapsed.'
  },
  {
    body: 'freezing bubble movie',
    createdAt: moment().toISOString(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 9,
    type: 'video',
    video: (
      <video
        controls
        muted
        src="https://player.vimeo.com/external/208458665.hd.mp4?s=2001abe1e54facca01cc1ba9c074076eb711a9f8&profile_id=119&oauth2_token_id=57447761" // eslint-disable-line max-len
        style={{
          borderRadius: '4px',
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '200px',
          objectFit: 'cover'
        }}
      >
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
    ),
    collapsedText: 'This video has been collapsed.'
  }
];

const imageLoaderProps = {
  placeholder: (
    <img
      src="https://cdn.anchor.fish/client/assets/defaults/picture.f682bf93.jpg"
      alt="placeholder"
      style={style.image}
    />
  ),
  error: (
    <img
      src="https://cdn.anchor.fish/client/assets/defaults/error.2838da1f.jpg"
      alt="error"
      style={style.image}
    />
  )
};

class MessageDoc extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: false,
      fontSize: 'small',
      compact: false,
      iconMenu: false,
      edited: false,
      multiline: false,
      avatar: true
    };
  }

  selectCollapse = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  }

  selectCompact = () => {
    const { compact } = this.state;

    this.setState({
      compact: !compact
    });
  }

  selectFontSize = (event, fontSize) => this.setState({ fontSize })

  selectIconMenu = () => {
    const { iconMenu } = this.state;

    this.setState({
      iconMenu: !iconMenu
    });
  }

  selectEdited = () => {
    const { edited } = this.state;

    this.setState({
      edited: !edited
    });
  }

  selectMultiline = () => {
    const { multiline } = this.state;

    this.setState({
      multiline: !multiline
    });
  }

  selectAvatar = () => {
    const { avatar } = this.state;

    this.setState({
      avatar: !avatar
    });
  }

  render() {
    const {
      collapsed, fontSize, compact, iconMenu, edited, multiline, avatar
    } = this.state;

    return (
      <article className="page">
        <h1>Message</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <a
          href="https://www.emojione.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This component uses free Emoji icons supplied by EmojiOne
        </a>
        <section>
          <h1>Scaling emoji&apos;s</h1>
          <p>
            If you would like the emoji&apos;s to scale with the font size add the
            following to your style sheet:
          </p>
          <Markdown markdown={scalingEmoji} title="Scaling emoji's" />
        </section>
        <section>
          <h1>Examples</h1>
          <div style={style.options}>
            <Switch
              toggleSwitch={this.selectCollapse}
              label="Collapsed images"
              style={style.margin}
              active={collapsed}
            />
            <Switch
              toggleSwitch={this.selectCompact}
              label="Compact messages"
              style={style.margin}
              active={compact}
            />
            <Switch
              toggleSwitch={this.selectIconMenu}
              label="Icon menu"
              style={style.margin}
              active={iconMenu}
            />
            <Switch
              toggleSwitch={this.selectEdited}
              label="Edited messages"
              style={style.margin}
              active={edited}
            />
            <Switch
              toggleSwitch={this.selectMultiline}
              label="Enable multiline"
              style={style.margin}
              active={multiline}
            />
            <Switch
              toggleSwitch={this.selectAvatar}
              label="Enable avatar"
              style={style.margin}
              active={avatar}
            />
            <Select
              style={style.margin}
              label="Font size"
              value={fontSize}
              onChange={this.selectFontSize}
            >
              <MenuItem text="Small" value="small" />
              <MenuItem text="Medium" value="medium" />
              <MenuItem text="Large" value="large" />
            </Select>
          </div>
          <Paper style={style.paper}>
            <MessageList style={style.list}>
              {map(messages, (message) => {
                const menuItems = [
                  <MenuItem key="item1" text="Menu Item" onClick={noop} />,
                  <MenuItem key="item2" text="Another Menu Item" onClick={noop} />
                ];

                const expandMenuItem = (
                  <MenuItem
                    key="expand"
                    text="Expand image"
                    onClick={() => this.selectCollapse(false)}
                  />
                );

                if ((message.type === 'image' || message.type === 'giphy') && collapsed) {
                  menuItems.push(expandMenuItem);
                }

                let uiIconMenu = null;

                const myMessage = message.username === currentUser;

                if (iconMenu) {
                  uiIconMenu = (
                    <IconMenu
                      icon={<IconChevronDown color={myMessage ? colors.white : colors.icon} />}
                    >
                      {menuItems}
                    </IconMenu>
                  );
                }

                return (
                  <Message
                    body={message.body}
                    createdAt={moment(message.createdAt).format('HH:mm')}
                    username={message.username}
                    type={message.type}
                    key={`message-${message.id}`}
                    myMessage={myMessage}
                    avatar={avatar ? message.avatar : null}
                    emoji
                    collapsed={collapsed}
                    collapsedText={message.collapsedText}
                    fontSize={fontSize}
                    compact={compact}
                    edited={edited ? 'edited' : null}
                    highlights={[
                      {
                        prefix: '@',
                        value: 'Lars',
                        id: '1'
                      },
                      {
                        prefix: '@',
                        value: 'Ian',
                        id: '2'
                      }
                    ]}
                    onHighlightClick={(e, username) => alert(`mention ${username}`)} // eslint-disable-line no-alert
                    enableLinks
                    iconMenu={uiIconMenu}
                    enableMultiline={multiline}
                    imageLoaderProps={imageLoaderProps}
                    video={message.video}
                    audio={message.audio}
                  />
                );
              })}
            </MessageList>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MessageDoc;
