export const GA_MEASUREMENT_ID = "G-CMMYTVP534";

export const pageview = (url) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } else {
    console.warn("window.gtag is not defined");
  }
};
