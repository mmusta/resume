import Anchor from './components/Anchor';
import Block from './components/Block';
import Header from './components/Header';
import Item from './components/Item';
import Layout from './components/Layout';
import Spacer from './components/Spacer';

function App() {
  return <Layout>
    <Header />
    <Spacer size={24} />
    <Block title={'Summary'}>
    A devoted web developer who wants learn more and improve others' lives. Skilled in problem solving and working independently.
    </Block>
    <Spacer size={24} />
    <Block title={'Projects'}>
      <Item title={<Anchor href={'https://codesandbox.io/s/interesting-ace-8uuhqb?file=/src/index.js'}>Snake</Anchor>} description={'Javascript, HTML, CSS'}>
        I created a snake game for JavaScript using canvas.
        <ul>
          <li>I have learned about canvas element and how to draw using JavaScript 2D engine</li>
        </ul>
      </Item>
    </Block>
    <Block title={'Education'}>
      <Item title={'Marmara University'} description={'June 2023'}>
        <span className='italic'>B.S in Mechanical Engineering</span>
      </Item>
    </Block>
    <Spacer size={24} />
    <Block title={'Skills'}>
      Javascript, HTML, CSS
    </Block>
  </Layout>;
}

export default App;
