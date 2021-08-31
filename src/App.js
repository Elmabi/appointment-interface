import { IoIosArchive } from "react-icons/io";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import Search from "./components/Search";
import appointmentList from "./data.json";

function App() {
  return (
    <div className="App container mx-auto my-20 font-thin bg-gray-50">
      <h1 className="text-5xl mb-3 font-medium ">
        <IoIosArchive className="inline-block text-red-400 align-top " /> Your
        Appointments
      </h1>
      <AddAppointment />
      <Search />
      <div className="scrolling-auto rounded overflow-auto h-96 bg-gray-300 w-auto m-auto w-4 scrollbar-hide">
        <ul className="divide-y divide-gray-200">
          {appointmentList.map((appointment) => (
            <AppointmentInfo appointment={appointment} key={appointment.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
