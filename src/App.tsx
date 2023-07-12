import HomeLayout from "./Layouts/HomeLayout";
import GlobalDataProvider from "./context/GlobalDataContext";

function App(): JSX.Element {
  return (
    <GlobalDataProvider>
      <HomeLayout>
        <h1>This is the Heading</h1>
      </HomeLayout>
    </GlobalDataProvider>
  );
}

export default App;
