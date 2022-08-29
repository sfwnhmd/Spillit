import './App.css';
import Feed from './components/Feed';
import AppLayout from './components/layout/AppLayout';
import MobileNav from './components/MobileNav/MobileNav';
import SearchBar from './components/SearchBar';
import AddButton from './components/AddButton';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MobileNav></MobileNav>
        <AppLayout>
          <Logo />
          <div class="grid grid-cols-2">
            <div>
              <SearchBar />
            </div>
            <div class="flex justify-end items-end invisible md:visible">
              <AddButton>
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="pl-2">Create Post</p>
                </div>
              </AddButton>
            </div>
          </div>
          <Feed />
        </AppLayout>
      </header>
    </div>
  );
}

export default App;
