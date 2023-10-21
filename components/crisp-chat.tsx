"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8254f25a-eca0-421e-b4de-2bf655c03887");
  }, []);

  return null;
};
