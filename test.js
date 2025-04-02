const umm = async () => {
    try {
        const response = await fetch('https://www.google.com', { method: "HEAD" });
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};


umm();