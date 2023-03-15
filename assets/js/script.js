alert("💖🥳 Cheers to you, and here's to making 2023 your best year yet!🎂🎉 Celebrate and be happy.!🎇🧨");
function displayBirthdayMessage() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      // Get a random message from the array
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomMessage = data[randomIndex].text;

      // Display the message
      alert(randomMessage);
    } else if (xhr.readyState === 4) {
      console.error('Failed to load messages');
    }
  };

  xhr.open('GET', '/assets/json/messages.json');
  xhr.send();
}