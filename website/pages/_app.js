import "../styles/tailwind.css";
import "../styles/devices/iPhone12.css";
import "../styles/devices/samsungS20U.css";
import "../styles/devices/samsungS20.css";
import "../styles/devices/iMac.css";
import "../styles/devices/mackBookPro.css";
import "../styles/devices/iPad.css";
import "../styles/devices/iPhoneSE.css";
import "../styles/main.css";
import "../styles/devices/samsungS7Edge.css";
import "../styles/devices/introPhone.css";
import "../styles/devices/introWebSite.css";
import WebsiteMainContext from "./WebsiteMainContext";

function MyApp({ Component, pageProps }) {
  return (
    <WebsiteMainContext>
      <Component {...pageProps} />
    </WebsiteMainContext>
  );
}

export default MyApp;
