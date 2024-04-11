import Autocomplete from './components/Autocomplete';

const Home: React.FC = () => {
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return <Autocomplete suggestions={suggestions} />;
};

export default Home;