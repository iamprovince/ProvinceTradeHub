/**
 * Dashboard component that displays various user-related information and widgets.
 *
 * This component uses several subcomponents to display different sections of the dashboard,
 * such as Welcome, Signal, Earning, EarnedProfits, Deposited, LastWithdrawal, AppNotification,
 * Bonus, Referral, BTCTicker, ETHTicker, and Heatmap.
 *
 * The component fetches user data and displays a loading indicator until the data is available.
 *
 * @component
 * @example
 * return (
 *   <Dashboard />
 * )
 *
 * @returns {JSX.Element} The rendered Dashboard component.
 */
import { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import Loader from "./subComponents/Loader";
import Welcome from "./subComponents/Welcome";
import Signal from "./subComponents/Signal";
import EarnedProfits from "./subComponents/EarnedProfits";
import Earning from "./subComponents/EarningPlan";
import Deposited from "./subComponents/Deposited";
import Bonus from "./subComponents/Bonus";
// import BTCEquiv from "./subComponents/BTCEquiv";
// import ETHEquiv from "./subComponents/ETHEquiv";
import LastWithdrawal from "./subComponents/LastWithdrawal";
import Referral from "./subComponents/Referral";
import BTCTicker from "./subComponents/Tradeview/BTCTicker";
import ETHTicker from "./subComponents/Tradeview/ETHTicker";
import Heatmap from "./subComponents/Tradeview/Heatmap";
import AppNotification from "./subComponents/AppNotification";

const Dashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!user);
  }, [user]);

  return (
    <section className='pb-4'>
      <div className='flex flex-col w-full'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
          {loading ? <Loader /> : <Welcome />}
          {loading ? <Loader /> : <Signal />}
          {loading ? <Loader /> : <Earning />}
          {loading ? <Loader /> : <EarnedProfits />}
          {loading ? <Loader /> : <Deposited />}
          {loading ? <Loader /> : <LastWithdrawal />}
          {loading ? <Loader /> : <AppNotification />}
          {loading ? <Loader /> : <Bonus />}
          {loading ? <Loader /> : <Referral />}
          {/* {loading ? <Loader /> : <BTCEquiv />}
          {loading ? <Loader /> : <ETHEquiv />} */}
          <div className='lg:hidden my-2'>
            <BTCTicker />
            <ETHTicker />
          </div>
        </div>
        <div className='my-2'>
          <Heatmap />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
