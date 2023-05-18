import React from "react";

function AppTime() {
  return (
    <div class="py-12 border-t-2 border-b-2 bg-transparent text-black dark:text-white">
      <div class="mx-auto text-center">
        <div class="text-3xl mb-8 text-left leading-none">
          In the last 30 days
        </div>

        <div class="flex justify-between flex-col sm:flex-row text-lg md:text-xl">
          <div class="lg:w-3/12">
            The tools were used <strong>237,994</strong> times
          </div>

          <div class="lg:w-3/12 px-0 sm:px-2 mx-8 lg:mx-0 sm:my-0 my-8">
            <strong>446,155</strong> subtitle files were uploaded
          </div>

          <div class="lg:w-3/12">
            <strong>218 gb</strong> of files were processed
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppTime;
