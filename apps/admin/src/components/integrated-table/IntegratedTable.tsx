import { onCleanup, onMount, For, Show } from "solid-js";

export interface ITableColumn<T> {
  header: string;
  selector: (row: T) => any;
  width?: number;
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
    createObserver();
  });

  return (
    <div style="display: flex; flex-direction: column; height: 100%; overflow: hidden;">
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
                  <th style="padding: 12px; text-align: left; background: #f8f9fa; border-bottom: 2px solid #dee2e6; white-space: nowrap;">
                    {col.header}
                  </th>
                )}
              </For>
            </tr>
          </thead>
        </table>
      </div>
      <div
        ref={scrollableRef}
        style="flex: 1; overflow: auto; position: relative;"
      >
        <Show
          when={rows() && rows()!.length > 0}
          fallback={
            <div style="text-align: center; padding: 20px;">
              <i class="fa fa-spin fa-spinner fa-2x" />
              <br />
              <span>Loading...</span>
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
              <For each={rows() || []}>
                {(row) => (
                  <tr
                    style={`height: ${rowHeight}px; cursor: pointer;`}
                    onClick={() => onRowClick && onRowClick(row)}
                  >
                    <For each={columns}>
                      {(col) => (
                        <td style="padding: 12px; border-bottom: 1px solid #dee2e6; white-space: nowrap;">
                          {col.selector(row)}
                        </td>
                      )}
                    </For>
                  </tr>
                )}
              </For>
              <tr ref={sentinelRef}>
                <td colspan={columns.length} style="height: 1px;"></td>
              </tr>
            </tbody>
          </table>
        </Show>
      </div>
    </div>
  );
}
