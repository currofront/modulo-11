const reservas = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1
    }
  ];

// CASO 1 //

console.log("//// Caso 1 ////");

  class ReservaHotel {
    constructor() {
        this._reservas = [];
        this._subtotal = 0;
        this._total = 0;
        this._iva = 1.21;
        this._descuento = 0.85;
    }

    CalculaTipoHabitacion(tipoHabitacion) {
        switch (tipoHabitacion) {
            case "standard":
                return 100;
                break;
            case "suite":
                return 150;
                break;
        }
    }

    calculaExtraPersona(personas) {
        return personas * 40 - 40
    }

    calculaSubtotal() {
        this._subtotal = reservas.reduce((acc, {tipoHabitacion, pax, noches}) => acc + (this.CalculaTipoHabitacion(tipoHabitacion) * noches + this.calculaExtraPersona(pax)), 0 )
    };

    calculaTotal() {
        this._total = reservas.reduce((acc, {tipoHabitacion, pax, noches}) => acc + ((this.CalculaTipoHabitacion(tipoHabitacion) * noches + this.calculaExtraPersona(pax)) * this._iva), 0 )
    }

    get total() {
        return this._total;
    };

    get subtotal() {
        return this._subtotal;
    };

    set reservas(reservasEntrantes) {
        this._reservas = reservasEntrantes;
        this.calculaSubtotal();
        this.calculaTotal();
    }
  };

  const miReserva = new ReservaHotel();
  miReserva.reservas = reservas; //Estamos igualandolo al array de reservas inicial.
  console.log("Reserva normal");
  console.log("Subtotal: ", miReserva.subtotal)
  console.log("Total: ", miReserva.total)

// CASO 2 //

console.log("//// Caso 2 ////");

  class ReservaTour extends ReservaHotel {
    CalculaTipoHabitacion(tipoHabitacion) {
        return tipoHabitacion = 100;
    }

    calculaSubtotal() {
        this._subtotal = reservas.reduce((acc, {tipoHabitacion, pax, noches}) => acc + (this.CalculaTipoHabitacion(tipoHabitacion) * noches + this.calculaExtraPersona(pax)) * this._descuento, 0 )
    }

    calculaTotal() {
        this._total = reservas.reduce((acc, {tipoHabitacion, pax, noches}) => acc + ((this.CalculaTipoHabitacion(tipoHabitacion) * noches + this.calculaExtraPersona(pax)) * this._descuento) * this._iva, 0 )
    }
  }

  const miReservaTour = new ReservaTour();
  miReservaTour.reservas = reservas;
  console.log("Reserva Tour");
  console.log("Subtotal: ", miReservaTour.subtotal)
  console.log("Total: ", miReservaTour.total)


// DESAFÍO //  

console.log("//// Desafío ////")


class ReservasPadre {
  constructor() {
    this._precioHabitacion = [100, 150];
    this._iva = 1.21;
    this._reservas = [];
    this._subtotal = 0;
    this._total = 0;
  }

  calculaExtraPersona(personas) {
    return personas * 40 - 40
  }

  CalculaTipoHabitacion(tipoHabitacion) {
    if (tipoHabitacion === "standard") {
      return this._precioHabitacion[0];
    } else {
      return this._precioHabitacion[1];
    }
  };

  get total() {
    return this._total;
  };

  get subtotal() {
    return this._subtotal;
  };

  set reservas(reservasEntrantes) {
    this._reservas = reservasEntrantes;
    this.calculaSubtotal();
    this.calculaTotal();
  }
}


class ReservaNormal extends ReservasPadre {
  calculaSubtotal() {
    this._subtotal = reservas.reduce((acc, { tipoHabitacion, pax, noches }) => acc + (this.CalculaTipoHabitacion(tipoHabitacion) * noches + this.calculaExtraPersona(pax)), 0)
  };

  calculaTotal() {
    this._total = reservas.reduce((acc, { tipoHabitacion, pax, noches }) => acc + ((this.CalculaTipoHabitacion(tipoHabitacion) * noches + this.calculaExtraPersona(pax)) * this._iva), 0)
  }
}

const miReserva2 = new ReservaNormal();
  miReserva2.reservas = reservas;
  console.log("Reserva Normal 2");
  console.log("Subtotal: ", miReserva2.subtotal)
  console.log("Total: ", miReserva2.total)



class ReservaTour2 extends ReservasPadre {
  constructor(){
    super()
    this._descuento = 0.85;
  };
CalculaTipoHabitacion(tipoHabitacion) {
  if(tipoHabitacion === "standard" || tipoHabitacion === "suite") {
    return this._precioHabitacion[0];
  };
};

  calculaSubtotal() {
    this._subtotal = reservas.reduce((acc, { tipoHabitacion, pax, noches }) => acc + (this.CalculaTipoHabitacion(tipoHabitacion) * noches + this.calculaExtraPersona(pax)), 0)
  };

  calculaTotal() {
    this._total = reservas.reduce((acc, { tipoHabitacion, pax, noches }) => acc + ((this.CalculaTipoHabitacion(tipoHabitacion) * noches + this.calculaExtraPersona(pax)) * this._iva) * this._descuento, 0)
  };
}


const miReservaTour2 = new ReservaTour2();
  miReservaTour2.reservas = reservas;
  console.log("Reserva Tour 2");
  console.log("Subtotal: ", miReservaTour2.subtotal)
  console.log("Total: ", miReservaTour2.total)