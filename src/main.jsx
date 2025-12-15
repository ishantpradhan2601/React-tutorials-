import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import DashboardComponent from './DashboardComponent.jsx'
// import Laptopfunction from './Laptopfunction.jsx'
// import Student from './Studentfunc.jsx'
// import CSSInline from './CssInline.jsx'
// import CSSExternal from './CssExternal.jsx'
// import CSSModule from './CSSModule.jsx'
// import FOOD from './Food.jsx'
// import EventHandling from './EventHandling.jsx'
// import Counter from './counter.jsx'
// import Food from './Food.jsx'
// import TalwindExample from './TalwindExample.jsx'
// import useStateExample from './useStateExample.jsx'
// import UseState12 from './useState12.jsx'
// import UseEffectExample from './UseEffectExample.jsx';
// import EffectTask from './effectTask.jsx';
// import PasswordGenerator from './PasswordGenerator';
// import WithoutUseContext from './UseContext.jsx/withoutUseContext';
// import ProviderComponent from './UseContext.jsx/ProviderComponent';
import UseReducerExample1 from './UseReducerExample1';
import ThemeProvider from './UseContext.jsx/ThemeProvider';
import UseReducerExample2 from './UseReducerExample2';
import UseRefExample2 from './UseRefExample2';
import ControlledComponent from './ControlledComponent';
import ControlledComponentTask  from './ControlledComponentTask';
import UncontrolledComponent from './UncontrolledComponent.jsx';
import Controlled4 from './Controlled4.jsx';
import FormValdation from './FormValdation.jsx';
import HTTPRequestmethod from './HTTPMethods/HTTPRequestmethod.jsx';
import HTTPRequestmethod2 from './HTTPMethods/HTTPRequestmethod2.jsx';
import HomePage from './Task/Homepage.jsx';
import App from './App.jsx'
import { Provider } from 'react-redux'
// import { store } from './Store.jsx'
import { Store2 } from './Store2.jsx';


let config = {ram: "16GB", storage: "512GB SSD"};

createRoot(document.getElementById('root')).render(
  
    
    <Provider store={Store2}>
      <App />
    </Provider>


)
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
// import { store } from './Store.jsx'

// let config = { ram: "16GB", storage: "512GB SSD" }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <Provider store={store}>
//       <App />
//     </Provider>

//   </StrictMode>
// )

