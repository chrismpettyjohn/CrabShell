import { createSignal, createMemo, For, Show, JSX, onMount } from "solid-js";

export interface ITableColumn<T> {
  key: keyof T;
  header: string;
  selector: (row: T) => any;
  width?: number;
  sortable?: boolean;
  filterable?: boolean;
  customSort?: (a: T, b: T) => number;
  customRender?: (value: any, row: T) => any;
  customEdit?: (
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
  const startEditing = (rowId: string, columnKey: string) =>
    setEditingCell({ rowId, column: columnKey });
  const handleEdit = (rowId: string, columnKey: string, value: any) =>
    setEditedValues((prev) => ({ ...prev, [`${rowId}-${columnKey}`]: value }));
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
  let containerRef: HTMLDivElement | undefined;
  const [containerHeight, setContainerHeight] = createSignal(0);
  const [scrollTop, setScrollTop] = createSignal(0);
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialScrollLeft = 0;
  let initialScrollTop = 0;
  const mouseDownHandler = (e: MouseEvent) => {
    isDragging = true;
    startX = e.pageX;
    startY = e.pageY;
    initialScrollLeft = containerRef?.scrollLeft || 0;
    initialScrollTop = containerRef?.scrollTop || 0;
    if (containerRef) containerRef.style.cursor = "grabbing";
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);
  };
  const mouseMoveHandler = (e: MouseEvent) => {
    if (!isDragging || !containerRef) return;
    const dx = e.pageX - startX;
    const dy = e.pageY - startY;
    containerRef.scrollLeft = initialScrollLeft - dx;
    containerRef.scrollTop = initialScrollTop - dy;
  };
  const mouseUpHandler = () => {
    isDragging = false;
    if (containerRef) containerRef.style.cursor = "grab";
    window.removeEventListener("mousemove", mouseMoveHandler);
    window.removeEventListener("mouseup", mouseUpHandler);
  };
  onMount(() => {
    if (containerRef) setContainerHeight(containerRef.clientHeight);
  });
  const visibleData = createMemo(() => {
    const data = sortedFilteredRows();
    const total = data.length;
    const startIndex = Math.floor(scrollTop() / rowHeight);
    const overscan = 2;
    const visibleCount = Math.ceil(containerHeight() / rowHeight) + overscan;
    const endIndex = Math.min(total, startIndex + visibleCount);
    return {
      data: data.slice(startIndex, endIndex),
      startIndex,
      total,
      endIndex,
    };
  });
  return (
    <div style="display: flex; flex-direction: column; height: 100%; overflow: hidden;">
      <input
        type="text"
        placeholder="Search..."
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
        style="margin: 4px 0 14px; padding: 8px;"
      />
      <div
        ref={containerRef}
        style="flex: 1; overflow: auto; position: relative; cursor: grab;"
        onMouseDown={mouseDownHandler}
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
      >
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
          <colgroup>
            <For each={columns}>
              {(col) => (
                <col style={col.width ? `width: ${col.width}px;` : ""} />
              )}
            </For>
          </colgroup>
          <thead style="position: sticky; top: 0; background: #f8f9fa;">
            <tr>
              <For each={columns}>
                {(col) => (
                  <th
                    style="padding: 12px; text-align: left; border-bottom: 2px solid #dee2e6; white-space: nowrap; cursor: pointer;"
                    onClick={() => {
                      if (!col.sortable) return;
                      setSortConfig((prev) => {
                        const existing = prev.find((s) => s.key === col.key);
                        if (existing)
                          return existing.direction === "asc"
                            ? prev.map((s) =>
                                s.key === col.key
                                  ? { ...s, direction: "desc" }
                                  : s
                              )
                            : prev.filter((s) => s.key !== col.key);
                        return [
                          ...prev,
                          { key: col.key as string, direction: "asc" },
                        ];
                      });
                    }}
                  >
                    {col.header}
                  </th>
                )}
              </For>
            </tr>
          </thead>
          <tbody>
            <tr style={`height: ${visibleData().startIndex * rowHeight}px;`}>
              <td colspan={columns.length} style="padding: 0; border: 0;"></td>
            </tr>
            <For each={visibleData().data}>
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
                              if (col.editable) startEditing(rowId, columnKey);
                            }}
                          >
                            <Show
                              when={isEditing()}
                              fallback={
                                col.customRender
                                  ? col.customRender(col.selector(row), row)
                                  : col.selector(row)
                              }
                            >
                              <Show
                                when={col.customEdit !== undefined}
                                fallback={
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
                                }
                              >
                                {col.customEdit
                                  ? col.customEdit(row, (value, save) => {
                                      handleEdit(rowId, columnKey, value);
                                      save();
                                    })
                                  : null}
                              </Show>
                            </Show>
                          </td>
                        );
                      }}
                    </For>
                  </tr>
                );
              }}
            </For>
            <tr
              style={`height: ${(visibleData().total - visibleData().endIndex) * rowHeight}px;`}
            >
              <td colspan={columns.length} style="padding: 0; border: 0;"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
