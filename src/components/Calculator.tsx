import React, { useState } from 'react';
import { Calculator as CalcIcon, Calendar, Pill } from 'lucide-react';

export default function Calculator() {
  const [prescriptionData, setPrescriptionData] = useState({
    totalPills: '',
    dosagePerDay: '',
    pillsRemaining: '',
    lastRefillDate: ''
  });

  const [results, setResults] = useState<null | {
    daysRemaining: number;
    refillDate: string;
    shouldRefill: boolean;
  }>(null);

  const calculateRefill = (e: React.FormEvent) => {
    e.preventDefault();
    const totalPills = parseFloat(prescriptionData.totalPills);
    const dosagePerDay = parseFloat(prescriptionData.dosagePerDay);
    const pillsRemaining = parseFloat(prescriptionData.pillsRemaining);
    const lastRefillDate = new Date(prescriptionData.lastRefillDate);

    const daysRemaining = Math.floor(pillsRemaining / dosagePerDay);
    const refillDate = new Date(lastRefillDate);
    refillDate.setDate(refillDate.getDate() + daysRemaining);

    setResults({
      daysRemaining,
      refillDate: refillDate.toLocaleDateString(),
      shouldRefill: daysRemaining <= 7
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Pill className="h-8 w-8 text-blue-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Prescription Refill Calculator</h1>
      </div>

      <form onSubmit={calculateRefill} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Pills in Full Prescription</label>
          <input
            type="number"
            value={prescriptionData.totalPills}
            onChange={(e) => setPrescriptionData({...prescriptionData, totalPills: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Daily Dosage (pills per day)</label>
          <input
            type="number"
            value={prescriptionData.dosagePerDay}
            onChange={(e) => setPrescriptionData({...prescriptionData, dosagePerDay: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0.5"
            step="0.5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pills Remaining</label>
          <input
            type="number"
            value={prescriptionData.pillsRemaining}
            onChange={(e) => setPrescriptionData({...prescriptionData, pillsRemaining: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Refill Date</label>
          <input
            type="date"
            value={prescriptionData.lastRefillDate}
            onChange={(e) => setPrescriptionData({...prescriptionData, lastRefillDate: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate Refill Date
        </button>
      </form>

      {results && (
        <div className={`mt-6 p-4 rounded-md ${results.shouldRefill ? 'bg-red-50' : 'bg-green-50'}`}>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Results</h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Next Refill Date: {results.refillDate}
            </p>
            <p>Days of Medication Remaining: {results.daysRemaining}</p>
            {results.shouldRefill && (
              <p className="text-red-600 font-semibold">
                ⚠️ You should refill your prescription soon! Less than 7 days remaining.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}