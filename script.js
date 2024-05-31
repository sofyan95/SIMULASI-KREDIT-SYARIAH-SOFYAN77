function hitungKredit() {
    const harga = parseFloat(document.getElementById('harga').value);
    const dp = parseFloat(document.getElementById('dp').value);
    const tenor = parseInt(document.getElementById('tenor').value);

    // Validasi minimal DP 0% dari harga barang
    const dpMinimal = 0.0 * harga;
    if (dp < dpMinimal) {
        alert(`Uang muka minimal adalah 49% dari harga barang: IDR ${dpMinimal.toLocaleString()}`);
        return;
    }

    if (tenor <= 0) {
        alert("Tenor harus lebih dari 0 bulan");
        return;
    }

    const bunga = 0.49 * harga; // Bunga 49% dari harga barang
    const totalHargaDenganBunga = harga + bunga;
    const sisaPembayaran = totalHargaDenganBunga - dp;
    const angsuranBulanan = sisaPembayaran / tenor;

    document.getElementById('uangMukaHasil').textContent = `IDR ${dp.toLocaleString()}`;
    document.getElementById('angsuranHasil').textContent = `IDR ${angsuranBulanan.toLocaleString()}`;
}