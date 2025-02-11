// This function must return a string in the format "yyyy-mm-dd" ("year-month-day")
// Example : formatDate(new Date(2023, 11, 25)) should return "2023-12-25"


//========================= TDD ============================

/**
 * Take a Date object and transform it to the format yyyy-MM-dd and return
 * @param date Object Date
 * @returns String with the format yyyy-MM-dd, ex : "2024-08-31"
 */
export function formatDate(date: Date) {
  // TODO :: function to implement
  return null;
}

/**
 * Take a string as input in the format yyyy-MM-dd to make it an object Date.
 * 
 * @param dateString  String, ex : "2024-08-31"
 * @returns object Date
 */
export function parseDate(dateString: String) {
  // TODO :: function to implement
  return null;
}

/**
 * Take a Date object and transform it to the format given in input if it is valid
 * @param date Object Date
 * @param pattern The pattern of the desired date, ex : yyyy-MM-dd or dd/MM/YYYY
 * @returns String formatted with the pattern in input ex : "31/08/2024"
 */
export function formatDateWithPattern(date: Date, pattern: String) {
  // TODO :: function to implement
  return null;
}

//========================= Test by description ============================


/**
 * Take a Date object and transform it to the format yyyy-MM-ddThh:mm:ss and return
 * a string
 * @param date Object Date
 * @returns String with the format yyyy-MM-ddThh:mm:ss, ex : "2024-08-31T08:46:00"
 */
export function formatDateTime(date: Date) {
  // TODO :: function to implement
  return null;
}


/**
 * Take a string as input in the format yyyy-MM-ddThh:mm:ss to make it an object Date.
 * Object Date
 * 
 * @param dateTimeString  String, ex : "2024-08-31T08:46:00"
 * @returns object Date
 */
export function parseDateTime(dateString: String) {
  // TODO :: function to implement
  return null;
}



//========================= Test by code ============================

/**
 * Take a Date object and transform it to the format given in input if it is valid
 * @param dateTime Object Date
 * @param pattern The pattern of the desired date, ex : yyyy-MM-dd or dd/MM/YYYY
 * @returns String formatted with the pattern in input ex : "31/08/2024"
 */
export function formatDateTimeWithPattern(dateTime: Date, pattern: String) {
  if (!dateTime || !(dateTime instanceof Date)) {
    return null;
  }

  const year = dateTime.getFullYear();
  const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
  const day = ('0' + dateTime.getDate()).slice(-2);
  const hours = ('0' + dateTime.getHours()).slice(-2);
  const minutes = ('0' + dateTime.getMinutes()).slice(-2);
  const seconds = ('0' + dateTime.getSeconds()).slice(-2);

  const formattedDate = pattern.replace(/yyyy/g, year.toString())
    .replace(/MM/g, month)
    .replace(/dd/g, day)
    .replace(/hh/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);

  return formattedDate;
}