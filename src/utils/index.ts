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