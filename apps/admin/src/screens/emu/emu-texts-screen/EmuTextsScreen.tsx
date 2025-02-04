import { EmuLayout } from "../EmuLayout";

export function EmuTextsScreen() {
  return (
    <EmuLayout>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr>
              <td>-</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </EmuLayout>
  );
}

export default EmuTextsScreen;
