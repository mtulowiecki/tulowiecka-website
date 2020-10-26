import React from 'react';
import PropTypes from 'prop-types';

const ContactBlob = ({ className }) => (
  <svg
    className={className}
    width="1206"
    height="726"
    viewBox="0 0 1206 726"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M800.656 21.7959C911.216 -5.47622 1053.32 -12.1375 1106.7 35.1065C1159.81 82.4066 1204.64 143.512 1201.65 239.511C1198.97 335.646 1228.63 426.631 1159.32 460.491C1090.27 494.295 922.033 471.221 809.717 495.46C697.172 519.948 640.552 591.748 538.222 647.695C435.893 703.641 288.123 743.678 190.009 717.566C91.895 691.453 43.7466 599.328 17.5753 506.216C-8.55598 413.295 -12.71 319.387 70.613 265.207C153.707 211.275 324.318 197.264 429.081 177.2C533.845 157.136 572.761 131.019 631.884 94.0872C690.967 56.9633 697.923 32.37 800.656 21.7959Z"
      fill="#DFF2FA"
    />
  </svg>
);

ContactBlob.propTypes = {
  className: PropTypes.string,
};

ContactBlob.defaultProps = {
  className: '',
};

export default ContactBlob;
