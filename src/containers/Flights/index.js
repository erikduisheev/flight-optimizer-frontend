import React, { useState } from "react";
import AsyncSelectField from "../../components/AsyncSelectField";
import "./index.css";
import Button from "@n3/react-button";
import api from "../../api";
import { toast } from "react-toastify";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Flights = () => {
  const [departure, setDeparture] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const getIsButtonDisabled = () => {
    return !departure || !destinations.length;
  };
  const handleOnClickFindRoutes = () => {
    setIsLoading(true);
    setFlights([]);
    api
      .get(
        `/flights?from=${departure.value}${destinations
          .map(({ value }) => `&to=${value}`)
          .join("")}`
      )
      .then((response) => {
        const { destinations } = response.data;
        setFlights(destinations);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(`Something went wrong ${error.message}`);
      });
  };
  return (
    <div className="flights-container">
      <div className="search">
        <div className="flights-container-departures">
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
            noOptionsMessage="No city found"
          />
        </div>
        <div className="flights-container-destinations">
          <AsyncSelectField
            label="Destinations"
            placeholder="Choose your destinations"
            isMulti
            value={destinations}
            loadAsyncConfig={{
              minInputCharLengthToStart: 2,
              endpoint: "locations",
            }}
            noOptionsMessage="No city found"
            onChange={(value) => setDestinations(value || [])}
          />
        </div>
        <Button
          className="button"
          loading={isLoading}
          disabled={getIsButtonDisabled()}
          onClick={handleOnClickFindRoutes}
        >
          Find
        </Button>
      </div>
      <div className="flights-list">
        {isLoading && (
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        )}

        {flights.map((flight) => {
          return (
            <div className="flights-list-item">
              {flight.is_reachable && (
                <>
                  <p
                    style={{ margin: 0, textAlign: "left" }}
                  >{`To ${flight.city}, airport - ${flight.airport}, distance - ${flight.distance} km, price - $${flight.price}`}</p>
                  <p style={{ margin: 0 }}>{flight.price_per_km} $/km</p>
                </>
              )}
              {!flight.is_reachable && (
                <p style={{ margin: 0, textAlign: "left" }}>
                  Currently, there is no any flights to {flight.city}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Flights;
