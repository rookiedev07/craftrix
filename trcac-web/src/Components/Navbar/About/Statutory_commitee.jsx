import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

/**
 * Unified Documents page: GRC | ICC | Anti-Ragging
 * - Tabbed UI for three committees
 * - Search + year filter
 * - Year-wise archive (accordion)
 * - View (open in new tab) + Download (robust JS download with fetch fallback)
 * - Per-document downloading state + accessible controls
 *
 * Requirements: Tailwind CSS and framer-motion in your project.
 */

/* -------------------------
   Sample data for each tab
   Replace these with the real URLs / metadata from your site
   ------------------------- */
const DATA = {
  grc: [
    { id: "grc-1", title: "Formation of Grievance Redressal Cell (2024-25)", year: 2024, url: "https://www.trcac.org.in/assets/grc2024-25/grc_24_25_formation_grc.pdf" },
    { id: "grc-2", title: "Minutes of Meeting - 2024", year: 2024, url: "https://www.trcac.org.in/assets/grc2023-24/grc_23_24_mm.pdf" },
    { id: "grc-3", title: "Committee composition 2023-24", year: 2023, url: "https://www.trcac.org.in/assets/grc2022-23/grc_22_23_cc.pdf" },
  ],
  icc: [
    { id: "icc-1", title: "Formation of ICC (2024-25)", year: 2024, url: "https://www.trcac.org.in/assets/icc2024-25/icc_24_25.pdf" },
    { id: "icc-2", title: "ICC Minutes of Meeting (2023)", year: 2023, url: "https://www.trcac.org.in/assets/icc2023-24/icc_23_24_mm.pdf" },
    { id: "icc-3", title: "Committee Composition", year: 2022, url: "https://www.trcac.org.in/assets/icc2022-23/icc_22_23_cc.pdf" },
    { id: "icc-4", title: "ICC Minutes of Meeting (2022)", year: 2022, url: "https://www.trcac.org.in/assets/icc2022-23/icc_22_23_mm.pdf" },
    { id: "icc-5", title: "Annual report", year: 2022, url: "https://www.trcac.org.in/assets/icc2022-23/icc_22_23_ar.pdf" },
    { id: "icc-6", title: "Committee Composition", year: 2021, url: "https://www.trcac.org.in/assets/icc2021-22/icc_21_22_cc.pdf" },
    { id: "icc-7", title: "ICC Minutes of Meeting (2021)", year: 2021, url: "https://www.trcac.org.in/assets/icc2021-22/icc_21_22_mm.pdf" },
    { id: "icc-8", title: "Annual report", year: 2021, url: "https://www.trcac.org.in/assets/icc2021-22/icc_21_22_ar.pdf" },
    { id: "icc-9", title: "Committee Composition", year: 2020, url: "https://www.trcac.org.in/assets/icc2020-21/icc_20_21_cc.pdf" },
    { id: "icc-10", title: "ICC Minutes of Meeting (2020)", year: 2020, url: "https://www.trcac.org.in/assets/icc2020-21/icc_20_21_mm.pdf" },
    { id: "icc-11", title: "Annual report", year: 2020, url: "https://www.trcac.org.in/assets/icc2020-21/icc_20_21_ar.pdf" },    
    { id: "icc-12", title: "Committee Composition", year: 2019, url: "https://www.trcac.org.in/assets/icc2019-20/icc_19_20_cc.pdf" },
    { id: "icc-13", title: "ICC Minutes of Meeting (2019)", year: 2019, url: "https://www.trcac.org.in/assets/icc2019-20/icc_19_20_cc.pdf" },
    { id: "icc-14", title: "Annual report", year: 2019, url: "https://www.trcac.org.in/assets/icc2019-20/icc_19_20_ar.pdf" },
    { id: "icc-15", title: "Committee Composition", year: 2018, url: "https://www.trcac.org.in/assets/icc2019-20/icc_19_20_ar.pdf" },
    { id: "icc-16", title: "ICC Minutes of Meeting (2018)", year: 2018, url: "https://www.trcac.org.in/assets/icc2018-19/icc_18_19_mm.pdf" },
    { id: "icc-17", title: "Annual report", year: 2018, url: "https://www.trcac.org.in/assets/icc2018-19/icc_18_19_ar.pdf" },

  ],
  antiragging: [
    { id: "ar-1", title: "Anti-Ragging Committee - Policy 2025", year: 2025, url: "https://www.trcac.org.in/assets/antiragging/antiragging_policy_2025.pdf" },
    { id: "ar-2", title: "Minutes of Anti-Ragging Meeting 2024", year: 2024, url: "https://www.trcac.org.in/assets/antiragging/antiragging_mm_2024.pdf" },
    { id: "ar-3", title: "Annual Report 2022-23 (Anti-Ragging)", year: 2023, url: "https://www.trcac.org.in/assets/antiragging/antiragging_ar_2022_23.pdf" },
  ],
};

