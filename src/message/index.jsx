import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import noop from 'lodash/noop';
import getStyles from './get-styles';
import TextMessage from './text-message';
import ImageMessage from './image-message';
import GiphyMessage from './giphy-message';
import VideoMessage from './video-message';
import StickerMessage from './sticker-message';
import AudioMessage from './audio-message';
import themeable from '../themeable';
import styles from './styles';

const displayName = 'Message';

const propTypes = {
  /** Path to the user's profile image will only be rendered if provided */
  avatar: PropTypes.string,
  /** The message's body text */
  body: PropTypes.node.isRequired,
  /** Time when the message was created */
  createdAt: PropTypes.node.isRequired,
  /** The sender's username */
  username: PropTypes.node.isRequired,
  /** The message's type */
  type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'video', 'audio']),
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the header element */
  messageHeaderStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the body element */
  messageBodyStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the time element */
  messageTimeStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** The message size. One of the following: ["small", "medium", "large"] */
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Flag used to change message styles. True if the message was sent by the current user */
  myMessage: PropTypes.bool,
  /** Enable emojione for messages */
  emoji: PropTypes.bool,
  /** Enables links in messages */
  enableLinks: PropTypes.bool,
  /** Enables compact messages */
  compact: PropTypes.bool,
  /** Enables Lighbox for image messages */
  enableLightbox: PropTypes.bool,
  /** Collapse an image message */
  collapsed: PropTypes.bool,
  /** Text to display for collapsed messages */
  collapsedText: PropTypes.node,
  /** Text to display above giphy messages */
  giphyDescription: PropTypes.node,
  /** Text to display for edited banner */
  edited: PropTypes.node,
  /** Show a separator above the message */
  separator: PropTypes.node,
  /**
   * Highlight text, must be an array of objects containing id, value, and prefix.
   *
   * Text matching '[prefix][value]' will be highlighted
   */
  highlights: PropTypes.arrayOf(String),
  /**
   * Callback fired when highlighted text is clicked
   *
   * function(event: object, highlight: object) => void
   */
  onHighlightClick: PropTypes.func,
  /** Badge to display next to username */
  badge: PropTypes.node,
  /** Render an IconMenu in Message */
  iconMenu: PropTypes.node,
  /** Enables multiline messages */
  enableMultiline: PropTypes.bool,
  /** ImageLoader props, see https://ui.anchor.chat/#/image-loader */
  imageLoaderProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Video node to display a video url within a player */
  video: PropTypes.node,
  /**
   * Audio object
   *
   * {
   *   onPlay: function(event: object) => void,
   *   onPause: function(event: object) => void,
   *   isPlaying: Boolean,
   *   progress: Number,
   *   time: Node
   * }
   */
  audio: PropTypes.shape({
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    progress: PropTypes.number.isRequired,
    time: PropTypes.node.isRequired
  }),
  color: PropTypes.string.isRequired
};

const defaultProps = {
  avatar: '',
  type: 'text',
  style: {},
  messageHeaderStyle: {},
  messageBodyStyle: {},
  messageTimeStyle: {},
  fontSize: 'small',
  myMessage: false,
  emoji: false,
  enableLinks: false,
  compact: false,
  enableLightbox: false,
  collapsed: false,
  collapsedText: 'This image has been collapsed.',
  giphyDescription: 'Sent using /giphy',
  edited: null,
  separator: null,
  highlights: [],
  onHighlightClick: noop,
  badge: null,
  iconMenu: null,
  enableMultiline: false,
  imageLoaderProps: {},
  video: null,
  audio: {
    onPlay: noop,
    onPause: noop,
    isPlaying: false,
    progress: 0,
    time: '00:00'
  }
};

/** Messages with optional styling for the current user's message,
different font sizes and message styles */
const Message = (props) => {
  const {
    avatar,
    body,
    createdAt,
    username,
    type,
    myMessage,
    style,
    messageHeaderStyle,
    messageBodyStyle,
    messageTimeStyle,
    compact,
    fontSize,
    emoji,
    enableLinks,
    enableLightbox,
    collapsed,
    collapsedText,
    edited,
    highlights,
    onHighlightClick,
    color,
    separator,
    badge,
    giphyDescription,
    iconMenu,
    enableMultiline,
    imageLoaderProps,
    audio,
    ...custom
  } = props;

  let messageElement = <TextMessage color={color} {...props} />;

  if (type === 'image') {
    messageElement = <ImageMessage color={color} {...props} />;
  }

  if (type === 'sticker') {
    messageElement = <StickerMessage color={color} {...props} />;
  }

  if (type === 'giphy') {
    messageElement = <GiphyMessage color={color} {...props} />;
  }

  if (type === 'video') {
    messageElement = <VideoMessage color={color} {...props} />;
  }

  if (type === 'audio') {
    messageElement = <AudioMessage color={color} {...props} />;
  }

  return (
    <div style={styles.root}>
      {separator}
      <section style={getStyles.container(myMessage, compact)} {...custom}>
        {messageElement}
      </section>
    </div>
  );
};

Message.displayName = displayName;
Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Message);
