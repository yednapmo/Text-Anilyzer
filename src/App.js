import React,{useState} from "react";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";


function App(){

  const [alert,setAlert] = useState(null);

  const showAlert = (message) =>{
      setAlert({
        msg : message,
      })
  }

return(
  <>
<Navbar title="Text Analyzer" navHeading1="Home" navHeading2="About"/>
<Alert alert={alert}/>
<TextForm showAlert={showAlert}/>
  </>
)
}

export default App;