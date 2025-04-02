async function shortenUrl() {
    const url = document.getElementById("longUrl").value;
    console.log(url); // Process the URL

    if(!url){
        alert("Please enter a valid URL");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/home", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });
        
        const data = await response.json();

        if (data.success) {
            window.location.href = "/success";  // Redirect manually in frontend
        } else {
            alert("Failed to process URL");
        }

    } catch (error) {
        alert("An error occured, please try again")
        console.log(error);
    }
}
