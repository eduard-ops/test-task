import Container from './Container';
import Header from './Header/Header';
import Main from './Main';
import Title from './Title';
import Section from './Section';
import Categories from './Categories';

export function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Section>
          <Title title={'Categories'} />
          <Categories />
        </Section>
      </Main>
    </Container>
  );
}
