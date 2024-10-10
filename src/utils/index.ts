export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const datePart = dateString.split("T")[0];
  const date = new Date(datePart);

  return date.toLocaleDateString("en-US", options);
}

export const getCountryBackgroundColor = (countryCode: string) => {
  switch (countryCode.toUpperCase()) {
    case "AR": // Argentina
      return "blue.200"; // Light blue and white
    case "BR": // Brazil
      return "green.400"; // Green and yellow
    case "BZ": // Brazil
      return "blue.400"; // Green and yellow
    case "CL": // Chile
      return "red.300"; // Red, white, and blue
    case "CO": // Colombia
      return "#FFD700"; // Yellow, blue, and red
    case "MX": // Mexico
      return "#006341"; // Green, white, and red
    case "PE": // Peru
      return "red.400"; // Red and white
    case "VE": // Venezuela
      return "#F4C430"; // Yellow, blue, and red
    case "BO": // Venezuela
      return "#F4C430";
    case "PA": // Venezuela
      return "#C96868";
    case "NI": // Venezuela
      return "blue.400";
    case "SV": // Venezuela
      return "blue.500";
    default:
      return "#C8D0D6"; 
  }
};
