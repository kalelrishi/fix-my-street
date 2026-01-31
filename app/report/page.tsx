"use client";

import { useEffect, useState } from "react";

export default function ReportPage() {
  const [preview, setPreview] = useState<string | null>(null);

  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [locationStatus, setLocationStatus] = useState(
    "Detecting location..."
  );

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  // 📍 Auto-detect GPS location
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationStatus("Location not supported on this device");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationStatus("Location captured");
      },
      () => {
        setLocationStatus("Location permission denied");
      }
    );
  }, []);

  return (
    <main className="min-h-screen bg-yellow-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Report an Issue
      </h1>

      <p className="mt-3 text-center text-lg text-gray-700">
        Take or upload a photo of the issue
      </p>

      <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-7 shadow-lg">
        {/* Issue Type */}
        <label className="block text-xl font-bold text-gray-900">
          Issue Type
        </label>

        <select
    className="mt-3 w-full rounded-lg border border-gray-300 bg-white p-3 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    defaultValue=""
  >
    <option value="" disabled className="text-gray-500">
  Example: Pothole
</option>

    <option>Pothole</option>
    <option>Garbage</option>
    <option>Street Light</option>
    <option>Dead Animal</option>
    <option>Water Leakage</option>
    <option>Accident</option>
    <option>Street Dogs</option>
  </select>


        {/* Photo Upload */}
        <label className="block text-xl font-bold text-gray-900 mt-6">
          Photo
        </label>

        <div className="mt-3 rounded-xl border-2 border-dashed border-yellow-400 bg-yellow-50 p-6 text-center">
          <input
            type="file"
            accept="image/*"
            capture="environment"
            id="photo-upload"
            className="hidden"
            onChange={handlePhotoChange}
          />

          <label htmlFor="photo-upload" className="cursor-pointer">
            {!preview ? (
              <>
                <p className="text-base text-gray-700">
                  Tap to open camera or upload photo
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Camera opens automatically on mobile
                </p>
              </>
            ) : (
              <img
                src={preview}
                alt="Preview"
                className="mx-auto max-h-64 rounded-lg"
              />
            )}
          </label>
        </div>

        {/* 📍 Location Status */}
        <div className="mt-6 rounded-lg bg-yellow-100 p-3 text-center text-sm font-medium text-gray-800">
          📍 {locationStatus}
        </div>

        {/* Submit Button */}
        <button className="mt-10 w-full rounded-full bg-yellow-400 py-4 text-lg font-semibold text-black hover:bg-yellow-500 transition">
          Submit Report
        </button>
      </div>
    </main>
  );
}
