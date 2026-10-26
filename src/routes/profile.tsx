import { createFileRoute, redirect } from "@tanstack/react-router";
import { academicHead } from "@/lib/page-head";

export const Route = createFileRoute("/profile")({
  head: () => academicHead("Join us — previous profile address", "Junyi Zhao’s research enquiries and collaboration page has moved to Join us.", "/join"),
  beforeLoad: () => { throw redirect({ to: "/join", replace: true }); },
});
