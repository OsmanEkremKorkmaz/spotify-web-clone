import Modal from "modals/Modal";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import routes from "routes";

function App() {
  const showRoutes = useRoutes(routes);

  const user = useSelector(state => state.auth.user)

  const {current:modal} = useSelector(state => state.modals)

  if(user === null) {
    return <></>
  }

  return <>
  {modal && <Modal name={modal} />}
  
    {showRoutes}
  </> ;
}

export default App;
