import SideBar from "@components/admin/SidePannel";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* side pannel for the dashboard */}
      <div className=" hidden mb-[260px] md:flex md:w-60 md:flex-col md:fixed md:inset-y-0   mt-28 rounded-sm">
        <SideBar />
      </div>

      <main className="md:pl-60 ">{children}</main>
    </div>
  );
}
