function shortenUrl() {
    const url = document.getElementById("longUrl").value;
    console.log(url); // Process the URL

    if(!url){
        alert("Please enter a valid URL");
        return;
    }

    const response =  fetch('http://localhost:5000/success',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    });
}
