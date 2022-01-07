let wallet = solanaWeb3.Keypair.generate();
let spans = document.querySelectorAll("span")
spans[0].innerHTML = wallet.publicKey.toString()
spans[1].innerHTML = Base58.encode(wallet.secretKey)
new QRCode(document.getElementById("qrcode-public"), {
	text: wallet.publicKey.toString(),
    colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
new QRCode(document.getElementById("qrcode-private"), {
	text: Base58.encode(wallet.secretKey),
    colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});