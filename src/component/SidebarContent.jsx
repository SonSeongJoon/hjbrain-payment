import React from 'react';
import PaymentSidebar from "./payment/PaymentSidebar";

export default function SidebarContent({ selectedContent }) {
  console.log(selectedContent)
  return (
    <div className='h-full'>
      {selectedContent === 'payment' && <PaymentSidebar/>}
      {selectedContent === 'youtube' && (
        <div className='min-w-[250px] h-full  p-3 border-r border-slate-900/10 dark:border-slate-50/[0.06] select-none'>
          하이
        </div>
      )}
      {selectedContent === 'report' && (
        <div className='min-w-[250px] h-full  p-3 border-r border-slate-900/10 dark:border-slate-50/[0.06] select-none'>
          하이
        </div>
      )}
    </div>
  );
}
