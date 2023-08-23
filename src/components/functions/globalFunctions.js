class GlobalFuntions extends Object {
  constructor() {
    super();
    this.pattern = {
      data: /^(\d{2})\/(\d{2})\/(\d{4})$/,
      _data: /^(\d{2})\-(\d{2})\-(\d{4})$/,
      dataAmerica: /^(\d{4})\-(\d{2})\-(\d{2})$/,
      cpf: /^(\d{3})\.(\d{3})\.(\d{3})\-(\d{2})$/,
      celular: /^\([0-9]{2}\)\s[0-9]{5}\-[0-9]{4}$/,
      _celular: /^\([0-9]{2}\)\s[0-9]{4}\-[0-9]{5}$/,
      telefone: /^\([0-9]{2}\)\s[0-9]{4}\-[0-9]{4}$/,
      cep: /^[0-9]{5}\-[0-9]{3}$/,
      destino: /^[1-8]{1}$/,
    };

    this.destinos = [
      false,
      "Brasil",
      "América Latina (inclui México)",
      "Europa",
      "Estados Unidos e Canadá",
      "Ásia",
      "África",
      "Oceania",
      "Múltiplos destinos",
    ];
    this.locationsName = {
      Home: "",
      "Seguro Viagem": "primetravel",
      "Seguro Residencial": "seguro-residencial-porto-2",
      "Seguro Pet": "seguro-pet-porto",
      Odonto: "sulamerica-odonto",
      Vida: "seguro-de-vida",
      Celular: "equipamentos-portateis-3",
    };
  }
  getPageSlug() {
    var pathname = window.location.pathname.split("/");
    pathname = pathname.filter((element) => element !== "");
    //console.log(pathname);
    pathname = pathname[0] || "";
    return pathname.toLocaleLowerCase();
  }
  getPageName(slug) {
    slug = slug || "";
    slug = slug.toLocaleLowerCase();
    let name = "";
    for (let s in this.locationsName) {
      let location = this.locationsName[s];
      if (slug == location.toLocaleLowerCase()) {
        name = s;
        break;
      }
      continue;
    }
    return name;
  }
}

export default GlobalFuntions;
