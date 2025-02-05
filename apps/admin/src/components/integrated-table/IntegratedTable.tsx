import { createSignal, createMemo, createEffect, For } from "solid-js";

export interface ITableColumn<T> {
  header: string;
  sortable?: boolean;
  selector: (row: T) => any;
  width?: number;
}

export interface IntegratedTableProps<T> {
  columns: ITableColumn<T>[];
  rows: () => T[]; // Accepts the signal function instead of raw array
  onRowClick?: (row: T) => void;
  pageSize?: number;
}

export function IntegratedTable<T>({
  columns,
  rows,
  onRowClick,
  pageSize = 10,
}: IntegratedTableProps<T>) {
  const [page, setPage] = createSignal(1);
  const [sort, setSort] = createSignal<{
    column: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [search, setSearch] = createSignal("");

  const sortedAndFilteredRows = createMemo(() => {
    let data = rows(); // Use rows() to ensure reactivity

    // Global Search
    if (search()) {
      const lowerSearch = search().toLowerCase();
      data = data.filter((row) =>
        columns.some((col) =>
          String(col.selector(row)).toLowerCase().includes(lowerSearch)
        )
      );
    }

    // Sorting
    if (sort()) {
      const { column, direction } = sort()!;
      data = [...data].sort((a, b) => {
        const colDef = columns.find((col) => col.header === column);
        if (!colDef) return 0;

        const valA = String(colDef.selector(a)).toLowerCase();
        const valB = String(colDef.selector(b)).toLowerCase();

        return direction === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      });
    }

    return data;
  });

  const paginatedRows = createMemo(() => {
    const start = (page() - 1) * pageSize;
    return sortedAndFilteredRows().slice(start, start + pageSize);
  });

  return (
    <div style="width: 100%; overflow-x: auto;">
      <input
        type="text"
        placeholder="Search..."
        onInput={(e) => setSearch(e.currentTarget.value)}
        style="margin-bottom: 10px; padding: 5px; width: 100%;"
      />

      <table class="table table-striped">
        <colgroup>
          <For each={columns}>
            {(col) => <col style={col.width ? `width:${col.width}px` : ""} />}
          </For>
        </colgroup>
        <thead>
          <tr>
            <For each={columns}>
              {(col) => (
                <th style="white-space:nowrap;">
                  {col.header}
                  {col.sortable && (
                    <i
                      onClick={() => {
                        const current = sort();
                        if (!current || current.column !== col.header)
                          setSort({ column: col.header, direction: "asc" });
                        else if (current.direction === "asc")
                          setSort({ column: col.header, direction: "desc" });
                        else setSort(null);
                      }}
                      class="fa fa-caret-right"
                      style="cursor:pointer;margin-left:8px;"
                    />
                  )}
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={paginatedRows()}>
            {(row) => (
              <tr onClick={() => onRowClick && onRowClick(row)}>
                <For each={columns}>
                  {(col) => (
                    <td style="white-space:nowrap;">{col.selector(row)}</td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>

      <div style="display:flex;justify-content:flex-end;align-items:center;width:100%;margin-top:14px;gap:14px;">
        <button disabled={page() === 1} onClick={() => setPage((p) => p - 1)}>
          <i class="fa fa-caret-left" style="margin-right:8px;" /> Back
        </button>
        <span>Page {page()}</span>
        <button
          disabled={paginatedRows().length < pageSize}
          onClick={() => setPage((p) => p + 1)}
        >
          Next <i class="fa fa-caret-right" style="margin-left:8px;" />
        </button>
      </div>
    </div>
  );
}
