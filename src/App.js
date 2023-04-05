import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { store } from './store/store'
import UserList from './components/UserList';
import "./App.css"

const persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserList />
     </PersistGate>
    </Provider>
  );
}

export default App;
