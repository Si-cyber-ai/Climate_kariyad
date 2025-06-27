import { RequestHandler } from "express";
import {
  WeatherResponse,
  WeatherData,
  DailyWeatherDisplay,
  WeatherComparison,
} from "@shared/api";

// In-memory storage for weather data - in a real app, this would be a database
let weatherDataStore: WeatherData[] = [
  {
    id: "1",
    date: "2025-01-15",
    rainfall: 12.5,
    maxTemperature: 32.1,
    minTemperature: 24.8,
    humidity: 78,
    createdAt: "2025-01-15T06:00:00Z",
    updatedAt: "2025-01-15T06:00:00Z",
  },
  {
    id: "2",
    date: "2025-01-14",
    rainfall: 8.2,
    maxTemperature: 31.5,
    minTemperature: 25.3,
    humidity: 75,
    createdAt: "2025-01-14T06:00:00Z",
    updatedAt: "2025-01-14T06:00:00Z",
  },
];

function createComparison(
  current: number,
  previous: number | null,
): WeatherComparison {
  if (previous === null) {
    return {
      current,
      previous: null,
      change: null,
      changeType: "neutral",
    };
  }

  const change = current - previous;
  let changeType: "increase" | "decrease" | "neutral";

  if (Math.abs(change) < 0.1) {
    changeType = "neutral";
  } else if (change > 0) {
    changeType = "increase";
  } else {
    changeType = "decrease";
  }

  return {
    current,
    previous,
    change,
    changeType,
  };
}

export const handleTodayWeather: RequestHandler = (req, res) => {
  try {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Get yesterday's date
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDate = yesterday.toISOString().split("T")[0];

    // Find today's and yesterday's data
    const todayData = weatherDataStore.find((d) => d.date === today);
    const yesterdayData = weatherDataStore.find(
      (d) => d.date === yesterdayDate,
    );

    // If no data for today, use the most recent entry
    const currentData =
      todayData || weatherDataStore[weatherDataStore.length - 1];

    if (!currentData) {
      return res.status(404).json({ error: "No weather data available" });
    }

    const response: WeatherResponse = {
      today: {
        date: currentData.date,
        rainfall: createComparison(
          currentData.rainfall,
          yesterdayData?.rainfall || null,
        ),
        maxTemperature: createComparison(
          currentData.maxTemperature,
          yesterdayData?.maxTemperature || null,
        ),
        minTemperature: createComparison(
          currentData.minTemperature,
          yesterdayData?.minTemperature || null,
        ),
        humidity: createComparison(
          currentData.humidity,
          yesterdayData?.humidity || null,
        ),
      },
      lastUpdated: currentData.updatedAt,
    };

    res.json(response);
  } catch (error) {
    console.error("Error in handleTodayWeather:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const handleWeatherHistory: RequestHandler = (req, res) => {
  try {
    // This would typically include pagination, filtering, etc.
    const sortedData = [...mockWeatherData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    res.json({
      data: sortedData,
      total: sortedData.length,
      page: 1,
      limit: 10,
    });
  } catch (error) {
    console.error("Error in handleWeatherHistory:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const handleAddWeatherData: RequestHandler = (req, res) => {
  try {
    // This would validate the request body and save to database
    // For now, just return success
    res.json({
      success: true,
      message: "Weather data saved successfully",
      id: Date.now().toString(),
    });
  } catch (error) {
    console.error("Error in handleAddWeatherData:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
