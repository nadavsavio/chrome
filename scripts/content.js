const timestamps = document.querySelectorAll("span.ebZ3od");

// `document.querySelector` may return null if the selector doesn't match anything.
if (timestamps) {
  for (const thisTimestamp of timestamps) {
    thisTimestamp.textContent = 'foo';
  }
}
