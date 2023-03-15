alert("💖🥳 Cheers to you, and here's to making 2023 your best year yet!🎂🎉 Celebrate and be happy.!🎇🧨");
async function displayBirthdayMessage() {
  try {
    const response = await fetch('/assets/json/messages.json');
    const data = await response.json();

    // Get a random message from the array
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomMessage = data[randomIndex].text;

    // Display the message
    alert(randomMessage);
  } catch (error) {
    console.error(error);
  }
}