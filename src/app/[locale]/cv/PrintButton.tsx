'use client'

export function PrintButton({ label }: { label: string }) {
  return (
    <button className="print-btn" onClick={() => window.print()}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1v8M7 9l-3-3M7 9l3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 11h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
      {label}
    </button>
  )
}
