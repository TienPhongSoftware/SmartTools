import React from "react";

function AppCookies() {
  return (
    <div class="js-cookie-consent cookie-consent fixed bottom-0 mb-8 left-0 right-0 pb-2">
      <div class="max-w-xl mx-auto px-6">
        <div class="p-2 rounded-lg bg-gray-100 border shadow">
          <div class="flex items-center justify-between flex-wrap">
            <div class="flex-1 items-center inline">
              <p class="ml-3 cookie-consent__message">
                Your experience on this site will be improved by allowing
                cookies.
              </p>
            </div>
            <div class="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">
              <a class="js-cookie-consent-agree cookie-consent__agree cursor-pointer flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold text-green-700 bg-green-200">
                Allow cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCookies;
