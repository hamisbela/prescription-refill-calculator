import React from 'react';
import { Pill, Clock, Shield, Calendar, Settings2, BookOpen } from 'lucide-react';

export default function SeoContent() {
  return (
    <div className="mt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          The Ultimate Prescription Refill Calculator Guide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Pill className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Medication Management Tool</h3>
            </div>
            <p className="text-gray-600">Our prescription refill calculator helps you track and manage your medication schedule effectively.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Never Miss a Refill</h3>
            </div>
            <p className="text-gray-600">Calculate exactly when you need to refill your prescriptions with our specialized calculator.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Health Safety</h3>
            </div>
            <p className="text-gray-600">Stay on top of your medication schedule to maintain consistent treatment.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Smart Planning</h3>
            </div>
            <p className="text-gray-600">Plan ahead with accurate calculations of your medication supply.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <Settings2 className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Understanding Prescription Refills</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Managing prescription refills is crucial for maintaining your health. Our prescription refill calculator helps you stay on track with your medication schedule by providing precise calculations of when you'll need your next refill.</p>
              <p className="text-gray-600">Using our prescription refill calculator ensures you never run out of important medications.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Medication Management Tips</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  Always keep track of your remaining medication
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  Set reminders for refill dates
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  Contact your pharmacy before running out
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  Maintain an up-to-date medication list
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Prescription Refill Calculator?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Accurate refill date calculations</li>
            <li>Easy-to-use interface</li>
            <li>Helpful reminders for low supply</li>
            <li>Free medication management tool</li>
            <li>Mobile-friendly design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}