import client from "../utils/client";

export const fetchUserHoldingApi = async () =>
  client().get("/v3/bde7230e-bc91-43bc-901d-c79d008bddc8");
