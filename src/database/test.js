const Database = require('./db');
const saveOrphanage = require('./saveOrphanage.js');

Database.then( async db => {

    // //insert data into the table
    await saveOrphanage(db, {
        lat: "38.7201746",
        lng: "-9.1728467",
        name: `Ajuda de Mãe`,
        about: 'Support each Mother and each Family so that the birth of the Baby is a factor in improving their life and family life.',
        whatsapp: "213827850",
        images: [
            'http://www.ajudademae.pt/_/rsrc/1584363874626/inicio/plano%20de%20contingencia.jpg',
            'https://lh5.googleusercontent.com/p/AF1QipOYT_RWKeLdcqdohT2BtS33jttlEV9YObbO1h4h=w408-h272-k-no'
        ].toString(),
        instructions: 'Volunteers provide a large part of the services provided by Ajuda de Mãe, being a valuable contribution to their smooth functioning and dynamics. By becoming a Mother Aid volunteer, you help us to help the pregnant woman provide a full and healthy development for her baby and ensure a better life for the whole family.',
        opening_hours: 'Visiting hours from 9 am to 7 pm',
        open_on_weekends: '1'
    });
    
    //query data in the table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);
    
    // //consult only 1 orphanage by id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    console.log(orphanage);
    
        // //delete data from table
        // console.log(await db.run("DELETE FROM orphanages WHERE id ='3' "))
    
});