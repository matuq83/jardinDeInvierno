// Login del prototipo: se valida en el navegador (NO es seguridad real).
// Funciona también abriendo los archivos con doble clic (sin HTTPS).
window.Auth = {
  USER: "admin",
  HASH: "ac9689e2272427085e35b9d3e3e8bed88cb3434828b43b86fc0596cad4c6e270", // SHA-256 de "admin1234"

  // SHA-256 en JS puro (respaldo cuando el navegador no ofrece crypto.subtle)
  sha256(str){
    const b = new TextEncoder().encode(str), l = b.length, w = [];
    const K = [], H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    for (let n = 2, c = 0; c < 64; n++){ let p = true; for (let d = 2; d * d <= n; d++) if (n % d === 0){ p = false; break; }
      if (p){ K[c++] = (Math.cbrt(n) % 1) * 4294967296 | 0; } }
    const m = new Uint8Array(((l + 9 + 63) >> 6) << 6); m.set(b); m[l] = 0x80;
    new DataView(m.buffer).setUint32(m.length - 4, l * 8);
    const r = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < m.length; o += 64){
      const v = new DataView(m.buffer, o, 64);
      for (let i = 0; i < 64; i++){
        w[i] = i < 16 ? v.getUint32(i * 4) :
          (r(w[i-15],7) ^ r(w[i-15],18) ^ (w[i-15] >>> 3)) + w[i-16] + (r(w[i-2],17) ^ r(w[i-2],19) ^ (w[i-2] >>> 10)) + w[i-7] | 0;
      }
      let [a,bb,c,d,e,f,g,h] = H;
      for (let i = 0; i < 64; i++){
        const t1 = h + (r(e,6) ^ r(e,11) ^ r(e,25)) + ((e & f) ^ (~e & g)) + K[i] + w[i] | 0;
        const t2 = (r(a,2) ^ r(a,13) ^ r(a,22)) + ((a & bb) ^ (a & c) ^ (bb & c)) | 0;
        h = g; g = f; f = e; e = d + t1 | 0; d = c; c = bb; bb = a; a = t1 + t2 | 0;
      }
      [a,bb,c,d,e,f,g,h].forEach((x, i) => H[i] = H[i] + x | 0);
    }
    return H.map(x => (x >>> 0).toString(16).padStart(8, "0")).join("");
  },
  async sha(s){
    if (window.crypto && crypto.subtle){
      const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
      return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
    }
    return this.sha256(s);
  },
  async login(u, p){
    if (u.trim() === this.USER && await this.sha(p) === this.HASH){ sessionStorage.setItem("jdiAuth", "1"); return true; }
    return false;
  },
  isIn(){ return sessionStorage.getItem("jdiAuth") === "1"; },
  logout(){ sessionStorage.removeItem("jdiAuth"); location.href = "login.html"; },
  require(){ if (!this.isIn()) location.replace("login.html"); }
};
