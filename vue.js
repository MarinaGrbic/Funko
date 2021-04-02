new Vue({
    el : "#root",
    data : {
       
     proizvodi: ["Horror movie/set","Guns N' Roses","Ghostbusters", "Balrog & Gandalf"],
     websajt : "https://www.funko.com/",
     posetilac : {
        ime: "",
        email : ""
    },
    },
    computed: {
        errorIme : function() {
            if (this.posetilac.ime.length < 3) {
                return "Ime mora sadržati najmanje 3 karaktera";
            } else if (this.posetilac.ime.length > 15) {
                return "Ime ne sme sadržati vise do 15 karaktera";
            }
        },
        errorEmail : function() {
            if (this.posetilac.email.indexOf("@") < 0) {
                return "Email adresa nije pravilno uneta"
            }
        }
    },
  
});
