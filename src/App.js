import { IoIosArchive } from "react-icons/io";
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <IoIosArchive className="inline-block text-red-400 align-top" /> Your
        Appointments
      </h1>
      <AddAppointment />
      <Search />
    </div>
  );
}

export default App;
