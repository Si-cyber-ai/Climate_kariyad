import Layout from "@/components/Layout";
import { Shield, Save } from "lucide-react";

export default function ManualEntry() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Manual Data Entry
          </h1>
          <p className="text-muted-foreground">
            Secure form for authorized weather data entry
          </p>
        </div>

        {/* Access Control Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-yellow-600" />
            <p className="text-sm text-yellow-800">
              This page requires authorization. Please log in to enter weather
              data.
            </p>
          </div>
        </div>

        {/* Placeholder Form */}
        <div className="bg-white rounded-lg border border-border p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Rainfall (mm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="0.0"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Max Temperature (°C)
                </label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="0.0"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Min Temperature (°C)
                </label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="0.0"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Humidity (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  placeholder="0"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled
                className="flex items-center space-x-2 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-4 h-4" />
                <span>Save Data</span>
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              This form will include authentication and validation in the full
              implementation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
