import { useSelector } from "react-redux";

export const useUserHoldingSelector = () =>
  useSelector((state) => state?.userHolding ?? []);
