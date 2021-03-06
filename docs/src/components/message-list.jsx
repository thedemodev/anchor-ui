import React from 'react';
import find from 'lodash/find';
import map from 'lodash/map';
import moment from 'moment';
import faker from 'faker';
import Message from '../anchor-ui/message';
import MessageList from '../anchor-ui/message-list';
import Props from './props';
import components from '../components.json';
import background from '../assets/images/channel-background.jpg';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import MessageList from 'anchor-ui/message-list';
  \`\`\`
`;

const currentUser = faker.internet.userName();

const messages = [
  {
    body: 'Stop talking, brain thinking. Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.', // eslint-disable-line max-len
    createdAt: new Date(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 1
  },
  {
    body: 'Daleks have no concept of elegance.',
    createdAt: new Date(),
    username: currentUser,
    avatar: faker.internet.avatar(),
    id: 2
  },
  {
    body: ':pig2:',
    createdAt: new Date(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
    id: 3
  },
];

const componentData = find(components, { displayName: 'MessageList' });

const style = {
  paper: {
    margin: 0,
    padding: '20px'
  },
  messageList: {
    backgroundImage: `url(${background})`,
    backgroundSize: '500px',
    height: '475px',
    margin: '10px'
  }
};

const MessageListDoc = () => (
  <article className="page">
    <h1>MessageList</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Examples</h1>
      <Paper style={style.paper}>
        <MessageList style={style.messageList}>
          {map(messages, message => (
            <Message
              body={message.body}
              createdAt={moment(message.createdAt).format('HH:mm')}
              username={message.username}
              type={message.type}
              key={`message-${message.id}`}
              myMessage={message.username === currentUser}
              avatar={message.avatar}
              emoji
            />
          ))}
        </MessageList>
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default MessageListDoc;
