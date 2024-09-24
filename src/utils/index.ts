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

export const splitContentIntoParagraphs = (content: string, numParagraphs: number): string[] => {
  // Split the content into lines and filter out empty lines
  const lines = content.split('.').filter((line) => line.trim() !== '');

  // Calculate the number of lines per paragraph
  const linesPerParagraph = Math.ceil(lines.length / numParagraphs);

  // Generate the paragraphs by slicing the lines
  const paragraphs = [];
  for (let i = 0; i < numParagraphs; i++) {
    const start = i * linesPerParagraph;
    const end = start + linesPerParagraph;
    paragraphs.push(lines.slice(start, end).join('. ') + '.');
  }

  return paragraphs;
};


export const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "mining":
      return "#735F32"; // Brown, for Mining
    case "renewables":
      return "#009b00"; // Green, for Renewables
    case "oil and gas":
      return "#735F32"; // PrimeBlue for energy-related topics
    default:
      return "#87F1EB"; // Default to primeGray
  }
};

export const getCountryBackgroundColor = (countryCode: string) => {
  switch (countryCode.toUpperCase()) {
    case "AR": // Argentina
      return "#74ACDF"; // Light blue and white
    case "BR": // Brazil
      return "green.400"; // Green and yellow
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
    default:
      return "#C8D0D6"; // Default to primeGray for countries not in the list
  }
};
