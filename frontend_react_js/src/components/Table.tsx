import React from 'react';

// PUBLIC_INTERFACE
export default function Table({ columns, rows, renderRow }: {
  columns: string[];
  rows: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
}) {
  /** Basic table scaffold with header and custom row rendering. */
  return (
    <div className="table" role="table">
      <table>
        <thead>
          <tr>
            {columns.map((c, i) => (<th key={i} scope="col">{c}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => <tr key={i}>{renderRow(r, i)}</tr>)}
        </tbody>
      </table>
    </div>
  );
}
