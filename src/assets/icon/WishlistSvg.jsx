const WishlistSvg = ({ stroke, width, height, x, fill, viewBox }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox={viewBox ? viewBox : "0 0 24 24"}
      fill={fill ? fill : "none"}
      transform={`rotate(${x})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
        stroke={stroke ? stroke : "#1B4B66"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default WishlistSvg;
