import {
  createSignal,
  createMemo,
  onCleanup,
  onMount,
  For,
  Show,
} from "solid-js";

export interface ITableColumn<T> {
  header: string;
  selector: (row: T) => any;
  width?: number;
  sortable?: boolean;
  filterable?: boolean;
  customSort?: (a: T, b: T) => number;
  customRender?: (value: any, row: T) => any;
}

export interface IntegratedTableProps<T> {
  columns: ITableColumn<T>[];
  rows(): T[] | undefined;
  onRowClick?: (row: T) => void;
  loadMoreRows?: () => Promise<void>;
  rowHeight?: number;
}

export function IntegratedTable<T>({
  columns,
  rows,
  onRowClick,
  loadMoreRows,
  rowHeight = 40,
}: IntegratedTableProps<T>) {
  let scrollableRef: HTMLDivElement | undefined;
  let sentinelRef: HTMLTableRowElement | undefined;

  const [searchTerm, setSearchTerm] = createSignal("");
  const [sortConfig, setSortConfig] = createSignal<
    { key: string; direction: "asc" | "desc" }[]
  >([]);
  const [scrollTop, setScrollTop] = createSignal(0);
  const [containerHeight, setContainerHeight] = createSignal(0);

  const handleSort = (col: ITableColumn<T>) => {
    if (!col.sortable) return;
    setSortConfig((prev) => {
      const existing = prev.find((s) => s.key === col.header);
      if (existing) {
        if (existing.direction === "asc")
          return prev.map((s) =>
            s.key === col.header ? { ...s, direction: "desc" } : s
          );
        return prev.filter((s) => s.key !== col.header);
      }
      return [...prev, { key: col.header, direction: "asc" }];
    });
  };

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
      const column = columns.find((col) => col.header === key);
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

  const visibleRange = createMemo(() => {
    const scroll = scrollTop();
    const height = containerHeight();
    const start = Math.floor(scroll / rowHeight);
    const count = Math.ceil(height / rowHeight);
    return { start, end: start + count };
  });

  const getSortIcon = (col: ITableColumn<T>) => {
    const sorting = sortConfig().find((s) => s.key === col.header);
    if (!sorting) return "fa-caret-right";
    return sorting.direction === "asc" ? "fa-caret-up" : "fa-caret-down";
  };

  const createObserver = () => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && loadMoreRows) await loadMoreRows();
      },
      { root: scrollableRef, threshold: 1.0 }
    );
    if (sentinelRef) observer.observe(sentinelRef);
    onCleanup(() => observer.disconnect());
  };

  onMount(() => {
    if (scrollableRef) setContainerHeight(scrollableRef.clientHeight);
    createObserver();
  });

  return (
    <div style="display: flex; flex-direction: column; height: 100%; overflow: hidden;">
      <input
        type="text"
        placeholder="Search..."
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
        style="margin: 10px; padding: 8px; width: 95%; border: 1px solid #ccc; border-radius: 4px;"
      />
      <div style="overflow-x: auto;">
        <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
          <colgroup>
            <For each={columns}>
              {(col) => (
                <col style={col.width ? `width: ${col.width}px;` : ""} />
              )}
            </For>
          </colgroup>
          <thead>
            <tr>
              <For each={columns}>
                {(col) => (
                  <th
                    style="padding: 12px; text-align: left; background: #f8f9fa; border-bottom: 2px solid #dee2e6; white-space: nowrap; cursor: pointer;"
                    onClick={() => handleSort(col)}
                  >
                    {col.header}{" "}
                    <Show when={col.sortable}>
                      <i class={`fa ${getSortIcon(col)}`} />
                    </Show>
                  </th>
                )}
              </For>
            </tr>
          </thead>
        </table>
      </div>
      <div
        ref={scrollableRef}
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
        style="flex: 1; overflow: auto; position: relative;"
      >
        <Show
          when={sortedFilteredRows().length > 0}
          fallback={
            <div style="text-align: center; padding: 20px;">
              <Show when={rows()?.length === 0}>
                <i class="fa fa-spin fa-spinner fa-2x" />
                <br />
                <span>Loading...</span>
              </Show>
              <Show when={rows()?.length > 0}>
                <span>No results found.</span>
              </Show>
            </div>
          }
        >
          <table style="width: 100%; table-layout: fixed; border-collapse: collapse;">
            <colgroup>
              <For each={columns}>
                {(col) => (
                  <col style={col.width ? `width: ${col.width}px;` : ""} />
                )}
              </For>
            </colgroup>
            <tbody>
              <tr style={{ height: `${visibleRange().start * rowHeight}px` }}>
                <td colspan={columns.length} style="padding: 0; border: none" />
              </tr>
              <For
                each={sortedFilteredRows().slice(
                  visibleRange().start,
                  visibleRange().end
                )}
              >
                {(row) => (
                  <tr
                    style={`height: ${rowHeight}px; cursor: pointer;`}
                    onClick={() => onRowClick && onRowClick(row)}
                  >
                    <For each={columns}>
                      {(col) => (
                        <td style="padding: 12px; border-bottom: 1px solid #dee2e6; white-space: nowrap;">
                          {col.customRender
                            ? col.customRender(col.selector(row), row)
                            : col.selector(row)}
                        </td>
                      )}
                    </For>
                  </tr>
                )}
              </For>
              <tr
                style={{
                  height: `${
                    (sortedFilteredRows().length - visibleRange().end) *
                    rowHeight
                  }px`,
                }}
              >
                <td colspan={columns.length} style="padding: 0; border: none" />
              </tr>
              <tr ref={sentinelRef}>
                <td colspan={columns.length} style="height: 1px" />
              </tr>
            </tbody>
          </table>
        </Show>
      </div>
    </div>
  );
}
