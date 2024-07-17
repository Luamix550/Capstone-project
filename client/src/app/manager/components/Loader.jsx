import React from "react";
import ContentLoader from "react-content-loader";

/**
 * MyLoader Component
 * 
 * A loader component to display a skeleton loading animation.
 * 
 * @param {Object} props - The properties passed to the loader component.
 * @returns {JSX.Element} A JSX element displaying the loader animation.
 */
const MyLoader = (props) => (
  <div className="bg-gray-100 hover:bg-gray-200 p-3 rounded-md cursor-pointer border border-gray-300">
    <ContentLoader 
      speed={3}
      width={476}
      height={124}
      viewBox="0 0 476 124"
      backgroundColor="#047857"
      foregroundColor="#ffffff"
      {...props}
    >
      {/* Circle loader */}
      <circle cx="292" cy="20" r="15" /> 
      
      {/* Star shape loaders */}
      <path d="M12 0.587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.065 4.665 24 6 15.6 0 9.753l8.332-1.735z" transform="translate(0, 0)" />
      <path d="M12 0.587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.065 4.665 24 6 15.6 0 9.753l8.332-1.735z" transform="translate(30, 0)" />
      <path d="M12 0.587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.065 4.665 24 6 15.6 0 9.753l8.332-1.735z" transform="translate(60, 0)" />
      <path d="M12 0.587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.065 4.665 24 6 15.6 0 9.753l8.332-1.735z" transform="translate(90, 0)" />
      
      {/* Rectangular loaders */}
      <rect x="8" y="74" rx="3" ry="3" width="178" height="6" /> 
      <rect x="9" y="103" rx="3" ry="3" width="205" height="7" /> 
      <rect x="146" y="20" rx="3" ry="3" width="58" height="7" />
    </ContentLoader>
  </div>
);

export default MyLoader;
