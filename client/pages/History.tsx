import Layout from "@/components/Layout";
import { Calendar, Download, Filter } from "lucide-react";

export default function History() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Weather History
          </h1>
          <p className="text-muted-foreground">
            Complete historical weather data for Kariyad Weather Station
          </p>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg border border-border p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Date Range</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filter</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm">Export CSV</span>
            </button>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white rounded-lg border border-border p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Historical Data Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              This page will display a comprehensive table of historical weather
              data with sparklines, trends, and export functionality.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
