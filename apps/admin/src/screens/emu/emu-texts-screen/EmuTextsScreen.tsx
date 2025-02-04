import {
  adminEmuTextsService,
  AdminEmuTextsWire,
} from "@crabshell/admin-client";
import { EmuLayout } from "../EmuLayout";
import { createSignal, onMount } from "solid-js";
import toast from "solid-toast";
import { A } from "@solidjs/router";
import { SiteTitle } from "../../../components/site-title/SiteTitle";

export function EmuTextsScreen() {
  const [texts, setTexts] = createSignal<AdminEmuTextsWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminEmuTextsService.getAll();
      setTexts(response);
    } catch (e: any) {
      toast.error("Failed to load emu texts");
      throw e;
    }
  });
  return (
    <EmuLayout>
      <SiteTitle>EMU Texts</SiteTitle>
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px;width:100%;">
        <A href="/emu-texts/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {texts().map((_, index) => (
            <tr>
              <td>{_.key}</td>
              <td>{_.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </EmuLayout>
  );
}

export default EmuTextsScreen;
