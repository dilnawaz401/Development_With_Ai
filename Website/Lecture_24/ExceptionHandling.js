// Exception handling example using try...catch with user input
try {
  const inputValue = prompt("Enter a number:");
  const number = Number(inputValue);

  if (inputValue === null || inputValue.trim() === "" || Number.isNaN(number)) {
    throw new Error("invalid number entered");
  }

  console.log("you enter a valid number");
} catch (error) {
  console.error(Error(error.message));
}