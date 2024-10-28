import Timer from "./Timer";

const ShowHideTimer = ({ show }: { show: boolean }) => {
  if (show) {
    return <Timer />;
  } else {
    return null;
  }
};
export default ShowHideTimer;
