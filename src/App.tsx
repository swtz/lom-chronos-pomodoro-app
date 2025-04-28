import { TaskContextProvider } from './contexts/TaskContext';
import { Home } from './pages/Home';

import './styles/global.css';
import './styles/theme.css';
import { MessagesContainer } from './components/MessagesContainer';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
