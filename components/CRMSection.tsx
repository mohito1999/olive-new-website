import React from 'react';
import { RefreshCw } from 'lucide-react';

const CRMSection: React.FC = () => {
  const rows = [
    { name: "Sarah Miller", source: "Facebook Ads", status: "Qualified", owner: "Olive", time: "2m ago" },
    { name: "James Chen", source: "Webinar", status: "Consult Booked", owner: "Olive", time: "15m ago" },
    { name: "Marcus Johnson", source: "Referral", status: "Closing", owner: "Human", time: "1h ago" },
    { name: "Emily Davis", source: "TikTok", status: "Negotiation", owner: "Human", time: "3h ago" },
    { name: "Alex Zandar", source: "Website Form", status: "Unresponsive", owner: "Olive", time: "5h ago" },
  ];

  return (
    <section className="py-24 px-6 bg-stone-50 w-full border-t border-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 text-stone-400 text-sm font-medium mb-2">
              <RefreshCw size={14} className="animate-spin" /> 2-Way Sync with HubSpot, Salesforce & GoHighLevel
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Your new System of Record.</h2>
           <p className="text-stone-500 max-w-2xl mx-auto">
             Or your current CRM's best friend. Track contacts, pipeline stages, and revenue in a unified feed.
           </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-stone-50 border-b border-stone-200 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                <div className="col-span-2">Lead Name</div>
                <div>Status</div>
                <div>Owner</div>
                <div className="text-right">Last Activity</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-stone-100">
                {rows.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-5 gap-4 px-6 py-4 items-center hover:bg-stone-50 transition-colors">
                        <div className="col-span-2">
                            <div className="font-medium text-stone-900">{row.name}</div>
                            <div className="text-xs text-stone-400">{row.source}</div>
                        </div>
                        <div>
                             <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                 row.status === 'Qualified' ? 'bg-green-50 text-green-700' :
                                 row.status === 'Closing' ? 'bg-blue-50 text-blue-700' :
                                 row.status === 'Consult Booked' ? 'bg-purple-50 text-purple-700' :
                                 'bg-stone-100 text-stone-600'
                             }`}>
                                 {row.status}
                             </span>
                        </div>
                        <div>
                            {row.owner === 'Olive' ? (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-olive-50 border border-olive-100 text-olive-700 text-xs font-semibold">
                                    <span className="w-1.5 h-1.5 bg-olive-500 rounded-full animate-pulse"></span> Olive
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> You
                                </span>
                            )}
                        </div>
                        <div className="text-right text-sm text-stone-400 font-mono">
                            {row.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CRMSection;