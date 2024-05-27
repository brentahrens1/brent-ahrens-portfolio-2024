const now = new Date();
const losAngelesTime = now.toLocaleString("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
});

export const timeWithoutSeconds = losAngelesTime.replace(/:\d{2}\s/, ' ');