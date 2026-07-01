import Parse from 'parse'
import './App.css'
import Components from '../Components/Components.jsx'

//connecting parse
Parse.initialize("Esk2GTeZgctXdkVgpCFTzuE3epbEGmeSnh421YVE", "FOtU9JHQ5RfUybpIe7AjTYBsLe6Vhk0uTuYHsOgR")
Parse.serverURL = 'https://parseapi.back4app.com/'


export default function App() {
  return <Components />;
}
