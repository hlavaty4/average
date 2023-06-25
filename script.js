function calculateContracts() {
  let currentAverage = parseFloat(
    document.getElementById("currentAverage").value
  );
  let currentPrice = parseFloat(document.getElementById("currentPrice").value);

  let contractsAdd = 1;
  let isLongPosition = document.getElementById("longPosition").checked;
  // let isShortPosition = document.getElementById('shortPosition').checked;
  let contracts = parseInt(document.getElementById("contractsnow").value);
  let points = parseFloat(document.getElementById("points").value);
  let enhanced = document.getElementById("enhanced").checked;

  if ((currentPrice - currentAverage <= points) && (isLongPosition)) {
    document.getElementById("currentPrice").value = currentPrice + .25;
    if (enhanced) {
      currentAverage =
        (currentAverage * contracts + currentPrice) / (contracts + 1);
      contractsAdd++;
      contracts++;
    }
  }

  if (isLongPosition && currentAverage < currentPrice) {
    while (currentAverage < currentPrice - points) {
      currentAverage =
        (currentAverage * contracts + currentPrice) / (contracts + 1);
      contractsAdd++;
      contracts++;
    }
  }

  if ((currentAverage - currentPrice <= points) && (!isLongPosition)) {
    document.getElementById("currentPrice").value = currentPrice - .25;
    if (enhanced) {
      currentAverage =
        (currentAverage * contracts + currentPrice) / (contracts + 1);
      contractsAdd++;
      contracts++;
    }}

  if (!isLongPosition && currentAverage > currentPrice) {
    while (currentAverage > currentPrice + points) {
      currentAverage =
        (currentAverage * contracts + currentPrice) / (contracts + 1);
      contractsAdd++;
      contracts++;
    }}

  document.getElementById("contracts").textContent = contractsAdd - 1;
  document.getElementById("average").textContent = currentAverage.toFixed(2);
  document.getElementById("totalContracts").textContent = contracts;

  document.getElementById("contractsnow").value = contracts;
  document.getElementById("currentAverage").value = currentAverage.toFixed(2);
  document.getElementById("dist").textContent = currentPrice - currentAverage.toFixed(2);
  if (!isLongPosition) {
    document.getElementById("dist").textContent = currentAverage.toFixed(2) - currentPrice;
  }
}
