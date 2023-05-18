import React from "react";

function AppCookies() {
  return (
    <div className="js-cookie-consent cookie-consent fixed bottom-0 mb-8 left-0 right-0 pb-2">
      <div className="max-w-xl mx-auto px-6">
        <div className="p-2 rounded-lg bg-gray-100 border shadow">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1 items-center inline">
              <p className="ml-3 cookie-consent__message">
                Your experience on this site will be improved by allowing
                cookies.
              </p>
            </div>
            <div className="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">
              <a className="js-cookie-consent-agree cookie-consent__agree cursor-pointer flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold text-green-700 bg-green-200">
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
