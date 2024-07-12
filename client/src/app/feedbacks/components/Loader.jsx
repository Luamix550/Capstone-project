import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div className=" hover:bg-gray-200 p-3 rounded-md cursor-pointer border border-gray-300">
    <ContentLoader 
      speed={3}
      width={300}
      height={124}
      viewBox="0 0 476 124"
      backgroundColor="#047857"
      foregroundColor="#ffffff"
      {...props}
    >
      <circle cx="440" cy="20" r="20" /> 
      
      <path d="M12 0.587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.065 4.665 24 6 15.6 0 9.753l8.332-1.735z" transform="translate(0, 0)" />
      <path d="M12 0.587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.065 4.665 24 6 15.6 0 9.753l8.332-1.735z" transform="translate(30, 0)" />
      <path d="M12 0.587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.065 4.665 24 6 15.6 0 9.753l8.332-1.735z" transform="translate(60, 0)" />
      <path d="M12 0.587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 20.065 4.665 24 6 15.6 0 9.753l8.332-1.735z" transform="translate(90, 0)" />
      
      <rect x="150" y="75" rx="3" ry="3" width="178" height="6" /> 
      <rect x="140" y="35" rx="3" ry="3" width="200" height="7" /> 
      <rect x="150" y="93" rx="3" ry="3" width="178" height="6" /> 
      <rect x="150" y="113" rx="3" ry="3" width="178" height="6" /> 
      <rect x="150" y="58" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
  </div>
);

export default MyLoader;
