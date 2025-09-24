import React from "react";

interface PageTitleProps {
  tag?: string;
  heading?: string;
  subHeading?: string;
  tagClass?: string;
  headingClass?: string;
  subHeadingClass?: string;
  wrapperClass?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  tag,
  heading,
  subHeading,
  tagClass = "",
  headingClass = "",
  subHeadingClass = "",
  wrapperClass = "",
}) => {
  return (
    <div
      className={`text-lg font-normal text-gray-500 primary-font ${wrapperClass}`}
    >
      <div>
        {tag && (
          <ol
            className={`list-decimal list-inside text-sm font-medium text-gray-600 primary-font ${tagClass}`}
          >
            <li className="flex justify-center items-center">{tag}</li>
          </ol>
        )}
        {heading && (
          <p
            className={`capitalize heading-title-text primary-font ${headingClass}`}
          >
            {heading}
          </p>
        )}
      </div>
      {subHeading && (
        <p className={`sub-heading-title  primary-font${subHeadingClass}`}>
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
