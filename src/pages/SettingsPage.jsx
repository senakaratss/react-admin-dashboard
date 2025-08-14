import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import Profile from "../components/settings/Profile";
import Notifications from "../components/settings/Notifications";
import Security from "../components/settings/Security";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";

const SettingsPage = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto bg-gray-900">
      <Header title="Settings" />

      <main className="max-w-4xl mx-auto px-4 py-6 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
