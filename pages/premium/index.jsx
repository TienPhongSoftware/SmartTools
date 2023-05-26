import React from "react";
import Image from "next/image";
import AppIntro from "../../components/premium/AppIntro";
import AppPremiumPerks from "../../components/premium/AppPremiumPerks";
import AppPayment from "../../components/premium/AppPayment";

function index() {
  return (
    <div className="container mx-auto">
      <AppIntro />
      <AppPremiumPerks />
      <AppPayment />
    </div>
  );
}

export default index;
