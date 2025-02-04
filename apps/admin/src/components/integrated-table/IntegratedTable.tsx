import { createSignal, createEffect, For } from "solid-js";

export interface ITableColumn<T> {
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  filterType?: "boolean" | "number" | "string";
  selector: (row: T) => any;
  width?: number;
}

export interface IntegratedTableProps<T> {
  columns: ITableColumn<T>[];
  fetchData: (params: {
    page: number;
    sort?: string;
    filter?: Record<number, any>;
  }) => Promise<T[]>;
  onRowClick?: (row: T) => void;
}

export function IntegratedTable<T>({
  columns,
  fetchData,
  onRowClick,
}: IntegratedTableProps<T>) {
  const [rows, setRows] = createSignal<T[]>([]);
  const [page, setPage] = createSignal(1);
  const [sort, setSort] = createSignal<
    { column: string; direction: "Ascending" | "Descending" } | undefined
  >(undefined);
  const [filters, setFilters] = createSignal<Record<number, any>>({});

  const loadData = async () => {
    const data = await fetchData({
      page: page(),
      sort: sort() ? `${sort()!.column}:${sort()!.direction}` : undefined,
      filter: filters(),
    });
    setRows(data);
  };

  createEffect(loadData);

  return (
    <div>
      <table style="width:100%; table-layout:fixed;">
        <colgroup>
          <For each={columns}>
            {(col) => <col style={col.width ? `width:${col.width}%` : ""} />}
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
                        const key = col.selector.toString();
                        const current = sort();
                        if (!current || current.column !== key)
                          setSort({ column: key, direction: "Ascending" });
                        else if (current.direction === "Ascending")
                          setSort({ column: key, direction: "Descending" });
                        else setSort(undefined);
                      }}
                      class="fa fa-caret-right"
                      style="cursor:pointer;margin-left:8px;"
                    />
                  )}
                </th>
              )}
            </For>
          </tr>
          <tr>
            <For each={columns}>
              {(col, index) => (
                <th style="white-space:nowrap;">
                  {col.filterable &&
                    (col.filterType === "boolean" ? (
                      <input
                        type="checkbox"
                        checked={!!filters()[index()]}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            [index()]: e.currentTarget.checked,
                          }))
                        }
                      />
                    ) : (
                      <input
                        type={col.filterType === "number" ? "number" : "text"}
                        value={filters()[index()] || ""}
                        placeholder={`Filter by ${col.header}`}
                        onInput={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            [index()]: e.currentTarget.value,
                          }))
                        }
                      />
                    ))}
                </th>
              )}
            </For>
          </tr>
        </thead>
        <tbody>
          <For each={rows()}>
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
        <button onClick={() => setPage((p) => p - 1)}>
          <i class="fa fa-caret-left" style="margin-right:8px;" />
          Back
        </button>
        <button onClick={() => setPage((p) => p + 1)}>
          Next
          <i class="fa fa-caret-right" style="margin-left:8px;" />
        </button>
      </div>
    </div>
  );
}
