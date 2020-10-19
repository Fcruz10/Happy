const Database = require('./db');
const saveOrphanage = require('./saveOrphanage.js');

Database.then( async db => {

    // //insert data into the table
    // await saveOrphanage(db, {
    //     lat: '38.85048138320722',
    // lng: '-9.137588864804526',
    // name: 'Casa do Gaiato de Lisboa',
    // about: 'We are an IPSS - Private Institution of Social Solidarity, and are under the responsibility of Patricarcado de Lisboa. According to the statutes of Casa do Gaiato, the main objective of our work is to welcome and train street children and young people, abandoned or at risk, developing, in addition to welcoming children and young people, their school monitoring and extracurricular activities .',
    // whatsapp: '219 749 974',
    // images: 'https://casadogaiato-lisboa.com/img/header-bg.jpg,https://casadogaiato-lisboa.com/img/about/5.jpg,https://casadogaiato-lisboa.com/img/about/3.jpg,https://casadogaiato-lisboa.com/img/portfolio/roundicons.png,https://casadogaiato-lisboa.com/img/portfolio/startup-framework.png,https://casadogaiato-lisboa.com/img/team/1.jpg',
    // instructions: 'Volunteering is an activity inherent to the exercise of citizenship that translates into a solidary relationship with others, participating, in a free and organized way, in solving the problems that affect society in general.',
    // opening_hours: 'Visiting hours from 9 am to 7 pm',
    // open_on_weekends: '0'
    // });
    
    // //query data in the table
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    // console.log(selectedOrphanages);
    
    // //consult only 1 orphanage by id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    // console.log(orphanage);
    
        // //delete data from table
        // console.log(await db.run("DELETE FROM orphanages WHERE id ='3' "))
    
});