import { QuoteFormProvider } from "./formContext";

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuoteFormProvider>{children}</QuoteFormProvider>;
}