/* -------------------------
   Small icon component
   ------------------------- */
function PdfIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14h6M9 18h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* -------------------------
   Robust download helper
   - Attempts anchor download first.
   - If browser/server prevents it, fetches blob and forces download.
   - Returns a promise; caller can show/loading states.
   ------------------------- */
async function safeDownload(url, filename) {
  // Try quick anchor download first
  try {
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", filename);
    // Some browsers may block programmatic clicks for cross-origin navigations.
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Give browser a small moment — assume success.
    return;
  } catch (err) {
    // Fall through to fetch fallback
  }

  // Fetch fallback (works even if server sends inline content-disposition in most cases)
  const response = await fetch(url, { mode: "cors" });
  if (!response.ok) {
    throw new Error(`Failed to fetch file (${response.status})`);
  }
  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // revoke after a tick
  setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
}

/* -------------------------
   Top-level component
   ------------------------- */
export default function CommitteeDocsPage() {
  // activeTab: "grc" | "icc" | "antiragging"
  const [activeTab, setActiveTab] = useState("grc");
  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [expandedYear, setExpandedYear] = useState(null);
  // track downloading doc ids
  const [downloading, setDownloading] = useState({}); // { [docId]: true }

  const docs = useMemo(() => DATA[activeTab] || [], [activeTab]);

  // collect available years dynamically from the current docs
  const years = useMemo(() => {
    const ys = Array.from(new Set(docs.map(d => d.year))).sort((a, b) => b - a);
    return ["All", ...ys];
  }, [docs]);

  // filtered list by search + year
  const filtered = useMemo(() => {
    return docs.filter(d => {
      const matchesQuery = d.title.toLowerCase().includes(query.toLowerCase());
      const matchesYear = selectedYear === "All" ? true : d.year === Number(selectedYear);
      return matchesQuery && matchesYear;
    });
  }, [docs, query, selectedYear]);

  // download click handler with UI state toggles
  const onDownload = async (doc) => {
    const filename = (doc.title || "document").replace(/\s+/g, "_") + ".pdf";
    setDownloading(prev => ({ ...prev, [doc.id]: true }));
    try {
      await safeDownload(doc.url, filename);
      // optionally: show a toast/notification here (not implemented)
    } catch (err) {
      // fallback: open in new tab so user can manually save
      window.open(doc.url, "_blank", "noopener,noreferrer");
      // optionally: show an error toast
    } finally {
      setDownloading(prev => ({ ...prev, [doc.id]: false }));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-32">
      <div className="px-24">
        <div className="max-w-8xl w-full">
        {/* Header */}
        <header className="mb-6">
          <nav className="text-sm text-gray-600 mb-2">Home / About / <span className="font-semibold text-gray-800">Committees</span></nav>
          <div className="bg-white rounded-2xl shadow p-6 md:flex md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Committees & Documents</h1>
              <p className="mt-2 text-gray-600 max-w-2xl">Browse Grievance Redressal Cell (GRC), Internal Complaints Committee (ICC), and Anti-Ragging committee documents. Use the search and filters to find minutes, reports, and compositions.</p>
            </div>

            <div className="mt-4 md:mt-0 flex gap-3">
              <a href="#documents" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:bg-orange-500 hover:text-white transition">Explore Documents</a>
              <a href="mailto:admin@trcac.org.in" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100">Contact</a>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="mb-6">
          <div className="inline-flex rounded-lg bg-white shadow p-1">
            {[
              { key: "grc", label: "GRC" },
              { key: "icc", label: "ICC" },
              { key: "antiragging", label: "Anti-Ragging" },
            ].map(tab => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => { setActiveTab(tab.key); setQuery(""); setSelectedYear("All"); setExpandedYear(null); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium focus:outline-none ${active ? "bg-orange-500 transition text-white shadow" : "text-gray-700 hover:bg-gray-50"}`}
                  aria-pressed={active}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Documents area */}
        <section id="documents" className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* Controls */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="text-lg font-semibold text-gray-800">{activeTab === "grc" ? "Grievance Redressal Cell Documents" : activeTab === "icc" ? "Internal Complaints Committee Documents" : "Anti-Ragging Documents"}</h2>

                <div className="flex items-center gap-2">
                  <label htmlFor="year" className="sr-only">Filter by year</label>
                  <select id="year" value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className="border rounded-md px-3 py-2 text-sm">
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="search" className="sr-only">Search documents</label>
                <input id="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search documents, e.g. 'minutes' or 'committee'" className="w-full border rounded-lg px-4 py-2 text-sm" />
              </div>

              {/* List */}
              <div className="mt-6 space-y-3">
                {filtered.length === 0 ? (
                  <div className="text-sm text-gray-500">No documents match your search.</div>
                ) : (
                  filtered.map(doc => (
                    <motion.article key={doc.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="border rounded-lg p-4 flex items-center justify-between hover:shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-red-50 p-2 rounded-md"><PdfIcon /></div>
                        <div>
                          <h3 className="font-medium text-gray-800">{doc.title}</h3>
                          <p className="text-sm text-gray-500">Year: {doc.year}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <a href={doc.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border px-3 py-1.5 rounded-md text-sm hover:bg-orange-500 hover:text-white transition">View PDF</a>

                        <button
                          onClick={() => onDownload(doc)}
                          disabled={!!downloading[doc.id]}
                          className="text-sm underline hover:text-blue-500 disabled:opacity-60"
                        >
                          {downloading[doc.id] ? "Downloading..." : "Download"}
                        </button>
                      </div>
                    </motion.article>
                  ))
                )}
              </div>
            </div>

            {/* Year-wise Archive */}
            <div className="mt-6 bg-white rounded-2xl shadow p-6">
              <h3 className="text-md font-semibold text-gray-800">Year-wise Archive</h3>
              <div className="mt-4 space-y-2">
                {years.filter(y => y !== "All").map(y => (
                  <div key={y} className="border rounded-md overflow-hidden">
                    <button
                      aria-expanded={expandedYear === y}
                      onClick={() => setExpandedYear(expandedYear === y ? null : y)}
                      className={`w-full text-left px-4 py-3 flex items-center justify-between ${expandedYear === y ? "bg-gray-100" : "hover:bg-orange-500 hover:text-white transition"}`}
                    >
                      <span className="font-medium">{y}</span>
                      <span className="text-sm text-gray-500">{docs.filter(d => d.year === y).length} documents</span>
                    </button>

                    {expandedYear === y && (
                      <div className="px-4 pb-4">
                        {docs.filter(d => d.year === y).map(d => (
                          <div key={d.id} className="py-2 flex items-center justify-between">
                            <div className="text-sm">{d.title}</div>
                            <div className="flex gap-3">
                              <a href={d.url} target="_blank" rel="noreferrer" className="text-sm underline hover:text-blue-500">Open</a>
                              <button onClick={() => onDownload(d)} className="text-sm underline hover:text-blue-500 disabled:opacity-60" disabled={!!downloading[d.id]}>
                                {downloading[d.id] ? "Downloading..." : "Download"}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-6 space-y-4">
              <div className="bg-white rounded-2xl shadow p-4">
                <h4 className="text-sm font-semibold">Quick Links</h4>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li><a href="/about/grc" className="hover:text-blue-500">GRC</a></li>
                  <li><a href="/about/ICC" className="hover:text-blue-500">ICC</a></li>
                  <li><a href="/about/antiragging" className="hover:text-blue-500">Anti Ragging</a></li>
                </ul>
              </div>
            </div>
          </aside>
        </section>

        {/* Enquiry Form */}
        <div id="enquiry" className="max-w-6xl mx-auto mt-12">
          <Enquiry />
        </div>

      </div>
        {/* Footer */}
      </div>
        <Footer />

    </main>
  );
}
