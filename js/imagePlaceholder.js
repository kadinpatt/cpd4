document.querySelectorAll('img').forEach(img => {
    console.log("runs")
    img.onerror = function(){
        this.onerror = null //Prevents infinite loop if default image is also missing
        this.src = '../js/placeholder-image.jpg' // Set a default Image
        this.alt = ""
    };
});