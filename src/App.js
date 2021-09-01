import { IoIosArchive } from "react-icons/io";
import React, { useState, useEffect, useCallback } from "react";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import Search from "./components/Search";
import { Introduction } from "./components/Introduction";
import myImage from "./bon.jpg";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");

  const filteredAppointments = appointmentList.filter((item) => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    );
  });

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mx-auto my-20 font-thin bg-gray-50">
      <Introduction myImage={myImage} />
      <h1 className="text-5xl mb-3 font-medium ">
        <IoIosArchive className="inline-block text-red-400 align-top " /> Your
        Appointments
      </h1>
      <AddAppointment />
      <Search query={query} onQueryChange={(myQuery) => setQuery(myQuery)} />
      <div className="scrolling-auto rounded overflow-auto h-96 bg-gray-300 w-auto m-auto w-4 scrollbar-hide">
        <ul className="divide-y divide-gray-200">
          {filteredAppointments.map((appointment) => (
            <AppointmentInfo
              appointment={appointment}
              key={appointment.id}
              onDeleleAppointment={(appointmentId) => {
                setAppointmentList(
                  appointmentList.filter(
                    (appointment) => appointment.id !== appointmentId
                  )
                );
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
