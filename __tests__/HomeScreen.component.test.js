import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';
import { mount, shallow, render } from 'enzyme';
import { dummyArray } from './_mocks_/data'
import { ScrollableList } from '../app/components/organisms' 
import { LoadingTemplate, EmptyTemplate, ListWithLoading } from '../app/components/scenes/HomeScreen/templates'
enzyme.configure({ adapter: new Adapter() });

const MoviesList = ListWithLoading(ScrollableList)
describe('HomeScreen', () => {
    test('it renders a list when loading has ended and data is available', () => {
      <MoviesList isFetching={false} movies={dummyArray} />
      const component = mount(<ScrollableList isFetching={false} movies={dummyArray}/>);
      expect(component).toMatchSnapshot();
    });
  
    test('it renders a loading indicator when loading is in progress', () => {
      <MoviesList isFetching={true} movies={[]} />
      const component = shallow(<LoadingTemplate isFetching={true} movies={[]} />);
      expect(component).toMatchSnapshot();
    });
  
    test('it renders an empty template when results is 0', () => {
      <MoviesList isFetching={false} movies={[]} />
      const component = render(<EmptyTemplate isFetching={false} movies={[]}/>);
      expect(component).toMatchSnapshot();
    });
});