function sendMail(event) {
    event.preventDefault()
    const msg=document.getElementById("msg")
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    console.log("Form data:", parms);
    emailjs.send("service_ipd3p9o", "template_p847yfe", parms)
        .then(function(response) {
            // Code to run when the email is sent successfully
            document.getElementById("form").reset();
            msg.innerHTML="Your Message was sent successfully !!";
            msg.classList.add("msg")
            setTimeout(function() {
                msg.innerHTML = ""; // Clear the message
                msg.classList.remove("msg"); // Remove the "msg" class
            }, 3000);
            
        })
        .catch(function(error) {
            // Code to run if there's an error sending the email
            console.error("Error sending email:", error);
            alert("There was an error sending the email. Please try again later.");
        });
}

