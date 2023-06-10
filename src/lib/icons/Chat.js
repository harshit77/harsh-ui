import * as React from "react";
import { memo } from "react";
const SvgChat = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M23 4.107v11.196c0 .81-.607 1.47-1.304 1.833-.4.209-.836.259-1.282.259H6.767c-.05.071-.105.14-.165.203a3142.46 3142.46 0 0 1-4.124 4.036c-.077.08-.16.154-.25.22a.749.749 0 0 1-.785.064.722.722 0 0 1-.309-.248.7.7 0 0 1-.127-.37C1 21.196 1 21.095 1 20.991V4.552c0-.11.004-.22.006-.33.016-.942.731-1.896 1.81-2.134.159-.035.32-.06.48-.088h17.37C22.013 2 23 3.006 23 4.107ZM2.57 19.314l.044.009c.054-.05.108-.099.16-.15 1.01-.988 2.027-1.97 3.027-2.968.257-.256.537-.359.897-.358 4.555.005 9.11.006 13.665.003.112 0 .225 0 .336-.008.17-.01.33-.075.456-.186.126-.11.21-.26.238-.424a1.97 1.97 0 0 0 .026-.349V4.347c-.014-.517-.43-.818-.837-.784-.045.004-.09 0-.135 0H3.531c-.075 0-.15 0-.225.003-.324.018-.59.202-.687.505a1.27 1.27 0 0 0-.045.388c-.002 4.872-.002 9.745 0 14.618l-.005.237Z"
      fill="currentColor"
    />
    <path
      d="M12.004 6.63h5.339c.12-.002.239.008.356.031a.781.781 0 0 1 .42.272.752.752 0 0 1 0 .933.781.781 0 0 1-.42.271 1.54 1.54 0 0 1-.333.035H6.643a1.355 1.355 0 0 1-.397-.054.75.75 0 0 1-.519-.784.74.74 0 0 1 .194-.444.77.77 0 0 1 .431-.236c.103-.017.207-.024.312-.023h5.34ZM9.647 11.24c1.002 0 2.003-.002 3.005.003.142-.003.283.016.418.057.338.114.533.44.498.797a.74.74 0 0 1-.2.433.77.77 0 0 1-.426.227 1.719 1.719 0 0 1-.311.028H6.665c-.112 0-.224-.01-.334-.03a.78.78 0 0 1-.435-.268.75.75 0 0 1 0-.95.78.78 0 0 1 .435-.267c.11-.02.222-.029.334-.027l2.982-.003Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgChat);
export default Memo;
