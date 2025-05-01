export const GA_MEASUREMENT_ID = "G-CMMYTVP534";

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
