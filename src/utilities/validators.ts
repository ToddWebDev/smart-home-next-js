export const validateFullName = (value: string) =>
  value ? "" : "Full Name is required";

export const validateEmail = (value: string) => {
  if (!value) return "Email is required";
  if (!/^\S+@\S+\.\S+$/.test(value))
    return "Please enter a valid email address";
  return "";
};

export const validatePhone = (value: string) => {
  if (!value) return "Phone number is required";
  if (
    !/^\(?([2-9][0-9]{2})\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/.test(
      value,
    )
  )
    return "Please enter a valid U.S. phone number";
  return "";
};

export const validateZip = (value: string) => {
  if (!value) return "ZIP Code is required";
  if (!/^\d{5}$/.test(value)) return "Please enter a valid 5-digit ZIP Code";
  return "";
};

export const validateContactPreference = (value: string) =>
  value ? "" : "Please select your preferred contact method";
