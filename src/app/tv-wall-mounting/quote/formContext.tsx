"use client";

import React, { createContext, useContext, useState } from "react";

export type QuoteFormData = {
  fullName?: string;
  email?: string;
  phone?: string;
  zip?: string;
  contactPreference?: string;
  tvSize?: string;
  tvExactSize?: string;
  wallType?: string;
  needMount?: string;
  liftHelp?: string;
  addOn?: "" | "inWall" | "externalMasking";
};

const FormContext = createContext<{
  data: QuoteFormData;
  update: (updates: Partial<QuoteFormData>) => void;
}>({
  data: {},
  update: () => {},
});

export const useQuoteForm = () => useContext(FormContext);

export const QuoteFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<QuoteFormData>({});

  const update = (updates: Partial<QuoteFormData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  return (
    <FormContext.Provider value={{ data, update }}>
      {children}
    </FormContext.Provider>
  );
};
