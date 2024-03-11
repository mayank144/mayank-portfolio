export const scrollToEmailTemplate = (id: string) => {
  // Get the element you want to scroll to
  const navbarOpen = document.getElementById("XMarkSign");
  navbarOpen?.click();

  const element = document.getElementById(id);
  if (!element) {
    return;
  }
  // Calculate the top margin (adjust this value according to your needs)
  const topMargin = 100;

  // Calculate the new scrollTop value
  const scrollTopValue = element.offsetTop - topMargin;

  // Scroll to the element with the adjusted top margin
  window.scrollTo({ top: scrollTopValue, behavior: "smooth" });
};
