function calculateAge() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    const birthDate = new Date(dob);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "You are" + age +" years  old.";
}
