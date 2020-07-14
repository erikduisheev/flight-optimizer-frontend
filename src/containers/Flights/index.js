import React, { useState } from "react";
import AsyncSelectField from "../../components/AsyncSelectField";
import "./index.css";

const Flights = ({}) => {
  const [departure, setDeparture] = useState("");
  const [destinations, setDestinations] = useState([]);

  return (
    <div className="flights-container">
      <div className="departures">
        <AsyncSelectField
          label="Departure"
          placeholder="Choose the departure"
          isMulti={false}
          loadAsyncConfig={{
            minInputCharLengthToStart: 2,
            endpoint: "locations",
          }}
          value={departure}
          onChange={setDeparture}
        />
      </div>
      <div className="destinations">
        <AsyncSelectField
          label="Destinations"
          placeholder="Choose your destinations"
          isMulti
          value={destinations}
          loadAsyncConfig={{
            minInputCharLengthToStart: 2,
            endpoint: "locations",
          }}
          onChange={setDestinations}
        />
      </div>
    </div>
  );
};

export default Flights;
