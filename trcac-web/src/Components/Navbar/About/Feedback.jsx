import React, { useState } from "react";
import { motion } from "framer-motion";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

// Sample data; replace with your real URLs
const feedbackReports = [
  { id: "fr-2023-24", year: "2023-24", title: "Feedback & Action Taken Report 2023-24", url: "https://www.trcac.org.in/uploads/images/documentpdf/about_feedback_&_action_taken_report_2023-24_1770845976-202501170101.pdf" },
  { id: "fr-2022-23", year: "2022-23", title: "Feedback & Action Taken Report 2022-23", url: "https://www.trcac.org.in/uploads/images/documentpdf/about_feedback_&_action_taken_report_1766274499-202407220607.pdf" },
  // add more years here if needed
];

// Utility to download safely (similar to previous)
async function safeDownload(url, filename) {
  try {
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return;
  } catch (err) {
    // fallback via fetch
  }
  const resp = await fetch(url, { mode: "cors" });
  if (!resp.ok) {
    throw new Error(`Failed to fetch (${resp.status})`);
  }
  const blob = await resp.blob();
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
}

export default function FeedbackActionReportPage() {
  const [downloading, setDownloading] = useState({});  // { [reportId]: boolean }

  const onDownload = async (report) => {
    const filename = (report.title || "feedback_report").replace(/\s+/g, "_") + ".pdf";
    setDownloading(prev => ({ ...prev, [report.id]: true }));
    try {
      await safeDownload(report.url, filename);
      // optionally, show a success message
    } catch (err) {
      window.open(report.url, "_blank", "noopener,noreferrer");
      // optionally: error message
    } finally {
      setDownloading(prev => ({ ...prev, [report.id]: false }));
    }
  };

  return (
    <div>
    <div className="max-w-4xl mx-auto px-4 pt-32 py-12 ">
      {/* Breadcrumb / Page Title */}
      <div className="mb-8">
        <nav className="text-sm text-gray-600 mb-2">
          Home / About / <span className="font-semibold text-gray-800">Feedback & Action Taken Report</span>
        </nav>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Feedback & Action Taken Report
        </h1>
      </div>

      {/* Reports list */}
      <div className="space-y-4">
        {feedbackReports.map(report => (
          <motion.div 
            key={report.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{report.year}</h2>
              <p className="mt-1 text-gray-600">{report.title}</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <a
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-md text-sm font-medium text-blue-600 hover:bg-orange-500 hover:text-white transition"
              >
                View Full PDF
              </a>
              <button
                onClick={() => onDownload(report)}
                disabled={!!downloading[report.id]}
                className={`px-4 py-2 rounded-md text-sm font-medium underline ${downloading[report.id] ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:text-blue-800"}`}
              >
                {downloading[report.id] ? "Downloading..." : "Download"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enquiry Form */}
        <div className="-ml-[12em]">
          <Enquiry />
        </div>

      </div>
        <Footer />
      </div>
  );
}
