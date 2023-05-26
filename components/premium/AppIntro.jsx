import React from "react";
import Image from "next/image";

function AppIntro() {
  return (
    <>
      <h1 className="h1 mt-4 mb-2 font-bold text-[1.875rem]">
        Upgrade to premium
      </h1>
      <div className="flex flex-col md:flex-row mb-4">
        <Image
          className="w-32 h-32 rounded-full mr-4 mb-4"
          width={128}
          height={128}
          src="/images/logo/New_logo.svg"
          alt="A picture of me"
        />
        <p className="text-base max-w-xl">
          Hi, {"I'm"}Sjors 👋
          <br />
          <br />
          {"I've"} been working on Subtitle Tools in my spare time for the past
          6 years. People from all over the world visit this website to fix
          their subtitles.
          <br />
          <br />I want to keep this website free to use for everyone. Please
          consider upgrading to premium if you want to help keep the lights on.
          Thank you!
        </p>
      </div>
    </>
  );
}

export default AppIntro;
