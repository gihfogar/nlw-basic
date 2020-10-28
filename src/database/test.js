const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {

     // inserir dados na tabela - ficou sujo, mas vamos deixar assim mesmo
    await saveOrphanage(db, {
        lat: "38.7697961",
        lng: "-9.3090047",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "123456789",
        images: [
          "https://images.unsplash.com/photo-1576043061888-8751653f46af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
          "https://images.unsplash.com/photo-1600720685534-34b48dc60ad2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions:
          "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de Visitas Das 08h às 18h",
        open_on_weekends: "0",
      },)

     // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orfanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "8"')
    console.log(orphanage)

    // apagar um dado da tabela
      console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))

}) 
 