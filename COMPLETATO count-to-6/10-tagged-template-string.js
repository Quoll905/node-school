console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(testo, ...input ) {

        let stringaCambiata=testo[0];

        input.forEach((v, i) => stringaCambiata += cambiaStr(v) + testo[i+1]);

        return stringaCambiata;

    };

    function cambiaStr(stringa) {
      return stringa.replace(/&/,"&amp;")
      .replace(/'/,"&apos;")
      .replace(/"/,"&quot;")
      .replace(/</,"&lt;")
      .replace(/>/,"&gt;");
    };
