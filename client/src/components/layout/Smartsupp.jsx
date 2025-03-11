import { useEffect } from "react";

const SmartsuppChat = () => {
  useEffect(() => {
    if (document.getElementById("smartsupp-script")) return;

    // Set up Smartsupp global variables
    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = "9e579a8e9d9235ce7f178854da3d934b813d37d0";

    // Create and append script
    const script = document.createElement("script");
    script.id = "smartsupp-script";
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.smartsuppchat.com/loader.js?";
    document.head.appendChild(script);

    return () => {
      // Uncomment if you want to remove the script when unmounting
      // document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SmartsuppChat;
