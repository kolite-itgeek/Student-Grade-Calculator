document.getElementById("gradeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // My variables declearation to get student input
  let studentName = document.getElementById("studentName").value;
  let assignment1 = Number(document.getElementById("assignment1").value);
  let assignment2 = Number(document.getElementById("assignment2").value);
  let finalExam = Number(document.getElementById("finalExam").value);


  // Assignment average calculation:
  const assignmentAverage = (assignment1 + assignment2) / 2;

  //Final Grade calculation - weighted average (40% assignments, 60% final exam)
  const finalGrade = (assignmentAverage * 0.4) + (finalExam * 0.6);

  // Check if passed
  const hasPassed = finalGrade >= 70;

  // Check if excellent (passed AND finalExam > 90)
  const isExcellent = hasPassed && finalExam > 90;

  // Failure message if final grade <= 69
  let failureMessage = "";
  if (finalGrade <= 69) {
    failureMessage = "⚠️ Failed! You are advised to retake the course as your score is below the pass mark. Do better next time.";
  }

  // Display for console
  console.log("Student Name:", studentName);
  console.log("Final Grade:", finalGrade);
  console.log("Passed:", hasPassed);
  console.log("Excellent Performance:", isExcellent);
  if (failureMessage) {
    console.log(failureMessage);
  }

  // Display for InnerText
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p><strong>Student Name:</strong> ${studentName}</p>
    <p><strong>Final Grade:</strong> ${finalGrade.toFixed(2)}</p>
    <p><strong>Passed:</strong> ${hasPassed ? "Yes ✅" : "No ❌"}</p>
    <p><strong>Excellent Performance:</strong> ${isExcellent ? "Yes.. Double promotion awaits you!! 🌟" : "No"}</p>
    ${failureMessage ? `<p style="color:red; font-weight:bold;">${failureMessage}</p>` : ""}
  `;
});
