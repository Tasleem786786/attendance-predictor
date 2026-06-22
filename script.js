function calculateAttendance() {

    let attended =
        Number(document.getElementById("attended").value);

    let total =
        Number(document.getElementById("total").value);

    if (total === 0) {

        document.getElementById("result").innerText =
            "Please enter valid values.";

        return;
    }

    let percentage =
        (attended / total) * 100;

    percentage = percentage.toFixed(2);

    let message = "";

    if (percentage >= 75) {

        let safeLeaves =
            Math.floor((attended - 0.75 * total) / 0.75);

        message =
            "Attendance: " + percentage + "%\n\n" +
            "Status: Safe ✅\n\n" +
            "You can miss approximately " +
            safeLeaves +
            " more classes.";

    } else {

        let neededClasses =
            Math.ceil((0.75 * total - attended) / 0.25);

        message =
            "Attendance: " + percentage + "%\n\n" +
            "Status: Not Safe ❌\n\n" +
            "You need to attend approximately " +
            neededClasses +
            " more classes continuously to reach 75%.";
    }

    document.getElementById("result").innerText =
        message;
}