
function scrollLeft(id) {
    document.getElementById(id).scrollBy({
        left: -400,
        behavior: "smooth"
    });
}

function scrollRight(id) {
    document.getElementById(id).scrollBy({
        left: 400,
        behavior: "smooth"
    });
}

function scrollSeasons(amount) {
    document.getElementById("seasonsSlider").scrollBy({
        left: amount,
        behavior: "smooth"
    });
}



function addReview() {
    const reviewText = document.getElementById("reviewText").value.trim();
    if (reviewText === "") return;

    const reviewContainer = document.querySelector(".reviews");

    const newCard = document.createElement("div");
    newCard.className = "review_card";

    newCard.innerHTML = `
        <h4>@you</h4>
        <p>${reviewText}</p>
    `;

    reviewContainer.appendChild(newCard);


    document.getElementById("reviewText").value = "";
}

Chart.register({
    id: 'centerText',
    afterDraw(chart) {
        const { ctx } = chart;
        ctx.save();
        ctx.font = 'bold 24px Inter';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Sci-Fi', chart.width / 2, chart.height / 2 - 10);
        ctx.font = 'bold 22px Inter';
        ctx.fillText('30%', chart.width / 2, chart.height / 2 + 20);
    }
});






