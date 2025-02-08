import { createSignal, createMemo, For, Show, JSX } from "solid-js";

export interface ITableColumn<T> {
  key: keyof T; // Unique key for identifying the field in the row
  header: string;
  selector: (row: T) => any;
  width?: number;
  sortable?: boolean;
  filterable?: boolean;
  customSort?: (a: T, b: T) => number;
  customRender?: (value: any, row: T) => any;
  editor?: (
    row: T,
    setValue: (value: any, save: () => void) => void
  ) => JSX.Element;
  editable?: boolean;
}

export interface IntegratedTableProps<T> {
  columns: ITableColumn<T>[];
  rows(): T[] | undefined;
  getRowId: (row: T) => string;
  onRowClick?: (row: T) => void;
  onRowEdit?: (originalRow: T, modifiedRow: T) => void;
  loadMoreRows?: () => Promise<void>;
  rowHeight?: number;
}

export function IntegratedTable<T>({
  columns,
  rows,
  getRowId,
  onRowClick,
  onRowEdit,
  loadMoreRows,
  rowHeight = 40,
}: IntegratedTableProps<T>) {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [sortConfig, setSortConfig] = createSignal<
    { key: string; direction: "asc" | "desc" }[]
  >([]);
  const [editingCell, setEditingCell] = createSignal<{
    rowId: string;
    column: string;
  } | null>(null);
  const [editedValues, setEditedValues] = createSignal<Record<string, any>>({});

  const sortedFilteredRows = createMemo(() => {
    let data = rows() || [];

    if (searchTerm()) {
      const term = searchTerm().toLowerCase();
      data = data.filter((row) =>
        columns.some((col) =>
          String(col.selector(row)).toLowerCase().includes(term)
        )
      );
    }

    sortConfig().forEach(({ key, direction }) => {
      const column = columns.find((col) => col.key === key);
      if (column) {
        data = [...data].sort((a, b) => {
          if (column.customSort)
            return direction === "asc"
              ? column.customSort(a, b)
              : column.customSort(b, a);
          const valA = column.selector(a);
          const valB = column.selector(b);
          return direction === "asc"
            ? valA > valB
              ? 1
              : -1
            : valA < valB
              ? 1
              : -1;
        });
      }
    });

    return data;
  });

  const startEditing = (rowId: string, columnKey: string) => {
    setEditingCell({ rowId, column: columnKey });
  };

  const handleEdit = (rowId: string, columnKey: string, value: any) => {
    setEditedValues((prev) => ({
      ...prev,
      [`${rowId}-${columnKey}`]: value,
    }));
  };

  const saveEdit = (row: T, columnKey: string) => {
    const rowId = getRowId(row);
    const rowKey = `${rowId}-${columnKey}`;
    if (editedValues()[rowKey] !== undefined) {
      const updatedRow = { ...row, [columnKey]: editedValues()[rowKey] };
      onRowEdit?.(row, updatedRow);
    }

    setEditedValues((prev) => {
      const newValues = { ...prev };
      delete newValues[rowKey];
      return newValues;
    });

    setEditingCell(null);
  };

  return (
    <div style="display: flex; flex-direction: column; height: 100%; overflow: hidden;">
      <input
        type="text"
        placeholder="Search..."
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
        style="margin-bottom: 14px; margin-top: 4px; padding: 8px;"
      />
      <div style="overflow-x: auto;">
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
          <thead>
            <tr>
              <For each={columns}>
                {(col) => (
                  <th
                    style="padding: 12px; text-align: left; background: #f8f9fa; border-bottom: 2px solid #dee2e6; white-space: nowrap; cursor: pointer;"
                    onClick={() => {
                      if (!col.sortable) return;
                      // @ts-ignore
                      setSortConfig((prev) => {
                        const existing = prev.find((s) => s.key === col.key);
                        if (existing) {
                          return existing.direction === "asc"
                            ? prev.map((s) =>
                                s.key === col.key
                                  ? { ...s, direction: "desc" }
                                  : s
                              )
                            : prev.filter((s) => s.key !== col.key);
                        }
                        return [...prev, { key: col.key, direction: "asc" }];
                      });
                    }}
                  >
                    {col.header}
                  </th>
                )}
              </For>
            </tr>
          </thead>
        </table>
      </div>
      <div style="flex: 1; overflow: auto; position: relative;">
        <Show when={sortedFilteredRows().length > 0}>
          <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
            <tbody>
              <For each={sortedFilteredRows()}>
                {(row) => {
                  const rowId = getRowId(row);
                  return (
                    <tr style={`height: ${rowHeight}px; cursor: pointer;`}>
                      <For each={columns}>
                        {(col) => {
                          const columnKey = col.key as string;
                          const isEditing = () =>
                            editingCell()?.rowId === rowId &&
                            editingCell()?.column === columnKey;

                          return (
                            <td
                              style="padding: 12px; border-bottom: 1px solid #dee2e6; white-space: nowrap;"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (col.editable) {
                                  startEditing(rowId, columnKey);
                                }
                              }}
                            >
                              <Show
                                when={isEditing()}
                                // @ts-ignore
                                fallback={() => col.selector(row)}
                              >
                                <input
                                  type="text"
                                  value={
                                    editedValues()[`${rowId}-${columnKey}`] ??
                                    col.selector(row)
                                  }
                                  onBlur={() => saveEdit(row, columnKey)}
                                  onKeyDown={(e) =>
                                    e.key === "Enter" &&
                                    saveEdit(row, columnKey)
                                  }
                                  onInput={(e) =>
                                    handleEdit(
                                      rowId,
                                      columnKey,
                                      e.currentTarget.value
                                    )
                                  }
                                  autofocus
                                />
                              </Show>
                            </td>
                          );
                        }}
                      </For>
                    </tr>
                  );
                }}
              </For>
            </tbody>
          </table>
        </Show>
      </div>
    </div>
  );
}
