import type { Component } from "solid-js";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { UserLayout } from "../../components/user-layout/UserLayout";

const MeScreen: Component = () => {
  return (
    <UserLayout>
      <SiteTitle>Dashboard</SiteTitle>
      <div class="grid">
        <div class="col-5">
          <div class="card" style="height:500px;">
            <h2>Development Build</h2>
            <p>
              CrabShell is still in very early development and may be missing
              major features or have breaking changes suddenly.
            </p>
          </div>
        </div>
        <div class="col-2" />
        <div class="col-5">
          <div class="card" style="height:500px;">
            <h2>Video of the week</h2>
            <p>
              May the video below offer you peace of mind in these trying times.
            </p>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/A67ZkAd1wmI?si=mBQ6ZYTuUezRiHDX"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default MeScreen;
