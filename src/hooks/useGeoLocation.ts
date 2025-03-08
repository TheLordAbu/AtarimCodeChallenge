import { useEffect, useState } from "react";
import { Coordinates } from "../api/types";

interface GeolocationState {
  coords: Coordinates | null;
  error: string | null;
  isLoading: boolean;
}
export function useGeolocation() {
  const [locationData, setLocationData] = useState<GeolocationState>({
    coords: null,
    error: null,
    isLoading: true,
  });

  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoadin: true, error: null }));

    if (!navigator.geolocation) {
      setLocationData({
        coords: null,
        error: "Geolocation is not supported by your browser",
        isLoading: false,
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationData({
          coords: {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      (error) => {
        let errorMessage: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied, Please enable location access";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Unable to get your location";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occured";
        }

        setLocationData({
          coords: null,
          error: errorMessage,
          isLoading: false,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };
  useEffect(() => {
    getLocation();
  }, []);

  return {
    ...locationData,
    getLocation,
  };
}
