import * as React from 'react';
import { render } from 'react-dom';
import { H1, H2, H3, H4, Title, Text } from './typography';
import { Button, ButtonGroup } from './button';
import { Input } from './input';
import { Breadcrumbs } from './breadcrumbs';
import { ListView } from './list-view';
import { Modal } from './modal';
import { Spinner } from './spinner';

// const CompStyles = {
//   wrapper: {}
// }
// const Comp = () => {
//   return <div style={CompStyles.wrapper}></div>
// }

var nothing;

const AppStyles = {
  wrapper: {
    fontFamily: 'Helvetica',
    letterSpacing: '-0.02em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    margin: '-8px'
  },
  container: {
    flex: '0 1 960px',
    backgroundColor: 'white',
    padding: '16px'
  }
};

class App extends React.Component<
  {},
  { isDefaultModalOpen: boolean; isLoadingModalOpen: boolean }
> {
  state = {
    isDefaultModalOpen: false,
    isLoadingModalOpen: false
  };

  showDefaultModal = () => {
    this.setState({ isDefaultModalOpen: true });
  };

  hideDefaultModal = () => {
    this.setState({ isDefaultModalOpen: false });
  };

  showLoadingModal = () => {
    this.setState({ isLoadingModalOpen: true });
    setTimeout(() => {
      this.setState({ isLoadingModalOpen: false });
    }, 3000);
  };

  render() {
    const { isDefaultModalOpen, isLoadingModalOpen } = this.state;

    return (
      <div className="App" style={AppStyles.wrapper}>
        <div className="App" style={AppStyles.container}>
          <H1>UI Kitchen Sink</H1>
          <hr />
          <H2>Typography</H2>
          <H1>Header 1</H1>
          <H2>Header 2</H2>
          <H3>Header 3</H3>
          <H4>Header 4</H4>
          <Title>Title</Title>
          <Text>Text</Text>
          <hr />
          <H2>Buttons</H2>

          <Title>Regular</Title>
          <div>
            <Button>Short text</Button>
          </div>
          <div>
            <Button type="primary">Relatively long text</Button>
          </div>
          <div>
            <Button type="danger">
              Very long piece of text that spans some space
            </Button>
          </div>
          <div>
            <Button disabled={true}>Sign up</Button>
          </div>

          <Title>Compact</Title>
          <div>
            <Button compact={true}>Short text</Button>
          </div>
          <div>
            <Button compact={true} type="primary">
              Relatively long text
            </Button>
          </div>
          <div>
            <Button compact={true} type="danger">
              Very long piece of text that spans some space
            </Button>
          </div>
          <div>
            <Button compact={true} disabled={true}>
              Sign up
            </Button>
          </div>

          <Title>Group</Title>
          <ButtonGroup>
            <Button>Short text</Button>
            <Button>Short text</Button>
            <Button type="danger">Short text</Button>
          </ButtonGroup>

          <Title>Compact Group</Title>
          <ButtonGroup>
            <Button compact={true}>Short text</Button>
            <Button compact={true}>Short text</Button>
            <Button compact={true} type="danger">
              Short text
            </Button>
          </ButtonGroup>
          <hr />
          <H2>Inputs</H2>

          <Title>Default</Title>
          <div>
            <Input />
          </div>

          <Title>Placeholder</Title>
          <div>
            <Input placeholder="This is a custom placeholder" />
          </div>

          <Title>Value</Title>
          <div>
            <Input value="An example value" />
          </div>

          <Title>Error</Title>
          <div>
            <Input hasError={true} value="An example value" />
          </div>
          <hr />
          <H2>Breadcrumbs</H2>

          <Title>Non clickable</Title>
          <div>
            <Breadcrumbs path={[{ text: 'First' }, { text: 'Second' }]} />
          </div>

          <Title>Clickable</Title>
          <div>
            <Breadcrumbs
              path={[
                {
                  text: 'First',
                  onClick: () => console.log('First breadcrumb clicked')
                },
                {
                  text: 'Second',
                  onClick: () => console.log('Second breadcrumb clicked')
                }
              ]}
            />
          </div>

          <Title>Mixed</Title>
          <div>
            <Breadcrumbs
              path={[
                {
                  text: 'First',
                  onClick: () => console.log('First breadcrumb clicked')
                },
                {
                  text: 'Second'
                },
                {
                  text: 'Third',
                  onClick: () => console.log('Third breadcrumb clicked')
                }
              ]}
            />
          </div>

          <hr />
          <H2>ListView</H2>

          <Title>Default</Title>
          <div>
            <ListView
              onClick={({ text }) => {
                console.log('Clicked on', text);
              }}
              items={[
                { text: 'Book Library' },
                { text: 'Geschäftigungskontierung' },
                { text: 'Évènement du lancement de mai 2019' },
                { text: 'Sales Report' },
                { text: 'Event Form' },
                { text: 'Freelancers Database' }
              ]}
            />
          </div>

          <Title>With title</Title>
          <div>
            <ListView
              title="Sheets"
              onClick={({ text }) => {
                console.log('Clicked on', text);
              }}
              items={[
                { text: 'Book Library' },
                { text: 'Geschäftigungskontierung' },
                { text: 'Évènement du lancement de mai 2019' },
                { text: 'Sales Report' },
                { text: 'Event Form' },
                { text: 'Freelancers Database' }
              ]}
            />
          </div>

          <Title>With action</Title>
          <div>
            <ListView
              title="Sheets"
              action={
                <Button
                  type="primary"
                  compact={true}
                  onClick={() => console.log('Listview clicked')}
                >
                  This is an action
                </Button>
              }
              onClick={({ text }) => {
                console.log('Clicked on', text);
              }}
              items={[
                { text: 'Book Library' },
                { text: 'Geschäftigungskontierung' },
                { text: 'Évènement du lancement de mai 2019' },
                { text: 'Sales Report' },
                { text: 'Event Form' },
                { text: 'Freelancers Database' }
              ]}
            />
          </div>

          <Title>Loading</Title>
          <div>
            <ListView
              loading={{ message: 'Loading items ...' }}
              onClick={({ text }) => {
                console.log('Clicked on', text);
              }}
              items={[
                { text: 'Book Library' },
                { text: 'Geschäftigungskontierung' },
                { text: 'Évènement du lancement de mai 2019' },
                { text: 'Sales Report' },
                { text: 'Event Form' },
                { text: 'Freelancers Database' }
              ]}
            />
          </div>

          <Title>Default empty</Title>
          <div>
            <ListView
              onClick={({ text }) => {
                console.log('Clicked on', text);
              }}
              items={[]}
            />
          </div>

          <Title>Empty with message and action</Title>
          <div>
            <ListView
              onClick={({ text }) => {
                console.log('Clicked on', text);
              }}
              empty={{
                message: 'You have no items in the list.',
                action: {
                  text: 'Create an item',
                  onClick: () => console.log('Empty state action clicked')
                }
              }}
              items={[]}
            />
          </div>

          <Title>Error</Title>
          <div>
            <ListView
              onClick={({ text }) => {
                console.log('Clicked on', text);
              }}
              error={{
                message: 'Could not fetch items.',
                onRetry: () => console.log('Error state action clicked')
              }}
              items={[
                { text: 'Book Library' },
                { text: 'Geschäftigungskontierung' },
                { text: 'Évènement du lancement de mai 2019' },
                { text: 'Sales Report' },
                { text: 'Event Form' },
                { text: 'Freelancers Database' }
              ]}
            />
          </div>

          <hr />
          <H2>Modal</H2>

          <Title>Default</Title>
          <div>
            <Modal
              title="Example modal"
              onOutsideClick={this.hideDefaultModal}
              visible={isDefaultModalOpen}
            >
              Hello. You can click underneath or outside to close me.
              <br />
              <br />
              <div>
                <Button
                  compact={true}
                  type="primary"
                  onClick={this.hideDefaultModal}
                >
                  Close
                </Button>
              </div>
            </Modal>
            <Button type="primary" onClick={this.showDefaultModal}>
              Open Modal
            </Button>
          </div>

          <Title>Loading (blocking)</Title>
          <div>
            <Modal visible={isLoadingModalOpen}>
              <center>
                <Spinner />
                <br />
                <div>Please wait 3 seconds.</div>
                <div>
                  <b>Do not close your window.</b>
                </div>
              </center>
            </Modal>
            <Button type="primary" onClick={this.showLoadingModal}>
              Open Modal
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
