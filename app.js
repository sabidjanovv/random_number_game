// Load existing phone numbers from local storage
const loadPhoneNumbers = () => {
  const storedNumbers = localStorage.getItem("phoneNumbers");
  return storedNumbers ? JSON.parse(storedNumbers) : [];
};

const savePhoneNumbers = (numbers) => {
  localStorage.setItem("phoneNumbers", JSON.stringify(numbers));
};

const addPhoneNumber = () => {
  const input = document.getElementById("phone-input");
  const newNumber = input.value.trim();

  if (!newNumber.match(/^\+998 \d{2} \d{3} \d{2} \d{2}$/)) {
    alert("Please enter a valid phone number in the format: +998 XX XXX XX XX");
    return;
  }

  const phoneNumbers = loadPhoneNumbers();
  if (!phoneNumbers.includes(newNumber)) {
    phoneNumbers.push(newNumber);
    savePhoneNumbers(phoneNumbers);
    alert("Phone number added successfully!");
  } else {
    alert("This phone number already exists.");
  }

  input.value = "";
};

const choosePhoneNumber = () => {
  const phoneNumbers = loadPhoneNumbers();

  if (phoneNumbers.length === 0) {
    alert("No phone numbers available. Please add some numbers first.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
  const selectedNumber = phoneNumbers[randomIndex];

  document.getElementById("phone-number").textContent = selectedNumber;
};
