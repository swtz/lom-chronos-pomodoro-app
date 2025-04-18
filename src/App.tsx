import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('Hello, world!');

  return (
    <div>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
        perferendis vero in aperiam quae numquam et! Odit, vel reiciendis
        repudiandae iste provident cupiditate repellendus, voluptate facilis in
        officia quo voluptas!
      </p>
    </div>
  );
}
