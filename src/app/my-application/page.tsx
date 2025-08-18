"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { User, FileText, MapPin, CheckCircle, AlertCircle, Save } from "lucide-react";
import toast from "react-hot-toast";

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
  const [progress, setProgress] = useState<Progress>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("progress");
      return saved
        ? JSON.parse(saved)
        : {
            formSubmitted: false,
            documentUploaded: false,
            paymentCompleted: false,
            interviewScheduled: false,
          };
    }
    return {
      formSubmitted: false,
      documentUploaded: false,
      paymentCompleted: false,
      interviewScheduled: false,
    };
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm<Applicant>({
    defaultValues: {
      name: "",
      passport: "",
      visaType: "",
    },
    mode: "onChange"
  });

  // Load saved data from localStorage only once
  useEffect(() => {
    const savedApplicant = JSON.parse(localStorage?.getItem("applicant") || "{}");
    const savedProgress = JSON.parse(localStorage?.getItem("progress") || "{}");

    if (savedApplicant.name) setValue("name", savedApplicant.name);
    if (savedApplicant.passport) setValue("passport", savedApplicant.passport);
    if (savedApplicant.visaType) setValue("visaType", savedApplicant.visaType);

    if (Object.keys(savedProgress).length > 0) {
      setProgress(savedProgress);
    }
  }, [setValue]);

  // Save progress toggle (this can update instantly)
  useEffect(() => {
    localStorage?.setItem("progress", JSON.stringify(progress));
  }, [progress]);

  const handleProgressChange = (stepName: keyof Progress) => {
    setProgress((prev) => ({ ...prev, [stepName]: !prev[stepName] }));
  };

  const onSubmit = (data: Applicant) => {
    // Save only when form submitted
    localStorage.setItem("applicant", JSON.stringify(data));
    localStorage.setItem("progress", JSON.stringify({ ...progress, formSubmitted: true }));

    setProgress((prev) => ({ ...prev, formSubmitted: true }));
    toast.success("Application Saved Successfully! 🎉");
  };

  const progressSteps = [
    { key: "formSubmitted", label: "Form Submitted", icon: <FileText className="w-4 h-4" /> },
    { key: "documentUploaded", label: "Documents Uploaded", icon: <User className="w-4 h-4" /> },
    { key: "paymentCompleted", label: "Payment Completed", icon: <CheckCircle className="w-4 h-4" /> },
    { key: "interviewScheduled", label: "Interview Scheduled", icon: <MapPin className="w-4 h-4" /> }
  ];

  const completedSteps = Object.values(progress).filter(Boolean).length;
  const progressPercentage = (completedSteps / 4) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8"> <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"> My <span className="text-blue-600 dark:text-blue-400">Application</span> </h2> <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"> Fill out the form below to start your visa application process. Our team will assist you every step of the way. </p> </div>
        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8 transition-colors duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Application Progress</h3>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {completedSteps}/4 completed
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {progressSteps.map((step) => (
              <div key={step.key} className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => handleProgressChange(step.key as keyof Progress)}
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors ${
                    progress[step.key as keyof Progress]
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 hover:border-blue-500"
                  }`}
                >
                  {progress[step.key as keyof Progress] ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    step.icon
                  )}
                </button>
                <span
                  className={`text-sm font-medium ${
                    progress[step.key as keyof Progress]
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 transition-colors duration-300"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                  />
                )}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Passport */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Passport Number *
              </label>
              <Controller
                name="passport"
                control={control}
                rules={{ required: "Passport number is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
                    placeholder="Enter passport number"
                  />
                )}
              />
              {errors.passport && <p className="text-red-500 text-sm">{errors.passport.message}</p>}
            </div>

            {/* Visa Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Visa Type *
              </label>
              <Controller
                name="visaType"
                control={control}
                rules={{ required: "Visa type is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:text-white"
                  >
                    <option value="">Select Visa Type</option>
                    <option value="tourist">Tourist Visa</option>
                    <option value="student">Student Visa</option>
                    <option value="work">Work Visa</option>
                    <option value="business">Business Visa</option>
                  </select>
                )}
              />
              {errors.visaType && <p className="text-red-500 text-sm">{errors.visaType.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isSubmitting ? "Saving..." : "Save Application"}
              </button>
              {isDirty && (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  You have unsaved changes
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantForm;
