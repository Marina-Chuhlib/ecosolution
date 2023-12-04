import { ActiveSectionProvider } from "./shared/components/Context/ActiveSectionContext";
import Layout from "./modules/Layout/Layout";

function App() {
  return (
    <ActiveSectionProvider>
      <Layout />
    </ActiveSectionProvider>
  );
}

export default App;
