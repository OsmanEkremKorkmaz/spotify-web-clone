import Modal from "modals/Modal";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { routes } from "routes";

function App() {
  const showRoutes = useRoutes(routes);

  const {current:modal} = useSelector(state => state.modals)

  return <>
  <Toaster position="top-right" />
  {modal && <Modal name={modal} />}
  
    {showRoutes}
  </> ;
}

export default App;
