"use client"; // required for client-side interactivity in Next.js App Router

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

type Applicant = {
  name: string;
  passport: string;
  visaType: string;
};

type Progress = {
  formSubmitted: boolean;
  documentUploaded: boolean;
  paymentCompleted: boolean;
  interviewScheduled: boolean;
};

const ApplicantForm: React.FC = () => {
  const [applicant, setApplicant] = useState<Applicant>({
    name: "",
    passport: "",
    visaType: "",
  });

  const [progress, setProgress] = useState<Progress>({
    formSubmitted: false,
    documentUploaded: false,
    paymentCompleted: false,
    interviewScheduled: false,
  });

  // Load from localStorage
  useEffect(() => {
    const savedApplicant = localStorage.getItem("applicant");
    const savedProgress = localStorage.getItem("progress");

    if (savedApplicant) setApplicant(JSON.parse(savedApplicant));
    if (savedProgress) setProgress(JSON.parse(savedProgress));
  }, []);

  // Save applicant
  useEffect(() => {
    localStorage.setItem("applicant", JSON.stringify(applicant));
  }, [applicant]);

  // Save progress
  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progress));
  }, [progress]);

  const handleApplicantChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicant(prev => ({ ...prev, [name]: value }));
  };

  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setProgress(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Applicant details saved!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Applicant Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={applicant.name}
            onChange={handleApplicantChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Passport No.</label>
          <input
            type="text"
            name="passport"
            value={applicant.passport}
            onChange={handleApplicantChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Visa Type</label>
          <select
            name="visaType"
            value={applicant.visaType}
            onChange={handleApplicantChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          >
            <option value="">Select Visa Type</option>
            <option value="tourist">Tourist</option>
            <option value="student">Student</option>
            <option value="work">Work</option>
          </select>
        </div>

        <h3 className="text-lg font-semibold mt-4">Application Progress</h3>
        <div className="space-y-2">
          {Object.keys(progress).map((step) => (
            <div key={step}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={step}
                  checked={progress[step as keyof Progress]}
                  onChange={handleProgressChange}
                  className="w-4 h-4"
                />
                <span>{step.replace(/([A-Z])/g, " $1")}</span>
              </label>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ApplicantForm;
