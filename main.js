function calculateTimeLeft() {
    const currentAge = parseInt(document.getElementById('age').value);
    const ageLimit = 90;
    const yearsLeft = ageLimit - currentAge;
    let resultMessage;
    if (currentAge<= 0)
        {
            resultMessage = "You havn't been born yet"
        }
        else if (yearsLeft > 0) {
        const daysLeft = yearsLeft * 365;
        const weeksLeft = yearsLeft * 52;
        const monthsLeft = yearsLeft * 12;

        resultMessage = `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left 💀.`;
    } else {
        resultMessage = "You have already reached or exceeded the age of 90";
    }
    document.getElementById('result').innerText = resultMessage;
    console.log(resultMessage);
}